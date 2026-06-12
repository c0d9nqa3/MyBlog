const STORAGE_KEY = 'yann-blog-lang';

export function getLang(): 'zh' | 'en' {
  if (typeof window === 'undefined') return 'zh';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'zh') return stored;
  const browser = navigator.language.toLowerCase();
  return browser.startsWith('zh') ? 'zh' : 'en';
}

export function setLang(lang: 'zh' | 'en') {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  applyLang(lang);
  updateToggleLabel(lang);
}

function applyLang(lang: 'zh' | 'en') {
  document.querySelectorAll('[data-zh]').forEach((el) => {
    const zh = el.getAttribute('data-zh');
    const en = el.getAttribute('data-en');
    const text = lang === 'zh' ? zh : en;
    if (text !== null) el.textContent = text;
  });

  document.querySelectorAll('[data-zh-html]').forEach((el) => {
    const zh = el.getAttribute('data-zh-html');
    const en = el.getAttribute('data-en-html');
    const html = lang === 'zh' ? zh : en;
    if (html !== null) el.innerHTML = html;
  });

  document.querySelectorAll('[data-lang-only]').forEach((el) => {
    const show = el.getAttribute('data-lang-only');
    (el as HTMLElement).style.display = show === lang ? '' : 'none';
  });
}

function updateToggleLabel(lang: 'zh' | 'en') {
  document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
    btn.textContent = lang === 'zh' ? 'EN' : '中';
  });
}

export function initI18n() {
  const lang = getLang();
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  applyLang(lang);
  updateToggleLabel(lang);

  document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = getLang();
      setLang(current === 'zh' ? 'en' : 'zh');
    });
  });
}
