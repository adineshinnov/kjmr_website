/* =========================================================
   KJMR - Shared Layout Injector
   - Inserts Header + Drawer + Backdrop + Sidebar + Footer
   - Uses body[data-active] to highlight top navigation
   ========================================================= */

(function () {
  const active = (document.body.dataset.active || "").toLowerCase();

  const isActive = (key) => (active === key ? "active" : "");

  const headerHTML = `
<header class="topbar">
  <a class="brand" href="index.html" aria-label="Home">
    <img class="brand__logo" src="KJMR+KL Logo Cropped.png" alt="Journal Logo" style="width: 200px; height: auto;"/>
    <div class="brand__text">
      <div class="brand__name" id="journalName">KLEF Journal of Multidisciplinary Research</div>
      <div class="brand__tag" id="journalTag">Connecting Disciplines • Enabling Discovery • Advancing Impact</div>
    </div>
  </a>

  <nav class="topnav" aria-label="Main navigation">
    <a class="topnav__link ${isActive("home")}" href="index.html">Home</a>
    <a class="topnav__link ${isActive("about")}" href="about.html">About</a>
    <a class="topnav__link ${isActive("volumes")}" href="volumes.html">Volumes</a>
    <a class="topnav__link ${isActive("submit")}" href="submit.html">Submit</a>
    <a class="topnav__link ${isActive("contact")}" href="contact.html">Contact</a>
  </nav>

  <button class="iconbtn" id="mobileMenuBtn" aria-label="Open menu">☰</button>
</header>
`;

  const drawerHTML = `
<div class="drawer" id="drawer" aria-hidden="true">
  <div class="drawer__header">
    <div class="drawer__title">Menu</div>
    <button class="iconbtn" id="closeDrawerBtn" aria-label="Close menu">✕</button>
  </div>

  <div class="drawer__body">
    <a class="drawer__link" href="index.html">Home</a>
    <a class="drawer__link" href="about.html">About</a>
    <a class="drawer__link" href="volumes.html">Volumes</a>
    <a class="drawer__link" href="submit.html">Submit</a>
    <a class="drawer__link" href="contact.html">Contact</a>

    <div class="drawer__divider"></div>

    <div class="drawer__subtitle">Journal Navigation</div>
    <a class="drawer__link" href="journal-overview.html">Journal Overview</a>
    <a class="drawer__link" href="indexing.html">Indexing & Abstracting</a>
    <a class="drawer__link" href="editorial-board.html">Editorial Board</a>
    <a class="drawer__link" href="instructions.html">Instructions for Authors</a>
    <a class="drawer__link" href="apc.html">Article Processing Charge</a>
    <a class="drawer__link" href="ethics.html">Publication Ethics</a>
    <a class="drawer__link" href="contact.html">Contact Information</a>
    <a class="drawer__link" href="special-issues.html">Open Special Issues</a>
    <a class="drawer__link" href="privacy-policy.html">Privacy Policy</a>
    <a class="drawer__link" href="terms.html">Terms and Conditions</a>
    <a class="drawer__link" href="refunds.html">Cancellations & Refunds</a>
  </div>
</div>
`;

  const backdropHTML = `<div class="backdrop" id="backdrop" hidden></div>`;

  const sidebarHTML = `
<aside class="sidebar" aria-label="Journal Navigation">
  <div class="sidebar__title">Journal Navigation</div>
  <nav class="sidenav">
    <a class="sidenav__link" href="journal-overview.html">Journal Overview</a>
    <a class="sidenav__link" href="indexing.html">Indexing & Abstracting</a>
    <a class="sidenav__link" href="editorial-board.html">Editorial Board</a>
    <a class="sidenav__link" href="instructions.html">Instructions for Authors</a>
    <a class="sidenav__link" href="apc.html">Article Processing Charge</a>
    <a class="sidenav__link" href="ethics.html">Publication Ethics</a>
    <a class="sidenav__link" href="contact.html">Contact Information</a>
    <a class="sidenav__link" href="special-issues.html">Open Special Issues</a>
    <a class="sidenav__link" href="privacy-policy.html">Privacy Policy</a>
    <a class="sidenav__link" href="terms.html">Terms and Conditions</a>
    <a class="sidenav__link" href="refunds.html">Cancellations & Refunds</a>
  </nav>
</aside>
`;

  const footerHTML = `
<div class="footer-wrap">
  <footer class="footer">
    <div class="footer__row">
      <div>
        © <span id="year"></span> <span id="footerJournal">KLEF Journal of Multidisciplinary Research (KJMR)</span>. All rights reserved.
      </div>
      <div class="footer__right">
        Published by <strong>Koneru Lakshmaiah Education Foundation (KLEF)</strong>
      </div>
    </div>
  </footer>
</div>
`;

  function replaceWithHTML(placeholderId, html) {
    const ph = document.getElementById(placeholderId);
    if (!ph) return;

    const tpl = document.createElement("template");
    tpl.innerHTML = html.trim();
    const node = tpl.content.firstElementChild;
    if (!node) return;

    ph.replaceWith(node);
  }

  replaceWithHTML("siteHeader", headerHTML);
  replaceWithHTML("siteDrawer", drawerHTML);
  replaceWithHTML("siteBackdrop", backdropHTML);
  replaceWithHTML("siteSidebar", sidebarHTML);
  replaceWithHTML("siteFooter", footerHTML);
})();
