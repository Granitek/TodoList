import { API_URL } from "../config";

interface tagInterface {
    id: number,
    tagname: string
}

export const Tags = async (): Promise<tagInterface[]> => {
    const response = await fetch(`${API_URL}/tag`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            ContentType: 'application/json'
        }
    });
    return await response.json();
}