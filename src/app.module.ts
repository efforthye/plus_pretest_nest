import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // constructor(private readonly configService: ConfigService){}
    // this.configService.get('PORT');
    ConfigModule.forRoot({envFilePath: `.env.${process.env.NODE_ENV}`}),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
