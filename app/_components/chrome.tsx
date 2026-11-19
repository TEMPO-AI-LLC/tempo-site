export const linkedInUrl = "https://www.linkedin.com/in/charlesperret/";

export function SiteHeader() {
  return (
    <header className="site-header" aria-label="TEMPO AI LLC">
      <a className="brand" href="./" aria-label="TEMPO AI LLC home">
        <span className="brand-tempo">TEMPO</span>
        <span className="brand-ai">AI</span>
      </a>

      <nav className="site-nav" aria-label="Main">
        <a className="text-link" href="./about">
          ABOUT
        </a>
        <a className="text-link" href="./products">
          PRODUCTS
        </a>
        <a className="text-link" href={linkedInUrl} rel="noopener" target="_blank">
          CONTACT
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© 2026 TEMPO AI LLC</span>
      <a className="text-link" href="https://elson.ai" rel="noopener" target="_blank">
        ELSON.AI
      </a>
      <a className="text-link" href={linkedInUrl} rel="noopener" target="_blank">
        CONTACT
      </a>
    </footer>
  );
}
