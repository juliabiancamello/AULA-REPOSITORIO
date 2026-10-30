import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('origem especies')

export class OrigemEspecie{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 9})
    continente!: string;

    @Column({length: 90})
    regiao!: string;

    @Column({type: 'int'})
    descricao!: string;

    @Column({default: true})
    ativo!: boolean;


}