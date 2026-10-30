import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('especies')

export class Especie{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'text'})
    nomePopular!: string;

    @Column({type: 'text'})
    nomeCientifico!: string;

    @Column({type: 'text'})
    descricao!: string;

    @Column({default: true})
    domestico!: boolean;

    @Column({default: true})
    ativo!: boolean;
}