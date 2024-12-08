import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // constructor(private readonly configService: ConfigService){}
    // this.configService.get('PORT');
    ConfigModule.forRoot({envFilePath: `.env.${process.env.NODE_ENV}`}),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
