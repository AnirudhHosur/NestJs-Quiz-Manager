import { runSeeders } from 'typeorm-extension';
import dataSource from '../../../datasource';

const runSeeds = async () => {
    try {
        await dataSource.initialize();
        await runSeeders(dataSource);
        console.log('Seeds executed successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error during seed execution:', error);
        process.exit(1);
    }
};

runSeeds();