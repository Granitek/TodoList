import { useEffect, useState } from "react"
import { TodoType } from "../types/TodoType"
import { TodoAllApi } from "../api/Todo/TodoAllApi";
import { TodoMain } from "./TodoMain";

export const MainPage = () => {
    const [data, setData] = useState<TodoType[]>([]);

    useEffect(() => {
        TodoAllApi().then((response) => {
            setData(response);
        });
    }, [])

    return (
        <>
            <div className="flex flex-col space-y-4 h-[200px] w-[400px] mx-auto">
                {data.map((item) => <TodoMain key={item.id} item={item} />)}
            </div>
        </>
    )
}