import { 
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('pet')

export class Pet {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column({nullable: true, length: 50})
    nome!: string;

    @Column({type: 'date'})
    dataNascimento!: Date;

    @Column({length: 12})
    sexo!: string;

    @Column({type: 'decimal', precision: 5, scale: 2})
    peso!: number;

    @Column({length: 10})
    cor!: string;

    @Column({default: true})
    castrado!: boolean;

    @Column({default: true})
    ativo!: boolean;
}