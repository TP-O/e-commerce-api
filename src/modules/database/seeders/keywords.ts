import { autoInjectable } from 'tsyringe';
import { Database } from '../core/database';
import { Seeder } from '../core/seeder';

@autoInjectable()
export class KeywordsSeeder extends Seeder {
    /**
     * Name of seeder.
     */
    protected seederName = 'keywords';

    /**
     * Constructor.
     *
     * @param database database instance.
     */
    public constructor(protected database: Database) {
        super(database);
    }

    /**
     * Insert data to table.
     */
    protected async run() {
        await this.database.table('keywords').insert(
            //Column name
            ['word','score'],
            //Insert data
            [
                [
                    'good',
                    '4',
                ],
                [
                    'perfect',
                    '5',
                ],
                [
                    'amazing',
                    '5',
                ],
                [
                    'great',
                    '4',
                ],
                [
                    'cool',
                    '4',
                ],
                [
                    'outstanding',
                    '3',
                ],
                [
                    'awesome',
                    '5',
                ],
                [
                    'wondeful',
                    '4',
                ],
                [
                    'excellent',
                    '5',
                ],
                [
                    'pleasant',
                    '2',
                ],
                [
                    'well',
                    '2',
                ],
                [
                    'love',
                    '3',
                ],
                [
                    'bad',
                    '-5',
                ],
                [
                    'normal',
                    '0',
                ],
                [
                    'underrate',
                    '-2',
                ],
                [
                    'never',
                    '-4',
                ],
                [
                    'harmful',
                    '-4',
                ],
                [
                    'worst',
                    '-5',
                ],
                [
                    'terrible',
                    '-5',
                ],
                [
                    'dissapointed',
                    '-3',
                ],
            ],
        );
    }
}
