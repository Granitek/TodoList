import { NavLink } from "@mantine/core"
import { IconHome, IconList, IconLogin2, IconPlaylistAdd } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className=" flex justify-between w-1/2">
                <NavLink
                    onClick={() => navigate("/")}
                    label="Home"
                    leftSection={<IconHome size="1rem" stroke={1.5} />}
                    className="w-auto"
                />
                <NavLink
                    onClick={() => navigate("/todo")}
                    label="TodoList"
                    leftSection={<IconList size="1rem" stroke={1.5} />}
                    className="w-auto"
                />
                <NavLink
                    onClick={() => navigate("/todo/new")}
                    label="Add Todo"
                    leftSection={<IconPlaylistAdd size="1rem" stroke={1.5} />}
                    className="w-auto"
                />
            </div>
            <div className="flex ml-auto">
                <NavLink
                    onClick={() => navigate("/login")}
                    label="LogIn"
                    rightSection={<IconLogin2 size="1rem" stroke={1.5} />}
                    className="w-auto"
                />
            </div>
        </>
    )
}