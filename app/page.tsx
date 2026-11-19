import { ProductGrid } from "./_components/product-grid";
import { SiteFooter, SiteHeader } from "./_components/chrome";
import { JsonLd, organization, siteUrl } from "./_components/json-ld";

export default function Home() {
  return (
    <main className="site-shell">
      <div className="motion-field" aria-hidden="true" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            organization,
            {
              "@type": "WebSite",
              "@id": `${siteUrl}/#website`,
              url: siteUrl,
              name: "TEMPO AI LLC",
              publisher: { "@id": `${siteUrl}/#organization` },
            },
          ],
        }}
      />

      <SiteHeader />

      <section className="intro" aria-labelledby="intro-title">
        <h1 id="intro-title">Elson, the AI outbound agent, by TEMPO AI LLC.</h1>
      </section>

      <section className="content home-copy" aria-labelledby="what-title">
        <h2 id="what-title">What TEMPO AI LLC builds</h2>
        <p>
          TEMPO AI LLC is a software company that builds AI products for teams that sell. Its product is{" "}
          <a href="https://elson.ai" rel="noopener" target="_blank">
            Elson
          </a>
          , an AI outbound agent. Elson does the prospecting work of a sales
          development rep for email, and you stay in control of what is sent.
        </p>

        <p>
          It is built for founders and small sales teams who want outbound email without assembling a stack of
          separate prospecting, enrichment and sending tools. Every email is about the reader&apos;s company, and
          you read each one before it leaves your mailbox.
        </p>

        <h2>How Elson works</h2>
        <p>Elson follows six steps, in this order.</p>
        <ol>
          <li>You give Elson your website and answer a short set of questions about what you sell and to whom. Elson proposes the targets and you confirm the plan.</li>
          <li>Elson checks each target company for a dated, sourced signal such as a funding round, hiring or headcount growth, and says plainly when it finds none.</li>
          <li>Elson writes a one-to-one email for each decision-maker from your website and the signal, with an unsubscribe link in every email.</li>
          <li>You accept or refuse each email. Nothing is sent without your approval.</li>
          <li>Elson sends the accepted emails from your own mailbox: Gmail, Microsoft 365 or SMTP.</li>
          <li>Elson reads the replies, stops follow-ups when someone answers or opts out, and drafts answers for your approval.</li>
        </ol>

        <h2>What Elson does not do</h2>
        <p>
          Elson does not send anything you have not approved, does not promise meetings, does not book meetings
          into a calendar and has no CRM connectors. It starts free with 20 free leads and no card. Read more on{" "}
          <a href="https://elson.ai" rel="noopener" target="_blank">
            elson.ai
          </a>
          , including{" "}
          <a href="https://elson.ai/how-it-works" rel="noopener" target="_blank">
            how Elson works
          </a>{" "}
          and{" "}
          <a href="https://elson.ai/pricing" rel="noopener" target="_blank">
            pricing
          </a>
          .
        </p>

        <h2>About the company</h2>
        <p>
          TEMPO AI LLC is the company behind Elson. See the <a href="./about">about page</a> for who we are and
          the <a href="./products">products page</a> for the product in detail.
        </p>
      </section>

      <ProductGrid />

      <SiteFooter />
    </main>
  );
}
