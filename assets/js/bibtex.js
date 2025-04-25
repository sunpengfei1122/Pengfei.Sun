document.addEventListener('DOMContentLoaded', function() {
  window.showBibtex = function(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'block';
  };
  window.hideBib = function(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  };
  window.copyBib = function(textId) {
    const pre = document.getElementById(textId);
    if (!pre) return;
    navigator.clipboard.writeText(pre.textContent)
      .then(() => alert('BibTeX copied'))
      .catch(() => alert('failed, please copy'));
  };
});
