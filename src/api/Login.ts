import { API_URL } from "../config";

export const Login = async (email: string, password: string) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            ContentType: 'application/json',
            // btoa string to base64
            Authorization: 'Basic ' + window.btoa(email + ":" + password)
        },
        // cookies
        credentials: 'include'
    });

    if (response.status !== 200)
        throw new Error('Login failed');
    return await response.text();
}