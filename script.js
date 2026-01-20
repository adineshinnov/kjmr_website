(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const drawer = document.getElementById("drawer");
  const backdrop = document.getElementById("backdrop");
  const openBtn = document.getElementById("mobileMenuBtn");
  const closeBtn = document.getElementById("closeDrawerBtn");

  function openDrawer() {
    if (!drawer || !backdrop) return;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    backdrop.hidden = false;
  }

  function closeDrawer() {
    if (!drawer || !backdrop) return;
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    backdrop.hidden = true;
  }

  openBtn && openBtn.addEventListener("click", openDrawer);
  closeBtn && closeBtn.addEventListener("click", closeDrawer);
  backdrop && backdrop.addEventListener("click", closeDrawer);

  // Easy configuration (edit here only)
  const cfg = {
    journalName: "KLEF Journal of Multidisciplinary Research",
    abbr: "KJMR",
    issn: "ISSN: (To be assigned)",
    eic: "Dr. Dinesh Kumar Anguraj",
    eissn: "(To be assigned)",
    frequency: "2 issues per year",
    publisher: "Koneru Lakshmaiah Education Foundation (KLEF)",
    startYear: "2026",
    desc:
      "Dedicated to publishing high-quality multidisciplinary research. We welcome original research papers, state-of-the-art reviews, and scholarly studies across Healthcare, Pharmaceutical Sciences, Agriculture, Management, Law, Science, Engineering, and related disciplines.",
  };

  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setText("journalName", cfg.journalName);
  setText("heroTitle", cfg.journalName);
  setText("abbrBadge", cfg.abbr);
  setText("issnText", cfg.issn);
  setText("eicText", cfg.eic);
  setText("eissnText", cfg.eissn);
  setText("freqText", cfg.frequency);
  setText("publisherText", cfg.publisher);
  setText("startYearText", cfg.startYear);
  setText("heroDesc", cfg.desc);
  setText("footerJournal", `${cfg.journalName} (${cfg.abbr})`);
})();
