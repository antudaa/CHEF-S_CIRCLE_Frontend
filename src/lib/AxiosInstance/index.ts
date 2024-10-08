import envConfig from "@/Config/envConfig";
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: envConfig.baseApi,
});