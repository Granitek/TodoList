import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { Layout } from "./Layout";
import { TodoList } from "./TodoList";
import { ErrorPage } from "./ErrorPage";
import { LoginPage } from "./LoginPage";
import { useIsLogged } from "../hooks/useIsLogged";
import { EditTodo } from "./EditTodo";
import { MainPage } from "./MainPage";
import { RegisterPage } from "./RegisterPage";

const notLoggedRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/register",
                element: <RegisterPage />
            },
            {
                path: '*',
                element: <Navigate to="/login" replace />
            }
        ]
    }
]

const loggedRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: "/todo",
                element: <TodoList />
            },
            {
                path: "/todo/new",
                element: <EditTodo />
            },
            {
                path: "/todo/:id",
                element: <EditTodo />
            },
            {
                path: "/todo/:id/edit",
                element: <EditTodo />
            },
            {
                path: "*",
                element: <ErrorPage />
            }
        ]
    }
]

export const Routing = () => {
    const isLogged = useIsLogged();
    const routes = isLogged ? loggedRoutes : notLoggedRoutes;
    return useRoutes(routes);
}