import { RouteObject, useRoutes } from "react-router-dom";
import { Layout } from "./Layout";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { ErrorPage } from "./ErrorPage";
import { LoginPage } from "./LoginPage";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/todo",
                element: <TodoList />
            },
            {
                path: "/todo/new",
                element: <TodoForm />
            },
            {
                path: "/todo/:id",
                element: <TodoForm />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "*",
                element: <ErrorPage />
            }
        ]
    }
]

export const Routing = () => {
    return useRoutes(routes);
}