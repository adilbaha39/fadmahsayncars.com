type Crumb = { name: string; url: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="text-sm text-white/70 mb-4" aria-label="Fil d'Ariane">
        {items.map((item, i) => (
          <span key={item.url}>
            {i > 0 && " → "}
            {i < items.length - 1 ? (
              <a href={item.url.replace("https://fadmahsayncars.com", "") || "/"} className="hover:text-white">
                {item.name}
              </a>
            ) : (
              <span className="text-white/90">{item.name}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
