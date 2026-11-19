import type { Metadata } from "next";
import { SiteFooter, SiteHeader, linkedInUrl } from "../_components/chrome";
import { JsonLd, organization, siteUrl } from "../_components/json-ld";

const title = "About TEMPO AI LLC | AI products for outbound sales";
const description =
  "TEMPO AI LLC is the company behind Elson, an AI outbound agent for email prospecting. What the company builds, how Elson works and how to contact us.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, type: "website", url: `${siteUrl}/about` },
  twitter: { card: "summary", title, description },
};

export default function About() {
  return (
    <main className="site-shell">
      <div className="motion-field" aria-hidden="true" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            organization,
            {
              "@type": "AboutPage",
              "@id": `${siteUrl}/about#page`,
              url: `${siteUrl}/about`,
              name: title,
              about: { "@id": `${siteUrl}/#organization` },
            },
          ],
        }}
      />
      <SiteHeader />

      <article className="content">
        <h1>About TEMPO AI LLC</h1>
        <p>
          TEMPO AI LLC builds AI products that help teams scale faster. Its product is Elson, an AI outbound
          agent for email prospecting at{" "}
          <a href="https://elson.ai" rel="noopener" target="_blank">
            elson.ai
          </a>
          .
        </p>

        <h2>What Elson does</h2>
        <p>
          Elson takes your website and a few answers, finds target companies that show a dated, sourced signal
          such as a funding round, hiring or headcount growth, writes a one-to-one email for each
          decision-maker, and sends the emails you approve from your own mailbox. It reads the replies and
          stops follow-ups when someone answers or opts out.
        </p>

        <h2>How we work</h2>
        <ul>
          <li>Nothing is sent without your approval.</li>
          <li>Every email carries an unsubscribe link.</li>
          <li>A signal is dated and sourced, and Elson says so when it finds none.</li>
        </ul>

        <h2>Contact</h2>
        <p>
          Reach us on{" "}
          <a href={linkedInUrl} rel="noopener" target="_blank">
            LinkedIn
          </a>
          . See our <a href="./products">products</a> or return to the <a href="./">home page</a>.
        </p>
      </article>

      <SiteFooter />
    </main>
  );
}
