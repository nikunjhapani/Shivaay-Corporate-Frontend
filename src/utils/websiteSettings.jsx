import api from "./axios";
export default async function getWebsiteSettings() {
  const res = await fetch(`${api.defaults.baseURL}/api/websiteSettings/getSettings`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch website settings");
  }
  const data = await res.json();
  return data?.data || {};
}
