import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../_components/chrome";
import { JsonLd, organization, siteUrl } from "../_components/json-ld";

const title = "Products | TEMPO AI LLC, maker of Elson";
const description =
  "Elson is the AI outbound agent from TEMPO AI LLC: it finds companies with a dated, sourced signal, drafts one-to-one emails and sends only what you approve.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products" },
  openGraph: { title, description, type: "website", url: `${siteUrl}/products` },
  twitter: { card: "summary", title, description },
};

export default function Products() {
  return (
    <main className="site-shell">
      <div className="motion-field" aria-hidden="true" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            organization,
            {
              "@type": "SoftwareApplication",
              "@id": "https://elson.ai/#software",
              name: "Elson",
              url: "https://elson.ai",
              applicationCategory: "BusinessApplication",
              description:
                "Elson is an AI outbound agent. It finds target companies with a dated, sourced signal, drafts a one-to-one email for each decision-maker and sends the emails you approve from your own mailbox.",
              publisher: { "@id": `${siteUrl}/#organization` },
            },
          ],
        }}
      />
      <SiteHeader />

      <article className="content">
        <h1>Products</h1>

        <h2>Elson, the AI outbound agent</h2>
        <p>
          <a href="https://elson.ai" rel="noopener" target="_blank">
            Elson
          </a>{" "}
          does the prospecting work of a sales development rep for email. You give it your website and answer a
          short set of questions. It proposes the targets, checks each company for a dated, sourced signal,
          writes a one-to-one email for each decision-maker and sends the emails you accept from your own Gmail,
          Microsoft 365 or SMTP mailbox.
        </p>
        <ul>
          <li>Signals: a funding round, hiring or headcount growth, each with a date and a source.</li>
          <li>Approval: nothing is sent without your approval.</li>
          <li>Replies: Elson reads them, stops follow-ups when someone answers or opts out, and drafts answers for you.</li>
          <li>Start: free, with 20 free leads and no card.</li>
        </ul>
        <p>
          Elson does not promise meetings, does not book meetings into a calendar and has no CRM connectors.
        </p>
        <p>
          Go to{" "}
          <a href="https://elson.ai" rel="noopener" target="_blank">
            elson.ai
          </a>
          , read{" "}
          <a href="https://elson.ai/how-it-works" rel="noopener" target="_blank">
            how Elson works
          </a>{" "}
          or see{" "}
          <a href="https://elson.ai/pricing" rel="noopener" target="_blank">
            pricing
          </a>
          . Back to <a href="./about">about TEMPO AI LLC</a>.
        </p>
      </article>

      <SiteFooter />
    </main>
  );
}
