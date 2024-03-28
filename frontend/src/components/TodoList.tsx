import { useEffect, useState } from "react"
import { TodoType } from "../types/TodoType"
import { TodoListItem } from "./TodoListItem"
import { TodoApi } from "../api/Todo/TodoApi";
import { UpdateTodoApi } from "../api/Todo/UpdateTodoApi";
import { DeleteTodoApi } from "../api/Todo/DeleteTodoApi";

export const TodoList = () => {
    const [done, setDone] = useState<TodoType[]>([]);
    const [undone, setUndone] = useState<TodoType[]>([]);

    const setState = async () => {
        const updatedData = await TodoApi();
        setDone(updatedData.filter(item => item.done));
        setUndone(updatedData.filter(item => !item.done));
    }

    const updateIsDone = async (id: number) => {
        try {
            await UpdateTodoApi(id);
            await setState();
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (id: number) => {
        try {
            await DeleteTodoApi(id);
            await setState();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        TodoApi().then((response) => {
            setDone(response.filter(item => item.done));
            setUndone(response.filter(item => !item.done));
        });
    }, [])

    return (
        <>
            <div className="flex justify-around ">
                <div className="flex flex-col space-y-4 h-[200px] w-[400px]">
                    {undone.map((item) => <TodoListItem key={item.id} item={item} handleClick={updateIsDone} handleDelete={handleDelete} />)}
                </div>
                <div className="flex flex-col space-y-4 h-[200px] w-[400px]">
                    {done.map((item) => <TodoListItem key={item.id} item={item} handleClick={updateIsDone} handleDelete={handleDelete} />)}
                </div>
            </div>
        </>
    )
}