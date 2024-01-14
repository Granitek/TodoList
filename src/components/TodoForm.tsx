import { useParams } from "react-router-dom"
import { useTodo } from "../hooks/useTodoForm";
import { Todo } from "../types/Todo";
import { Box, Button, Group, TextInput } from "@mantine/core";

export const TodoForm = () => {
    const { id } = useParams();
    const form = useTodo();

    const handleSubmit = (values: Todo) => {
        console.log(values)
    }

    return (
        <>
            <div>
                TodoForm.ID:{id}
            </div>
            <Box maw={340}>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        {...form.getInputProps('email')}
                    />
                    <Group justify="flex" mt="md">
                        <Button type="submit">Submit</Button>
                    </Group> </form></Box>
        </>
    )
}