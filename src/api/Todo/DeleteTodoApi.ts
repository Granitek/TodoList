import ky from "ky";
import { TodoType } from "../../types/TodoType";
import { API_URL } from "../../config";

export const DeleteTodoApi = async (id: number) => {
    return ky.delete(`${API_URL}/todo/${id}`, { credentials: "include" }).json<TodoType>();
}