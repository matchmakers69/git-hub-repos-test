import axiosClient from "axios";

export const baseAPIURL = process.env.REACT_APP_BASE_API_URL;

const Api = axiosClient.create({
  baseURL: baseAPIURL,
});

export { Api };