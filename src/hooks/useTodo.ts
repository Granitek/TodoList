import { useForm } from "@mantine/form";
import { Todo } from "../types/Todo";

export const useTodo = () => {
    const form = useForm<Todo>({
        initialValues: {
            title: "",
            body: "",
            done: false
        },

        validate: {
            title: (value) => {
                if (value.length < 1) {
                    return "Todo needs a title"
                }
            },
            body: (value) => {
                if (value.length < 1) {
                    return "Todo needs a description"
                }
            }
        }
    });
    return form;
}