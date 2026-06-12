import { useEffect, useState } from 'react';

interface Props {
  labelSite: string;
  labelPage: string;
  labelTitle: string;
}

export default function ViewCounter({ labelSite, labelPage, labelTitle }: Props) {
  const [siteCount, setSiteCount] = useState('—');
  const [pageCount, setPageCount] = useState('—');

  useEffect(() => {
    const load = () => {
      const siteEl = document.getElementById('busuanzi_value_site_pv');
      const pageEl = document.getElementById('busuanzi_value_page_pv');
      if (siteEl?.textContent && siteEl.textContent !== '—') {
        setSiteCount(siteEl.textContent);
      }
      if (pageEl?.textContent && pageEl.textContent !== '—') {
        setPageCount(pageEl.textContent);
      }
    };

    load();
    const interval = setInterval(load, 2000);
    const timeout = setTimeout(load, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="view-counter" title={labelTitle}>
      <div>
        {labelSite}{' '}
        <span id="busuanzi_container_site_pv">
          <span id="busuanzi_value_site_pv">{siteCount}</span>
        </span>
      </div>
      <div className="divider" />
      <div>
        {labelPage}{' '}
        <span id="busuanzi_container_page_pv">
          <span id="busuanzi_value_page_pv">{pageCount}</span>
        </span>
      </div>
    </div>
  );
}
