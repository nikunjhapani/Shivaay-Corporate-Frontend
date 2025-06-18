import { postData } from "./apiMethods";

export const getTabData = async () => {
  const res = await postData("api/globalPresence/getAllApi");
  return res?.data || [];
};

export const capabilityData = async () => {
  const res = await postData("api/globalCapability/getAllApi");
  return res?.data || [];
};