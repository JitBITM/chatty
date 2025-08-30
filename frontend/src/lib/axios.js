import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();
export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? `${import.meta.env.VITE_BACKEND_URL}/api`
      : `${import.meta.env.VITE_BACKEND_URL}/api`,
  withCredentials: true,
});