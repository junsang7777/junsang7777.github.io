(() => {
  'use strict';
  const list = document.querySelector('[data-publication-list]');
  if (!list || !Array.isArray(window.PUBLICATIONS) || !window.JUNSANG_SITE) return;

  const filterWrap = document.querySelector('[data-year-filters]');
  const searchInput = document.querySelector('[data-publication-search]');
  const summary = document.querySelector('[data-results-summary]');
  const empty = document.querySelector('[data-empty-state]');
  const clearButton = document.querySelector('[data-clear-filters]');
  const years = [...new Set(window.PUBLICATIONS.map((paper) => paper.year))].sort((a, b) => b - a);
  let activeYear = 'all';
  let query = '';

  const makeFilter = (value, label) => `<button class="filter-button ${value === 'all' ? 'is-active' : ''}" type="button" data-year="${value}" aria-pressed="${value === 'all'}">${label}</button>`;
  filterWrap.innerHTML = makeFilter('all', 'All') + years.map((year) => makeFilter(String(year), String(year))).join('');

  const normalize = (value) => String(value || '').toLowerCase().replace(/[^a-z0-9가-힣]+/g, ' ').trim();
  const matches = (paper) => {
    const yearMatch = activeYear === 'all' || String(paper.year) === activeYear;
    const haystack = normalize([paper.year, paper.title, paper.venue, paper.venueShort, paper.type, ...(paper.authors || [])].join(' '));
    const words = normalize(query).split(' ').filter(Boolean);
    return yearMatch && words.every((word) => haystack.includes(word));
  };

  const render = () => {
    const filtered = window.PUBLICATIONS.filter(matches);
    list.innerHTML = filtered.map((paper) => window.JUNSANG_SITE.publicationCard(paper, { reveal: false })).join('');
    summary.textContent = `${filtered.length} publication${filtered.length === 1 ? '' : 's'} shown${activeYear !== 'all' ? ` · ${activeYear}` : ''}${query ? ` · “${query}”` : ''}`;
    empty.hidden = filtered.length !== 0;
    list.hidden = filtered.length === 0;
  };

  filterWrap.addEventListener('click', (event) => {
    const button = event.target.closest('[data-year]');
    if (!button) return;
    activeYear = button.dataset.year;
    filterWrap.querySelectorAll('.filter-button').forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    render();
  });

  let timer;
  searchInput.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => { query = searchInput.value.trim(); render(); }, 90);
  });

  clearButton?.addEventListener('click', () => {
    activeYear = 'all'; query = ''; searchInput.value = '';
    const allButton = filterWrap.querySelector('[data-year="all"]');
    filterWrap.querySelectorAll('.filter-button').forEach((item) => {
      const active = item === allButton;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    render();
    searchInput.focus();
  });

  render();
})();
