import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('quizes')
export class Quiz extends BaseEntity {
    @ApiProperty({
        description: 'The quiz unique identifier',
        example: 1
    })
    @PrimaryGeneratedColumn({
        comment: 'The quiz unique identifier'
    })
    id: number;

    @ApiProperty({
        description: 'The title of the quiz',
        example: 'Geography Quiz'
    })
    @Column({
        type: 'varchar'
    })
    title: string;

    @ApiProperty({
        description: 'A description of what the quiz is about',
        example: 'Test your knowledge of world capitals and landmarks'
    })
    @Column({
        type: 'text'
    })
    description: string;

    @ApiProperty({
        description: 'Whether the quiz is currently active',
        example: true
    })
    @Column({
        type: 'boolean',
        default: 1
    })
    isActive: boolean;

    @ApiProperty({
        description: 'The questions that belong to this quiz',
        type: () => [Question]
    })
    @OneToMany(() => Question, question => question.quiz, { cascade: true })
    questions: Question[];
}