interface SeoOptions {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  canonicalPath?: string;
}

export function useSeo(options: SeoOptions) {
  document.title = options.title;

  const setMeta = (attr: string, key: string, content: string) => {
    let el = document.querySelector(
      `meta[${attr}="${key}"]`,
    ) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  setMeta("name", "description", options.description);

  if (options.keywords?.length) {
    setMeta("name", "keywords", options.keywords.join(", "));
  }

  setMeta("property", "og:title", options.title);
  setMeta("property", "og:description", options.description);
  setMeta("property", "og:type", "website");

  if (options.image) {
    setMeta("property", "og:image", options.image);
    setMeta("name", "twitter:image", options.image);
  }

  if (options.canonicalPath) {
    setMeta(
      "property",
      "og:url",
      window.location.origin + options.canonicalPath,
    );
  }

  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", options.title);
  setMeta("name", "twitter:description", options.description);
}
