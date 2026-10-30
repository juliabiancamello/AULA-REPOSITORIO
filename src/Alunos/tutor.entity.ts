import { 
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('tutor')

export class Tutor {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({nullable: true})
    nome!: string;

    @Column({unique: true, nullable: true})
    cpf!: string;

    @Column({nullable: true})
    email!: string;

    @Column({nullable: true})
    telefone!: string;

    @Column({nullable: true})
    endereco!: string;

    @Column({default: true})
    ativo!: boolean;
}