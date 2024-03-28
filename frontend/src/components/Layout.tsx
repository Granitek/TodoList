import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"
import { AppShell } from "@mantine/core"

export const Layout = () => {

    return (
        <>
            <AppShell
                header={{ height: 60 }}
                padding="md"
            >
                <AppShell.Header className="flex flex-row">
                    <NavBar />
                </AppShell.Header>

                <AppShell.Main>

                    <Outlet />
                </AppShell.Main>
            </AppShell>

        </>
    )
}