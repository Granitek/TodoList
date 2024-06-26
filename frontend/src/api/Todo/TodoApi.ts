import ky from "ky"
import { TodoType } from "../../types/TodoType";
import { API_URL } from "../../config";

export const TodoApi = async () => {
    return ky.get(`${API_URL}/todo`, { credentials: "include" }).json<TodoType[]>();
}