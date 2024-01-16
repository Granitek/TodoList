import { Button, Container, Paper, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FC } from "react"
import { Notification } from "../api/Notification";
import { useNavigate } from "react-router-dom";
import { RegisterApi } from "../api/Register";

type RegisterType = {
    email: string;
    password: string;
}

export const RegisterPage: FC = () => {
    const navigate = useNavigate();

    const form = useForm<RegisterType>({
        initialValues: {
            email: '',
            password: ''
        }
    })

    const handleSubmit = async (data: RegisterType) => {
        try {
            await RegisterApi(data);
            navigate('/login');
        } catch (e) {
            Notification();
        }
    }

    return (
        <>
            <Container size='xs'>
                <Paper shadow="xs" radius="lg" p="md">
                    <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
                        <Stack gap="md" align="center">
                            <TextInput required type="email" label="Email" {...form.getInputProps('email')} style={{ width: '50%' }} />
                            <PasswordInput required label="Password" {...form.getInputProps('password')} style={{ width: '50%' }} />
                            <Button type="submit">Register</Button>
                        </Stack>
                    </form>
                </Paper >
            </Container>
        </>
    )
}