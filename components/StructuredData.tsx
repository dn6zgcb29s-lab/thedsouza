const siteUrl = "https://www.thedsouza.com";
const socialImageUrl = `${siteUrl}/social-preview.png`;
const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

type StructuredDataProps = {
  data: Record<string, unknown>;
};

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function ProjectStructuredData({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = `${siteUrl}${path}`;

  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CreativeWork",
            "@id": `${url}#case-study`,
            name: title,
            description,
            url,
            author: { "@id": personId },
            isPartOf: { "@id": websiteId },
            inLanguage: "en-AU",
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${url}#breadcrumb`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: title,
                item: url,
              },
            ],
          },
        ],
      }}
    />
  );
}

export { personId, siteUrl, socialImageUrl, websiteId };
