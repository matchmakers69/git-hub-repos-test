import axiosClient from "axios";

export const baseAPIURL = process.env.REACT_APP_BASE_API_URL;

const apiClient  = axiosClient.create({
  baseURL: baseAPIURL,
  timeout: 15000,
  headers: {},
});

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };

export { apiClient };