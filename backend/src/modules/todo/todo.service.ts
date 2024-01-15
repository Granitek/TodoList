import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { PrismaService } from '../prisma/prisma.service';
import { EditTodoDto } from './dto/edit-todo.dto';

@Injectable()
export class TodoService {

    get(id: number, userId: number) {
        return this.prisma.todo.findUnique({
            where: {
                id,
                userId
            }
        });
    }

    constructor(private readonly prisma: PrismaService) {

    }

    async listTodo() {
        return this.prisma.todo.findMany({});
    }

    async addTodo(todo: CreateTodoDto, userId: number) {
        return this.prisma.todo.create({
            data: {
                title: todo.title,
                body: todo.body,
                userId: userId
            }
        })
    }

    editTodo(id: number, todo: EditTodoDto) {
        return this.prisma.todo.update({
            where: {
                id
            }, data: todo
        })
    }

    deleteTodo(id: number) {
        return this.prisma.todo.delete({
            where: {
                id
            }
        })
    }
}
