import { Injectable } from "@nestjs/common";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";

@Injectable()
export class PackageService {
    constructor(private readonly eventEmitter: EventEmitter2) { }

    @OnEvent('ping')
    handlePing() {
        this.eventEmitter.emit('pong');
    }
}