import { useNavigate, useParams } from "react-router-dom"
import { useTodo } from "../hooks/useTodoForm";
import { Todo } from "../types/Todo";
import { Button, Container, MultiSelect, Paper, Stack, TextInput } from "@mantine/core";
import { EditTodoApi } from "../api/Todo/EditTodoApi";
import { useEffect, useState } from "react";
import { Tags } from "../api/Tags";
import { CreateTodoApi } from "../api/Todo/CreateTodoApi";

interface tagInterface {
    id: number,
    tagname: string
}

export const EditTodo = () => {
    const form = useTodo();
    const { id } = useParams();
    let numericId: number;
    if (id) {
        numericId = parseInt(id!, 10);
    }
    console.log(id);
    const navigate = useNavigate();
    const [tags, setTags] = useState<tagInterface[]>([]);

    const fetchTags = async () => {
        try {
            const tag: tagInterface[] = await Tags();
            const newTags: tagInterface[] = [];
            tag.map(value => {
                newTags.push(value);
            })
            setTags(newTags);
        } catch (e) {
            console.log(e);
        }
    }

    const handleSubmit = async (values: Todo) => {
        try {
            if (id) {
                await EditTodoApi(numericId, values);
            }
            else {
                await CreateTodoApi(values);
            }
            navigate('/todo');
        } catch (e) {
            console.log(e);
        }
    }

    const handleSetTag = (tag: number[]) => {
        form.setFieldValue('tag', tag);
    }

    useEffect(() => {
        fetchTags().then();
    }, [])

    return (
        <>
            <Container size='xs'>
                <Paper shadow="xs" radius="lg" p="md">
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <Stack gap="md" align="center">
                            <TextInput label="Title" {...form.getInputProps('title')} style={{ width: '50%' }} />
                            <TextInput label="Description" {...form.getInputProps('body')} style={{ width: '50%' }} />
                            <MultiSelect
                                label={"Tag"}
                                placeholder={"Wybierz tag"}
                                checkIconPosition={"right"}
                                maxValues={2}
                                style={{ width: '50%' }}
                                data={tags.map((value) => (
                                    {
                                        label: value.tagname,
                                        value: value.id.toString()
                                    }
                                ))}
                                onChange={(value) => value && handleSetTag(value.map((v) => parseInt(v)))}
                                clearable
                            />
                            <Button type="submit">{id ? "Edit" : "Submit"}</Button>
                        </Stack>
                    </form>
                </Paper >
            </Container>
        </>
    )
}