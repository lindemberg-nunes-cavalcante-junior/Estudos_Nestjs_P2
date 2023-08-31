import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CatEntity } from './Cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CatsaveDto } from './Interfaces/Cat-save.dto';

@Injectable()
export class Catservice {
    constructor(
        @InjectRepository(CatEntity)
        private readonly nullRepository: Repository<CatEntity>){}

        async save(data: CatsaveDto): Promise<CatEntity>{
            return undefined;
        }
}
