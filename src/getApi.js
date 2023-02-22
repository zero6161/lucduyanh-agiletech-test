import axios from "axios";
const getToken = () => {
  const token = sessionStorage.getItem("userToken");
  const bearer = token ? `Bearer ${token}` : undefined;
  return bearer;
};
export const httpClient = axios.create({
  baseURL: "https://test-react.agiletech.vn/",
  timeout: 10000,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: getToken(),
  },
});
httpClient.interceptors.request.use((config) => {
  config.headers.Authorization = getToken();
  return config;
});
