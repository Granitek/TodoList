import { Alert } from "@mantine/core"

export const ErrorPage = () => {
    return (
        <Alert color="red" title="Error" icon={<span role="img" aria-label="Error">❌</span>}>
            Nieprawidłowa ścieżka
        </Alert>
    )
}