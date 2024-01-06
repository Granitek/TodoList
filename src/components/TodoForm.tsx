import { useParams } from "react-router-dom"
import { useTodo } from "../hooks/useTodo";

export const TodoForm = () => {
    const { id } = useParams();
    const form = useTodo();

    return (
        <>
            <div>
                TodoForm.ID:{id}
            </div>
        </>
    )
}