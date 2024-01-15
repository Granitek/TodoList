import { User } from "@prisma/client";
import { Exclude } from 'class-transformer';

export class UserDto implements User {
    @Exclude()
    password: string;

    id: number;
    email: string;
}