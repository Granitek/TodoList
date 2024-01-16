import { useNavigate, useParams } from "react-router-dom"
import { useTodo } from "../hooks/useTodoForm";
import { Todo } from "../types/Todo";
import { Button, Container, Paper, Stack, TextInput } from "@mantine/core";
import { EditTodoApi } from "../api/Todo/EditTodoApi";

export const EditTodo = () => {
    const form = useTodo();
    const { id } = useParams();
    const numericId = parseInt(id!, 10);
    const navigate = useNavigate();

    const handleSubmit = async (values: Todo) => {
        try {
            await EditTodoApi(numericId, values);
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
                            <Button type="submit">Edit</Button>
                        </Stack>
                    </form>
                </Paper >
            </Container>
        </>
    )
}