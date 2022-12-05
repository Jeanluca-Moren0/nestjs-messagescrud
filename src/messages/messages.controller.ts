import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MessageDto } from './MessageDto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}
  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.messagesService.findById(+params.id).catch((err) => {
      throw new NotFoundException(err.message);
    });
  }

  @Post()
  create(@Body() messageDto: MessageDto) {
    return this.messagesService.create(messageDto);
  }

  @Put(':id')
  update(@Param() params, @Body() message: MessageDto) {
    return this.messagesService.update(+params.id, message).catch((err) => {
      throw new NotFoundException(err.message);
    });
  }

  @Delete(':id')
  remove(@Param() params) {
    return this.messagesService.remove(+params.id).catch((err) => {
      throw new NotFoundException(err.message);
    });
  }
}
