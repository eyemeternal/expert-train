"""Local browser checks. Requires a working Python Playwright and Chromium.

Run the server from README first. No external forms are submitted.
Screenshots stay under /tmp/moziserve-qa; this script never publishes.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = 'http://127.0.0.1:8766'
OUTPUT = Path('/tmp/moziserve-qa')
OUTPUT.mkdir(exist_ok=True)
ROUTES = ('/', '/about-us/', '/services/', '/faq/', '/contact/')


def position(page):
    return page.locator('.rail').evaluate('(rail) => rail.scrollLeft')


with sync_playwright() as p:
    browser = p.chromium.launch(executable_path='/usr/bin/chromium', headless=True)
    for width in (360, 768, 1440):
        context = browser.new_context(viewport={'width': width, 'height': 900}, has_touch=width == 360)
        page = context.new_page()
        errors = []
        page.on('pageerror', lambda error: errors.append(str(error)))
        for route in ROUTES:
            response = page.goto(BASE + route, wait_until='domcontentloaded')
            assert response.status == 200, (width, route)
            page.wait_for_timeout(500)
            assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), (width, route, 'overflow')
            assert page.locator('h1').count() == 1
            assert page.title()
            assert page.locator('meta[name=description]').get_attribute('content')
            assert page.locator('.brand img').evaluate('(image) => image.complete && image.naturalWidth > 0')
            page.locator('.quote').click()
            assert page.url.endswith('/contact/#request-a-quote')
            assert 'enquiries@moziserve.co.za' in page.locator('.primary-action').get_attribute('href')
            page.goto(BASE + route, wait_until='domcontentloaded')
            if route == '/faq/':
                summary = page.locator('summary').first
                summary.focus()
                page.keyboard.press('Enter')
                assert page.locator('details').first.get_attribute('open') is not None
            page.screenshot(path=str(OUTPUT / f'{width}-{route.strip("/") or "home"}.png'), full_page=True)
        assert not errors, errors
        page.goto(BASE + '/', wait_until='domcontentloaded')
        page.locator('.rail').scroll_into_view_if_needed()
        page.mouse.move(0, 0)
        start = position(page)
        page.wait_for_function('(start) => document.querySelector(".rail").scrollLeft > start + 10', arg=start, timeout=8000)
        page.get_by_role('button', name='Next service').click()
        page.wait_for_timeout(700)
        manual = position(page)
        page.mouse.move(0, 0)
        page.wait_for_timeout(6000)
        assert abs(position(page) - manual) < 3
        page.get_by_role('button', name='Previous service').focus()
        page.keyboard.press('Enter')
        page.wait_for_timeout(700)
        assert position(page) != manual
        assert page.get_by_role('button', name='Previous service').evaluate('(button) => document.activeElement === button')
        links = page.locator('.rail h3 a').evaluate_all('(links) => links.map(link => link.getAttribute("href"))')
        assert len(links) == 6
        for link in links:
            page.goto(BASE + link, wait_until='domcontentloaded')
            assert page.locator('#' + page.url.split('#')[1]).count() == 1
        context.close()
        print(f'PASS: {width}px routes, FAQ, quote links, service links, rail auto/manual, keyboard focus')

    for width, clip in ((360, '10058463'), (1440, '30915324')):
        context = browser.new_context(viewport={'width': width, 'height': 900})
        page = context.new_page()
        page.goto(BASE + '/', wait_until='domcontentloaded')
        page.wait_for_function('() => { const v = document.querySelector("video"); return v.readyState >= 2 && !v.paused && !v.hidden; }', timeout=30000)
        assert clip in page.locator('video source').get_attribute('src')
        page.get_by_role('button', name='Pause film').click()
        assert page.locator('video').evaluate('(video) => video.paused')
        context.close()
        print(f'PASS: {width}px actual video decoding and pause')

    context = browser.new_context(reduced_motion='reduce', viewport={'width': 360, 'height': 900})
    page = context.new_page()
    page.goto(BASE + '/', wait_until='domcontentloaded')
    assert page.locator('video').evaluate('(v) => v.hidden && v.paused')
    page.locator('.rail').scroll_into_view_if_needed()
    page.wait_for_timeout(6000)
    assert position(page) == 0
    page.get_by_role('button', name='Next service').click()
    assert position(page) > 0
    context.close()
    context = browser.new_context(viewport={'width': 360, 'height': 900})
    context.route('**/*.mp4', lambda route: route.abort())
    page = context.new_page()
    page.goto(BASE + '/', wait_until='domcontentloaded')
    page.wait_for_function('document.querySelector(".film-toggle").hidden')
    assert page.locator('video').evaluate('(v) => v.hidden')
    assert page.locator('.hero').evaluate('(hero) => getComputedStyle(hero).backgroundImage.includes("10058463")')
    page.locator('.quote').click()
    assert page.url.endswith('/contact/#request-a-quote')
    context.close()
    context = browser.new_context(java_script_enabled=False)
    page = context.new_page()
    page.goto(BASE + '/')
    assert page.locator('.rail h3 a').count() == 6
    page.locator('.quote').click()
    assert page.url.endswith('/contact/#request-a-quote')
    context.close()
    browser.close()
    print('PASS: reduced motion, blocked-video fallback, quote without media, JavaScript-disabled links')
    print('Manual review still required: real touch swipes, visual screenshots, contrast, zoom, screen reader, constrained-network poster loading.')
