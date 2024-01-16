import { isNotEmpty, useForm } from "@mantine/form";
import { Todo } from "../types/Todo";

export const useTodo = () => {
    const form = useForm<Todo>({
        initialValues: {
            title: "",
            body: "",
        },

        validate: {
            title: isNotEmpty('Todo needs title'),
            body: isNotEmpty('Todo needs description')
        }
    });
    return form;
}