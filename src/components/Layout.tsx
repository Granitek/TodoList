import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"
import { AppShell } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";

export const Layout = () => {
    const [opened] = useDisclosure();

    return (
        <>
            <AppShell
                header={{ height: 60 }}
                navbar={{
                    width: 300,
                    breakpoint: 'sm',
                    collapsed: { mobile: !opened },
                }}
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