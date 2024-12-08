import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// const env = process.env.NODE_ENV;
// const envFile = `.env${
//   (env=='production'||'prod')? '.prod': (env=='development'||'dev')? '.dev': '.local'
// }`;
// dotenv.config({
//   path: path.resolve(envFile)
// });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const port = process.env?.PORT||0;
  await app.listen(port);
}
bootstrap();
