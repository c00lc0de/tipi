/**
 * Decodes obfuscated email spans (data-local + data-domain, or legacy data-codes)
 * and replaces them with mailto links. Reduces harvesting by simple bots.
 * Supports optional data-subject for mailto subject line.
 * GitHub Pages compatible: no server-side plugins required.
 */
(function() {
  document.querySelectorAll('.obfuscated-email').forEach(function(el) {
    var email;
    if (el.hasAttribute('data-local') && el.hasAttribute('data-domain')) {
      email = el.getAttribute('data-local') + '@' + el.getAttribute('data-domain');
    } else if (el.hasAttribute('data-codes')) {
      var codes = el.getAttribute('data-codes').split(',').map(Number);
      email = String.fromCharCode.apply(null, codes);
    } else {
      return;
    }
    var linkText = el.getAttribute('data-link-text');
    var subject = el.getAttribute('data-subject');
    var href = 'mailto:' + email;
    if (subject) {
      href += '?subject=' + encodeURIComponent(subject);
    }
    var a = document.createElement('a');
    a.href = href;
    a.textContent = linkText || email;
    el.innerHTML = '';
    el.appendChild(a);
  });
})();
