import getLayoutData from "./getLayoutData";

export default async function getMetadataForSlug(slug: string) {
  try {
    const { menu, submenuMap } = await getLayoutData();
    const allMenus = [...menu, ...Object.values(submenuMap).flat()];
    const page = allMenus.find((item: any) => item.menuURL === slug);
    if (!page) return null;

    return {
      title: page.metaTitle || page.menuName || "Default Title",
      description: page.metaDescription || "Default description",
      openGraph: {
        title: page.metaTitle,
        description: page.metaDescription,
        images: [
          {
            url: page.metaImage || "/default-og.jpg",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: page.metaTitle,
        description: page.metaDescription,
        images: [page.metaImage || "/default-og.jpg"],
      },
    };
  } catch (err) {
    console.error("Metadata fetch error:", err);
    return {
      title: "Default Title",
      description: "Default description",
    };
  }
}
