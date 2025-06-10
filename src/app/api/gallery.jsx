import axios from "axios";
import api from "../../utils/axios";

export const fetchGalleryData = async () => {
  const [titlesRes, imagesRes] = await Promise.all([
    axios.post(`${api.defaults.baseURL}/api/gallaryTitle/getAllApi`),
    axios.post(`${api.defaults.baseURL}/api/gallaryImage/getAllApi`),
  ]);

  if (titlesRes.status !== 200 || imagesRes.status !== 200) {
    throw new Error("Failed to fetch gallery data");
  }

  const titles = titlesRes.data?.data || [];
  const images = imagesRes.data?.data || [];

  return titles.map((title) => ({
    galleryTitleId: title._id,
    title: title.title,
    images: images
      .filter((img) => img.galleryTitleId === title._id)
      .sort((a, b) => a.sort_order_no - b.sort_order_no),
  }));
};
