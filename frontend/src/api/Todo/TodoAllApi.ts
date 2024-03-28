import ky from "ky"
import { TodoType } from "../../types/TodoType";
import { API_URL } from "../../config";

export const TodoAllApi = async () => {
    return ky.get(`${API_URL}/todo/all`, { credentials: "include" }).json<TodoType[]>();
}