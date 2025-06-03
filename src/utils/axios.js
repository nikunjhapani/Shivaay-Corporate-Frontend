// lib/axios.ts
import axios from 'axios';
import { BASE_URL } from "../utils/config";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
