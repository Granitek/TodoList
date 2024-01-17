import { Button, NavLink, Paper, Text } from "@mantine/core";
import { TodoType } from "../types/TodoType";
import { CSSProperties, FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { IconEdit, IconTrash } from "@tabler/icons-react";

interface TodoListItemProps {
    item: TodoType;
    handleClick: (id: number) => void;
    handleDelete: (id: number) => void;
}

export const TodoListItem: FC<TodoListItemProps> = memo(({ item, handleClick, handleDelete }) => {

    const border: CSSProperties | undefined = item.done ? { border: "1px solid", borderColor: "green" } : undefined;

    const navigate = useNavigate();
    console.log(item.todoTag);

    return (
        <>
            <Paper shadow="xs" radius="lg" p="md" style={border}>
                <div className="flex flex-row justify-between">
                    <div>
                        <Text size="xl" c="blue">{item.title}</Text>
                        <Text c="dimmed">{item.body}</Text>
                    </div>
                    <div className="flex flex-col">
                        {!item.done && <NavLink
                            onClick={() => navigate(`/todo/${item.id}/edit`)}
                            label="Edit"
                            leftSection={<IconEdit size="1rem" stroke={1.5} />}
                        // className="w-auto"
                        />}
                        <NavLink
                            onClick={() => handleDelete(item.id)}
                            // label=""
                            leftSection={<IconTrash size="1rem" stroke={1.5} />}
                        // className="w-auto"
                        />
                    </div>
                </div>
                {!item.done && <>
                    <Button style={{ width: '100%' }} onClick={() => handleClick(item.id)}>Done</Button>
                </>}
            </Paper >
        </>
    )
})