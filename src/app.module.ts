import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './app/cats/cats.module';
import { Catservice } from './app/cats/catservice.service'
@Module({
  imports: [ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type:'postgres',
    host: 'localhost',
    port: 5432,
    database: 'Cats',
    username: 'postgres',
    password: 'root',
    entities: [__dirname + '/**/*.entity{.js,.ts}'],
    synchronize: true,
  }),
  CatsModule,],
  controllers: [AppController],
  providers: [AppService, Catservice],
})
export class AppModule {}
