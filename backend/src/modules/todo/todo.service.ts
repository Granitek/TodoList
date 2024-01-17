import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { PrismaService } from '../prisma/prisma.service';
import { EditTodoDto } from './dto/edit-todo.dto';

@Injectable()
export class TodoService {
    constructor(private readonly prisma: PrismaService) {

    }

    async listTodoAll() {
        return this.prisma.todo.findMany({
            include: {
                todoTag: {
                    select: {
                        tag: true
                    }
                }
            }
        });
    }

    async listTodo(userId: number) {
        return this.prisma.todo.findMany({
            where: {
                userId
            },
            include: {
                todoTag: {
                    select: {
                        tag: true
                    }
                }
            }
        });
    }

    async addTodo(todo: CreateTodoDto, userId: number) {
        return this.prisma.todo.create({
            data: {
                title: todo.title,
                body: todo.body,
                userId: userId,
                done: false,
                todoTag: {
                    create: todo.tag.map((tag) => ({
                        tag: {
                            connect: {
                                id: tag
                            }
                        }
                    }))
                }
            }
        })
    }

    async editTodo(id: number, todo: EditTodoDto) {
        const tag = todo.tag;
        delete todo.tag;
        const response = await this.prisma.todo.update({
            where: {
                id
            }, data: todo
        })
        await this.prisma.todoTag.deleteMany({
            where: {
                todoid: response.id
            }
        })
        for (const tagid of tag) {
            await this.prisma.todoTag.create({
                data: {
                    tagid: tagid,
                    todoid: response.id
                }
            })
        }
        return response
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

    async deleteTodo(id: number) {
        await this.prisma.todoTag.deleteMany({
            where: {
                todoid: id
            }
        })
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
