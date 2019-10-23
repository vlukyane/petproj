import {MongoProvider} from '../providers/MongoProvider';
import {PostgresProvider} from '../providers/PostgresProvider';
import {Provider} from '../providers/Provider';

const dotenv = require('dotenv');
dotenv.config();
const DB_ENV = process.env.DATABASE;

const chooseDb = (): Provider => {
    switch (DB_ENV) {
        case 'mongo':
            return new MongoProvider();
        case 'postgres':
            return new PostgresProvider();
        default:
            return new MongoProvider();
    }
};

const dbRepo: Provider = chooseDb();

export default dbRepo;
