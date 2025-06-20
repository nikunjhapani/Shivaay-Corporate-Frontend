import getLayoutData from "./getLayoutData";

export default async function getMetadataForSlug(slug: string) {
  try {
    const { menu, submenuMap } = await getLayoutData();

    const allMenus = [...menu, ...Object.values(submenuMap).flat()];
    const page = allMenus.find((item: any) => item.menuURL === slug);

    if (!page) {
      return {
        title: "Shivaay Corporate - Innovative Business Solutions",
        description: "Shivaay Corporate provides cutting-edge technology solutions for businesses of all sizes.",
      };
    }

    return {
      metadataBase: new URL(
        process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.shivaayjewels.com"
      ),
      title: page.metaTitle || page.menuName || "Shivaay Corporate - Innovative Business Solutions",
      description: page.metaDescription || "Shivaay Corporate provides cutting-edge technology solutions for businesses of all sizes.",
      openGraph: {
        title: page.metaTitle,
        description: page.metaDescription,
        images: [
          {
            url: page.metaImage || "/default-og.jpg",
          },
        ],
      },
      icons: {
        icon: "favicon.ico",
      },
      twitter: {
        card: "summary_large_image",
        metadataBase: new URL(
          process.env.NEXT_PUBLIC_API_BASE_URL ||
            "https://api.shivaayjewels.com"
        ),
        title: page.metaTitle,
        description: page.metaDescription,
        images: [page.metaImage || "/default-og.jpg"],
      },
    };
  } catch (err) {
    console.error("Metadata fetch error:", err);
    return {
      title: "Shivaay Corporate - Innovative Business Solutions",
      description: "Shivaay Corporate provides cutting-edge technology solutions for businesses of all sizes.",
    };
  }
}
