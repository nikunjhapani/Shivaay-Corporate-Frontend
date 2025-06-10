import api from "./axios";

// Global GET request
export const getData = async (url, config = {}) => {
  try {
    const response = await api.get(url, config);
    return response.data;
  } catch (error) {
    console.error("GET error:", error);
    return null;
  }
};

// Global POST request
export const postData = async (url, data = {}, config = {}) => {
  try {
    const response = await api.post(url, data, config);
    return response.data;
  } catch (error) {
    console.error("POST error:", error);
    return null;
  }
};
