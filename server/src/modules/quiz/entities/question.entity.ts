import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Option } from "./option.entity";
import { Quiz } from "./quiz.entity";

@Entity('questions')
export class Question extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar'
    })
    question: string;

    @ManyToOne(() => Quiz, (quiz) => quiz.questions, { onDelete: 'CASCADE' })
    quiz: Quiz;

    @OneToMany(() => Option, (option) => option.question, { cascade: true })
    options: Option[];
}