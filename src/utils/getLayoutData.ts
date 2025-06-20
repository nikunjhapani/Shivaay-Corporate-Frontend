// utils/getLayoutData.ts
import api from "./axios";

export default async function getLayoutData() {

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [settingsRes, menuRes] = await Promise.all([
    fetch(`${api.defaults.baseURL}api/websiteSettings/getSettings`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }),
    fetch(`${api.defaults.baseURL}api/menu/getAllApi`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }),
  ]);

  if (!settingsRes.ok || !menuRes.ok) {
    throw new Error("Failed to fetch layout data");
  }

  const settingsData = await settingsRes.json();
  const menuResponse = await menuRes.json();
  const fullMenu = menuResponse?.data || [];
  // const filteredMenuData = fullMenu.filter(
  //   (item: any) => item.menuName?.toLowerCase() !== "home"
  // );
  const parentMenus = fullMenu.filter((item: any) => !item.parentId);
  const submenuMap = fullMenu.reduce((acc: any, item: any) => {
    if (item.parentId && item.parentId._id) {
      const parentKey = item.parentId._id;
      if (!acc[parentKey]) acc[parentKey] = [];
      acc[parentKey].push(item);
    }
    return acc;
  }, {});

  return {
    settings: settingsData?.data || {},
    menu: parentMenus,
    submenuMap,
  };
}
