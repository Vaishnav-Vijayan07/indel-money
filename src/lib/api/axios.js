import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7700",
  timeout: 5000,
});

export default api;
