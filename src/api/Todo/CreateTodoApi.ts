import ky from "ky";
import { Todo } from "../../types/Todo";
import { TodoType } from "../../types/TodoType";
import { API_URL } from "../../config";

export const CreateTodoApi = async (todo: Todo) => {
    return ky.post(`${API_URL}/todo`, { json: todo, credentials: "include" }).json<TodoType>();
}