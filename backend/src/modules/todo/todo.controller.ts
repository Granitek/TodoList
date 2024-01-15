import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { EditTodoDto } from './dto/edit-todo.dto';
import { TokenGuard } from '../auth/token.guard';
import { UserID } from '../auth/user.decorator';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService) {

    }

    @Get()
    listTodo() {
        return this.todoService.listTodo();
    }

    @Get(":id")
    @UseGuards(TokenGuard)
    async getTodo(@Param("id", ParseIntPipe) id: number, @UserID() userId: number) {
        const todo = await this.todoService.get(id, userId);
        if (!todo)
            throw new HttpException("No Todo with id " + id, 404);
        return todo;
    }

    @Post()
    @UseGuards(TokenGuard)
    addTodo(@Body() todo: CreateTodoDto, @UserID() userId: number) {
        return this.todoService.addTodo(todo, userId);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    @UseGuards(TokenGuard)
    async deleteTodo(@Param("id", ParseIntPipe) id: number, @UserID() userId: number) {
        const todo = await this.todoService.get(id, userId);
        if (!todo) throw new HttpException("No Todo with id " + id, 404);
        await this.todoService.deleteTodo(id);
    }

    @Put(":id")
    @UseGuards(TokenGuard)
    async editTodo(@Param("id", ParseIntPipe) id: number, @Body() todo: EditTodoDto, @UserID() userId: number) {
        const istodo = await this.todoService.get(id, userId);
        if (!istodo) throw new HttpException("No Todo with id " + id, 404);
        return this.todoService.editTodo(id, todo);
    }
}
