import { NestFactory }            from '@nestjs/core';
import { AppModule }              from './app.module';
import { AlleenLoggerInterceptor } from '@alleen/core';
import { alleenConfig }            from './alleen.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(alleenConfig.api.prefix);

  app.useGlobalInterceptors(new AlleenLoggerInterceptor());

  app.enableCors();

  await app.listen(alleenConfig.api.port);
  console.log(`alleen-api running on http://localhost:${alleenConfig.api.port}`);
  console.log(`Endpoint : POST /api/alleen/dbinstance\n`);
}

bootstrap();