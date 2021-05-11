import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class FeedbacksSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'feedbacks';

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
    await this.database.table('feedbacks').insert(
      // Column names
      ['customerId', 'productId', 'rating', 'content'],
      // Inserted data
      [
        [
          '1',
          '1',
          '5',
          'This phone is a phone. I think. Phone.',
        ],
        [
          '1',
          '2',
          '3',
          'The phone is a definite upgrade from last year but I would’ve perferd 120hz refresh over 5G',
        ],
        [
          '3',
          '4',
          '1',
          'The first day it was good but the next few days the phone has just cracked from dropping it on my bed',
        ],
        [
          '2',
          '6',
          '5',
          'It felles good',
        ],
        [
          '2',
          '8',
          '1',
          'It does not worth this price.',
        ],
        [
          '3',
          '8',
          '4',
          'Thank you.',
        ],
        [
          '1',
          '10',
          '5',
          'Not too hard to get set up, all I needed. Works great'
        ],
        [
          '1',
          '22',
          '5',
          'Amazing picture quality and filled with smart features.',
        ],
        [
          '3',
          '20',
          '1',
          'DO NOT BUY THIS TV*** Or do buy it and prepared to be frustrated out of your mind. This is my first and last Sony TV...',
        ],
        [
          '1',
          '3',
          '5',
          'Amazing picture quality and filled with smart features.',
        ],
        [
          '3',
          '15',
          '5',
          'Great!',
        ],
        [
          '1',
          '14',
          '4',
          'Thank you.',
        ],
        [
          '2',
          '13',
          '5',
          'Thank you.',
        ],
        [
          '1',
          '12',
          '4',
          'Thank you.',
        ],
        [
          '3',
          '11',
          '5',
          'Thank you.',
        ],
        [
          '2',
          '10',
          '4',
          'Thank you.',
        ],
        [
          '3',
          '9',
          '4',
          'Thank you.',
        ],[
          '1',
          '7',
          '4',
          'Thank you.',
        ],
      ],
    );
  }
}
