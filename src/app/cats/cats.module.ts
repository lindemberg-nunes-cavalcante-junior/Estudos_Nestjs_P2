import { Module } from '@nestjs/common';
import { Catservice } from './catservice.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from './Cat.entity';

@Module({
    imports: [TypeOrmModule.forFeature(CatEntity)],
    providers: [Catservice],
})
export class CatsModule {}
