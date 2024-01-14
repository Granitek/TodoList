import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService) {

    }

    @Get()
    listTodo() {
        return this.todoService.listTodo();
    }

    @Post()
    addTodo(@Body() todo: CreateTodoDto) {
        return this.todoService.addTodo(todo);
    }
}
