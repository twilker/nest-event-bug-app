import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PackageModule } from '../package/src/package.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [PackageModule, EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
