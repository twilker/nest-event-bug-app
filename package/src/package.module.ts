import { Module } from '@nestjs/common';
import { PackageService } from './package.provider';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  providers: [PackageService],
  imports: [EventEmitterModule.forRoot()],
})
export class PackageModule {}
