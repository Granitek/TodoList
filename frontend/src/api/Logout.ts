import ky from "ky";
import { API_URL } from "../config";

export const LogoutApi = async () => {
    return ky.post(`${API_URL}/auth/logout`, {
        credentials: "include",
    });
};