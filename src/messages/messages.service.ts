import { Injectable } from '@nestjs/common';
import { MessageDto } from './MessageDto';
import { Message } from './Message';

@Injectable()
export class MessagesService {
  private messages: Message[] = [
    {
      id: 1,
      text: 'Primeira mensagem',
    },
    {
      id: 2,
      text: 'Segunda mensagem',
    },
  ];

  findAll() {
    return this.messages.filter(Boolean);
  }

  async findById(id: number) {
    const message = this.messages.find((message) => message?.id === id);

    if (!message) {
      throw Error('Mensagem com o id ' + id + ' nao encontrada');
    }

    return message;
  }

  create(messageDto: MessageDto) {
    const id = this.messages.length + 1;

    const message: Message = {
      id,
      ...messageDto,
    };

    this.messages.push(message);
    return message;
  }

  async update(id: number, messageDto: MessageDto) {
    const messageIndex = this.messages.findIndex(
      (message) => message?.id === id,
    );

    if (messageIndex < 0) {
      throw Error('Mensagem com o id ' + id + ' nao encontrada');
    }

    const message: Message = {
      id,
      ...messageDto,
    };

    this.messages[messageIndex] = message;
    return message;
  }

  async remove(id: number) {
    const messageIndex = this.messages.findIndex(
      (message) => message?.id === id,
    );

    if (messageIndex < 0) {
      throw Error('Mensagem com o id ' + id + ' nao encontrada');
    }

    delete this.messages[messageIndex];

    return { message: 'Mensagem com Id ' + id + ' removida com sucesso!' };
  }
}
