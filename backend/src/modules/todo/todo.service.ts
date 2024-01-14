import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoService {

    constructor(private readonly prisma: PrismaService) {

    }

    async listTodo() {
        return this.prisma.todo.findMany({});
    }

    async addTodo(todo: CreateTodoDto) {
        return this.prisma.todo.create({
            data: {
                title: todo.title,
                body: todo.body
            }
        })
    }

    editTodo() {

    }

    deleteTodo() {

    }
}
