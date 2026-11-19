export const siteUrl = "https://tempoaillc.com";

export const organization = {
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "TEMPO AI LLC",
  url: siteUrl,
  description:
    "TEMPO AI LLC builds Elson, an AI outbound agent that finds companies with a dated, sourced signal and drafts one-to-one emails for your approval.",
  sameAs: ["https://elson.ai", "https://github.com/TEMPO-AI-LLC"],
};

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
