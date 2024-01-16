import { useNavigate } from "react-router-dom"
import { useTodo } from "../hooks/useTodoForm";
import { Todo } from "../types/Todo";
import { Button, Container, Paper, Stack, TextInput } from "@mantine/core";
import { CreateTodoApi } from "../api/Todo/CreateTodoApi";

export const TodoForm = () => {
    const form = useTodo();
    const navigate = useNavigate();

    const handleSubmit = async (values: Todo) => {
        try {
            await CreateTodoApi(values);
            navigate('/todo');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <Container size='xs'>
                <Paper shadow="xs" radius="lg" p="md">
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <Stack gap="md" align="center">
                            <TextInput label="Title" {...form.getInputProps('title')} style={{ width: '50%' }} />
                            <TextInput label="Description" {...form.getInputProps('body')} style={{ width: '50%' }} />
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </form>
                </Paper >
            </Container>
        </>
    )
}