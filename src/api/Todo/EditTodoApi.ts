import ky from "ky";
import { TodoType } from "../../types/TodoType";
import { API_URL } from "../../config";
import { Todo } from "../../types/Todo";

export const EditTodoApi = async (id: number, todo: Todo) => {
    return ky.put(`${API_URL}/todo/${id}`, { json: todo, credentials: "include" }).json<TodoType>();
}