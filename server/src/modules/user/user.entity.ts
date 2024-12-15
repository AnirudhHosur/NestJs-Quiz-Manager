import { ApiProperty } from "@nestjs/swagger";
import * as bcrypt from 'bcrypt';
import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRoles } from "./enums/user.enum";

@Entity({ name: 'users' })
export class User extends BaseEntity {

    @ApiProperty({
        description: 'The unique identifier for the user',
        example: 1
    })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({
        description: 'The name of the user',
        example: 'John Doe'
    })
    @Column()
    name: string

    @ApiProperty({
        description: 'The email address of the user',
        example: 'john@example.com'
    })
    @Column({ unique: true })
    email: string

    @ApiProperty({
        description: 'The hashed password of the user',
        example: '$2b$10$abcdefghijklmnopqrstuvwxyz'
    })
    @Column()
    password: string

    @ApiProperty({
        description: 'The role of the user',
        enum: UserRoles,
        example: UserRoles.MEMBER
    })
    @Column({
        type: 'enum',
        enum: UserRoles,
        default: UserRoles.MEMBER
    })
    role: UserRoles

    @ApiProperty({
        description: 'The timestamp when the user was created',
        example: '2023-01-01T00:00:00Z'
    })
    @CreateDateColumn()
    createdAt: Date

    @ApiProperty({
        description: 'The timestamp when the user was last updated',
        example: '2023-01-01T00:00:00Z'
    })
    @UpdateDateColumn()
    updatedAt: Date

    @BeforeInsert()
    async setPassword(password: string) {
        // Hash password and save
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password || this.password, salt);
    }
}