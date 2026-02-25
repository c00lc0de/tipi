/**
 * Nav dropdown: toggle aria-expanded for accessibility.
 * Dropdown visibility is handled by CSS (:hover, :focus-within).
 * Burger menu: close when clicking outside the nav.
 */
document.addEventListener('DOMContentLoaded', function () {
  // Close burger menu when clicking outside
  const navTrigger = document.getElementById('nav-trigger');
  const siteNav = document.querySelector('.site-nav');
  if (navTrigger && siteNav) {
    document.addEventListener('click', function (e) {
      if (navTrigger.checked && !siteNav.contains(e.target)) {
        navTrigger.checked = false;
      }
    });
  }

  document.querySelectorAll('[data-dropdown]').forEach(function (dropdown) {
    const trigger = dropdown.querySelector('[data-dropdown-trigger]');
    if (!trigger) return;

    function setExpanded(expanded) {
      trigger.setAttribute('aria-expanded', String(expanded));
    }

    dropdown.addEventListener('focusin', function () {
      setExpanded(true);
    });
    dropdown.addEventListener('focusout', function (e) {
      if (!dropdown.contains(e.relatedTarget)) {
        setExpanded(false);
      }
    });
    dropdown.addEventListener('mouseenter', function () {
      setExpanded(true);
    });
    dropdown.addEventListener('mouseleave', function () {
      setExpanded(false);
    });
  });
});
