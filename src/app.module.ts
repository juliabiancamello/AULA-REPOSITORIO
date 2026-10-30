import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutor } from './Alunos/tutor.entity.js';
import { Raca } from './Alunos/raca.entity.js';
import { Especie } from './Alunos/especie.entity.js';
import { Pet } from './Alunos/pet.entity.js';
import { OrigemEspecie } from './Alunos/origem.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'Clinica',
      entities: [Especie, Tutor, Raca, Pet, OrigemEspecie],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}