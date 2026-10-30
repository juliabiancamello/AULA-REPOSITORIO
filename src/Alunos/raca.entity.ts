import { 
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('raca')

export class Raca {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column({length: 40})
    nome!: string;

    @Column({length: 10})
    porte!: string;

    @Column({type: 'text'})
    descricao!: string;

    @Column({type: 'int'})
    expectativaVida: number;

    @Column({default: true})
    ativo!: boolean;

}