import { Test, TestingModule } from '@nestjs/testing';
import { Catservice } from './catservice.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CatEntity } from './Cat.entity';
import { Repository } from 'typeorm';
import { CatsaveDto } from './Interfaces/Cat-save.dto';
import { race } from 'rxjs';

describe('CatserviceService', () => {
  let service: Catservice;
  let repository: Repository<CatEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        Catservice,
        {
          provide: getRepositoryToken(CatEntity),
          useValue: {},
        }
      ],
    }).compile();

    service = module.get<Catservice>(Catservice);
    repository = module.get<Repository<CatEntity>>(getRepositoryToken(CatEntity))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('save', () => {
    it('tem que está funcionando'), async () => {
      const data: CatsaveDto = {
        Name: 'Tigrenho',
        Race: 'Vira-Lata'
      }
      const result = await service.save(data);
    }
  })
});
