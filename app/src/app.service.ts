import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class AppService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  getHello(): string {
    this.eventEmitter.emit('ping');
    return 'Hello World!';
  }

  @OnEvent('pong')
  handlePong() {
    console.log('pong');
  }
}
