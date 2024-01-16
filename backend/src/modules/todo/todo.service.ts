import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { PrismaService } from '../prisma/prisma.service';
import { EditTodoDto } from './dto/edit-todo.dto';

@Injectable()
export class TodoService {
    constructor(private readonly prisma: PrismaService) {

    }

    async listTodoAll() {
        return this.prisma.todo.findMany({});
    }

    async listTodo(userId: number) {
        return this.prisma.todo.findMany({
            where: {
                userId
            }
        });
    }

    async addTodo(todo: CreateTodoDto, userId: number) {
        return this.prisma.todo.create({
            data: {
                title: todo.title,
                body: todo.body,
                userId: userId,
                done: false
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

    updateTodo(id: number) {
        return this.prisma.todo.update({
            where: {
                id
            }, data: {
                done: true
            }
        })
    }

    deleteTodo(id: number) {
        return this.prisma.todo.delete({
            where: {
                id
            }
        })
    }

    get(id: number, userId: number) {
        return this.prisma.todo.findUnique({
            where: {
                id,
                userId
            }
        });
    }
}
