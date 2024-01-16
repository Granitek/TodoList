import { Paper, Text } from "@mantine/core"
import { FC, memo } from "react"
import { TodoType } from "../types/TodoType";

interface TodoListItemProps {
    item: TodoType;
}

export const TodoMain: FC<TodoListItemProps> = memo(({ item }) => {

    return (
        <>
            <Paper shadow="xs" radius="lg" p="md">
                <div className="flex flex-row justify-between">
                    <div>
                        <Text size="xl" c="blue">{item.title}</Text>
                        <Text c="dimmed">{item.body}</Text>
                    </div>
                </div>
            </Paper >
        </>
    )
})