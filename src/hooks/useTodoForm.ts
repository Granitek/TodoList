import { hasLength, isNotEmpty, useForm } from "@mantine/form";
import { Todo } from "../types/Todo";

export const useTodo = () => {
    const form = useForm<Todo>({
        initialValues: {
            title: "",
            body: "",
            done: false
        },

        validate: {
            title: hasLength({ min: 2, max: 99 }, 'Title must be 2-99 characters long'),
            body: isNotEmpty('Todo needs description')
        }
    });
    return form;
}