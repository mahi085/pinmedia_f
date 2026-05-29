import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export const createInquiry = (data) => apiClient.post("/inquiries/add", data);

export const getBlogs = () => apiClient.get("/blog/blogs");

export const getProjects = () => apiClient.get("/projects/all");

export const getReviews = () => apiClient.get("/reviews/all");
