import { Paper, Text } from "@mantine/core";
import { TodoType } from "../types/TodoType";
import { CSSProperties, FC, memo, useEffect, useState } from "react";

interface TodoListItemProps {
    item: TodoType;
}

export const TodoListItem: FC<TodoListItemProps> = memo(({ item }) => {
    const [isDone, setIsDone] = useState(item.done);

    const handleItemClick = () => {
        setIsDone(!isDone);
    };

    useEffect(() => {
        console.log(`Stan został zmieniony na: ${isDone}`);
    }, [isDone]);

    const border: CSSProperties | undefined = item.done ? { border: "1px solid", borderColor: "green" } : undefined;

    return (
        <>
            <Paper shadow="xs" radius="lg" p="md" onClick={handleItemClick} style={border}>
                <Text size="xl" td="underline" c="blue">{item.title}</Text>
                <Text c="dimmed">{item.body}</Text>
            </Paper >
        </>
    )
})