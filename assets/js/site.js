(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const header = document.querySelector('[data-header]');

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    if (themeButton) themeButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    try { localStorage.setItem('junsang-theme', theme); } catch (_) {}
  };

  themeButton?.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    mobileNav?.classList.toggle('is-open', open);
  });
  mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('is-open');
  }));

  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 10);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  document.querySelectorAll('[data-current-year]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const escapeHTML = (value = '') => String(value).replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[char]));

  const renderAuthors = (authors = []) => authors.map((author) => {
    const safe = escapeHTML(author);
    return author.toLowerCase().includes('yoo, jun-sang') || author.toLowerCase().includes('jun-sang yoo')
      ? `<strong>${safe}</strong>` : safe;
  }).join(', ');

  const publicationCard = (paper, { reveal = true } = {}) => {
    const links = (paper.links || []).map((link) => `<a class="pub-link ${link.kind === 'primary' ? 'primary' : ''}" href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(link.label)}</a>`).join('');
    const fallback = escapeHTML(paper.fallback || paper.image);
    return `<article class="pub-card ${reveal ? 'reveal' : ''}" data-year="${paper.year}" data-publication-id="${escapeHTML(paper.id)}">
      <div class="pub-media"><span class="pub-year">${paper.year}</span><img src="${escapeHTML(paper.image)}" alt="Graphic for ${escapeHTML(paper.title)}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${fallback}'"></div>
      <div class="pub-body">
        <div class="pub-meta"><span class="tag">${escapeHTML(paper.venueShort)}</span><span class="pub-type">${escapeHTML(paper.type)}</span></div>
        <h3 class="pub-title">${escapeHTML(paper.title)}</h3>
        <p class="pub-authors">${renderAuthors(paper.authors)}</p>
        <p class="pub-venue">${escapeHTML(paper.venue)}</p>
        <div class="pub-actions">${links || '<span class="pub-type">Link forthcoming</span>'}</div>
        <details class="pub-abstract"><summary>Abstract</summary><p>${escapeHTML(paper.abstract)}</p></details>
      </div>
    </article>`;
  };

  window.JUNSANG_SITE = { escapeHTML, renderAuthors, publicationCard };

  const selectedContainer = document.querySelector('[data-selected-publications]');
  if (selectedContainer && Array.isArray(window.PUBLICATIONS)) {
    selectedContainer.innerHTML = window.PUBLICATIONS.filter((paper) => paper.selected).slice(0, 4).map((paper) => publicationCard(paper)).join('');
    selectedContainer.querySelectorAll('.reveal').forEach((item) => {
      if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const inlineObserver = new IntersectionObserver((entries, obs) => {
          entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); } });
        }, { threshold: .1 });
        inlineObserver.observe(item);
      } else item.classList.add('is-visible');
    });
  }
})();
