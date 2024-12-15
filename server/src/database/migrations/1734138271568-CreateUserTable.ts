import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1734138271568 implements MigrationInterface {
    name = 'CreateUserTable1734138271568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "options" ALTER COLUMN "isCorrect" SET DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "options" ALTER COLUMN "isCorrect" SET DEFAULT true`);
    }

}
