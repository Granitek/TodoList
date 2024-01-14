import { TodoType } from "../types/TodoType"
import { TodoListItem } from "./TodoListItem"

const data: TodoType[] = [
    {
        id: 1,
        title: "Zakupy",
        body: "Chleb, kurczak, mleko, jajka, ser, szynka",
        done: false
    },
    {
        id: 2,
        title: "title2",
        body: "body2",
        done: false
    },
    {
        id: 3,
        title: "done1",
        body: "body3",
        done: true
    },
    {
        id: 4,
        title: "done2",
        body: "body4",
        done: true
    }
]

export const TodoList = () => {
    return (
        <>
            <div className="flex justify-around ">
                <div className="flex flex-col space-y-4 h-[200px] w-[400px]">
                    {data.map((item) => !item.done && <TodoListItem key={item.id} item={item} />)}
                </div>
                <div className="flex flex-col space-y-4 h-[200px] w-[400px]">
                    {data.map((item) => item.done && <TodoListItem key={item.id} item={item} />)}
                </div>

            </div>
        </>
    )
}