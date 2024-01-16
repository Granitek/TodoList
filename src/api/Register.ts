import ky from "ky";
import { API_URL } from "../config";
import { Register } from "../types/Register";

export const RegisterApi = async (userData: Register) => {
    return await ky.post(`${API_URL}/user`, { json: userData, credentials: "include", });
};