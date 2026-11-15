(() => {
  function buildDraft(values) {
    const topic = values.topic === 'Project quote' ? 'Project quote' : 'General query';
    const body = [
      `Name: ${values.name.trim()}`,
      `Project location: ${values.location.trim() || 'Not specified'}`,
      '', values.message.trim()
    ].join('\r\n');
    return `mailto:enquiries@moziserve.co.za?subject=${encodeURIComponent(`Moziserve: ${topic}`)}&body=${encodeURIComponent(body)}`;
  }

  if (typeof module !== 'undefined') module.exports = { buildDraft };
  if (typeof document === 'undefined') return;

  document.querySelector('#enquiry-composer').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    if (!values.name.trim() || !values.message.trim()) {
      document.querySelector('#draft-status').textContent = 'Please enter your name and a message.';
      form.elements[!values.name.trim() ? 'name' : 'message'].focus();
      return;
    }
    window.location.href = buildDraft(values);
    document.querySelector('#draft-status').textContent = 'Email draft requested. If your email app opens, review your message and press Send. If it does not open, use the email address below. Your details remain here.';
  });
  document.querySelector('#enquiry-composer').hidden = false;
})();
