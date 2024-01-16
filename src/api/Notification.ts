import { showNotification } from '@mantine/notifications';

export const Notification = () => {
    showNotification({
        color: 'blue',
        title: 'Error',
        message: 'Please type correct email or password'
    })
}