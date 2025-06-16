import api from "../../utils/axios";
export const fetchGalleryData = async () => {
  const [titlesRes, imagesRes] = await Promise.all([
    fetch(`${api.defaults.baseURL}api/gallaryTitle/getAllApi`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }),
    fetch(`${api.defaults.baseURL}api/gallaryImage/getAllApi`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }),
  ]);

  if (!titlesRes.ok || !imagesRes.ok) {
    throw new Error("Failed to fetch gallery data");
  }

  const titles = (await titlesRes.json())?.data || [];
  const images = (await imagesRes.json())?.data || [];

  return titles.map((title: any) => ({
    galleryTitleId: title._id,
    title: title.title,
    images: images
      .filter((img: any) => img.galleryTitleId === title._id)
      .sort((a: any, b: any) => a.sort_order_no - b.sort_order_no),
  }));
};
