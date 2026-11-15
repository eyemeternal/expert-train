"""Validate local routes, fragments, contact targets and reviewed image bytes."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import hashlib

ROOT = Path(__file__).resolve().parents[1]


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.ids = set()
        self.links = []
        self.assets = []
        self.quotes = []
        self.forms = 0
        self.h1s = 0
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            assert attrs['id'] not in self.ids, attrs['id']
            self.ids.add(attrs['id'])
        if tag == 'h1':
            self.h1s += 1
        if tag == 'form':
            self.forms += 1
        if tag == 'a':
            self.links.append(attrs.get('href', ''))
            if attrs.get('class') == 'quote':
                self.quotes.append(attrs['href'])
        if tag in ('img', 'script', 'link'):
            self.assets.append(attrs.get('src') or attrs.get('href', ''))


pages = {p: Page(p) for p in ROOT.rglob('index.html')}
for path, page in pages.items():
    assert page.h1s == 1, path
    if path == ROOT / 'contact/index.html':
        assert page.forms == 1
        source = path.read_text()
        assert '<form id="enquiry-composer" aria-label="Prepare an email enquiry" hidden>' in source
        assert '<section aria-labelledby="compose-heading">' in source
        assert 'contact-review' not in source
        assert '<noscript>' in source
        assert '/assets/contact.js' in source
    else:
        assert page.forms == 0, 'Unconfirmed form destination'
    if path != ROOT / 'index.html':
        assert 'class="rail"' not in path.read_text(), 'Horizontal rail escaped homepage services'
    assert page.quotes == ['/contact/#request-a-quote'], path
    for href in page.links + page.assets:
        parts = urlsplit(href)
        if parts.scheme == 'mailto':
            assert parts.path == 'enquiries@moziserve.co.za', href
        elif parts.scheme == 'tel':
            assert parts.path == '+27814893640', href
        elif not parts.scheme and not parts.netloc:
            target = ROOT / unquote(parts.path).lstrip('/') if parts.path.startswith('/') else path.parent / unquote(parts.path)
            if not parts.path:
                target = path
            elif target.is_dir():
                target /= 'index.html'
            assert target.exists(), (path, href)
            if parts.fragment:
                assert parts.fragment in pages[target].ids, (path, href)
    assert '\u2014' not in path.read_text(), path
home = pages[ROOT / 'index.html']
services = [link for link in home.links if link.startswith('/services/#')]
assert len(services) == len(set(services)) == 6
for local, captured in [('logo.png', 'header-logo-91.png'), ('site-icon.png', 'site-icon-192.png')]:
    original = ROOT.parent / 'docs/moziserve/evidence/2026-11-15' / captured
    digest = hashlib.sha256((ROOT / 'assets' / local).read_bytes()).hexdigest()
    assert digest == hashlib.sha256(original.read_bytes()).hexdigest()
print(f'PASS: {len(pages)} pages, local links/assets/fragments, six service anchors, quote/contact targets, email composer only, original image bytes.')
