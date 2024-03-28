import { Button, Container, NavLink, Paper, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FC } from "react"
import { Login } from "../api/Login";
import { Notification } from "../api/Notification";
import { useNavigate } from "react-router-dom";

type LoginType = {
    email: string;
    password: string;
}

export const LoginPage: FC = () => {
    const navigate = useNavigate();

    const form = useForm<LoginType>({
        initialValues: {
            email: '',
            password: ''
        }
    })

    const handleSubmit = async (data: LoginType) => {
        try {
            await Login(data.email, data.password);
            navigate('/');
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
                            <Button type="submit">Login</Button>
                            <NavLink
                                onClick={() => navigate('/register')}
                                label="Don't have an account? SignIn"
                                className="w-auto"
                            />
                        </Stack>
                    </form>
                </Paper >
            </Container>
        </>
    )
}