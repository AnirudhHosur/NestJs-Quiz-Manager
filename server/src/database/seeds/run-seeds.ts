import { DataSource } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import dataSource from '../../../datasource';
import { QuizCreateSeed } from './quiz-create.seed';
import { UserCreateSeed } from './user-create.seed';

const runSeeds = async () => {
    try {
        await dataSource.initialize();

        // Run seeders
        await runSeeders(dataSource, {
            seeds: [UserCreateSeed, QuizCreateSeed],
        } as SeederOptions);

        console.log('Seeds executed successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error during seed execution:', error);
        process.exit(1);
    } finally {
        await dataSource.destroy();
    }
};

runSeeds();