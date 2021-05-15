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
                    'Great',
                    '4',
                ],
                [
                    'Cool',
                    '4',
                ],
                [
                    'Outstanding',
                    '3',
                ],
                [
                    'Awesome',
                    '5',
                ],
                [
                    'Wondeful',
                    '4',
                ],
                [
                    'Excellent',
                    '5',
                ],
                [
                    'not good enough',
                    '2',
                ],
                [
                    'Pleasant',
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
                    'Bad',
                    '-5',
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