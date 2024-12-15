import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewColumnToUserEntity1734295718314 implements MigrationInterface {
    name = 'AddNewColumnToUserEntity1734295718314'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "role" "public"."users_role_enum" NOT NULL DEFAULT 'member'`);
        await queryRunner.query(`ALTER TABLE "options" ALTER COLUMN "isCorrect" SET DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "options" ALTER COLUMN "isCorrect" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
    }

}
