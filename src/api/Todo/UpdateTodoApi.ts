import ky from "ky";
import { TodoType } from "../../types/TodoType";
import { API_URL } from "../../config";

export const UpdateTodoApi = async (id: number) => {
    return ky.put(`${API_URL}/todo/${id}/done`, { credentials: "include" }).json<TodoType>();
}