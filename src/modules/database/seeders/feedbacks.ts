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
      ['customerId', 'productId', 'rating', 'content', 'score'],
      // Inserted data
      [
        [
          '1',
          '1',
          '5',
          'This phone is a phone. I think. Phone.',
          '0',
        ],
        [
          '1',
          '2',
          '3',
          'The phone is a definite upgrade from last year but I would have perfered 120hz refresh over 5G',
          '0',
        ],
        [
          '3',
          '4',
          '1',
          'The first day it was ok but the next few days the phone has just cracked from dropping it on my bed',
          '0',
        ],
        [
          '2',
          '6',
          '5',
          'It felles good',
          '4',
        ],
        [
          '2',
          '7',
          '1',
          'It does not worth this price.',
          '0',
        ],
        [
          '3',
          '8',
          '4',
          'Thank you.',
          '0',
        ],
        [
          '1',
          '10',
          '5',
          'Not too hard to get set up, all I needed. Works great.',
          '4',
        ],
        [
          '3',
          '20',
          '1',
          'DO NOT BUY THIS TV. Or do buy it and prepared to be frustrated out of your mind.',
          '0',
        ],
        [
          '1',
          '21',
          '5',
          'Amazing picture quality and filled with smart features.',
          '5',
        ],
        [
          '3',
          '22',
          '5',
          'Bucket list check. Next get rid of girl friend.',
          '0',
        ],
        [
          '2',
          '23',
          '2',
          'Did not come with any screws. like seriously.',
          '0',
        ],
        [
          '2',
          '24',
          '5',
          'Pretty amazing tv. I would buy it again. I have zero regrets.',
          '5',
        ],
        [
          '1',
          '24',
          '5',
          'It is packed well, look up some YouTube for setting it up. The manual with it is well, non exixtent.',
          '2',
        ],
        [
          '3',
          '25',
          '1',
          'do not buy this unit.',
          '0',
        ],
        [
          '2',
          '25',
          '2',
          'I got the 6000 btu version and so far I have been greatly disappointed.',
          '-3',
        ],
        [
          '1',
          '26',
          '4',
          'I have it cooling two rooms and it does the job. My only complaint would be the small size of the controls.',
          '0',
        ],
        [
          '2',
          '27',
          '2',
          'Good looking unit but i expected more. Does not blow hard enough in my opinion.',
          '4',
        ],
        [
          '3',
          '45',
          '5',
          'This lighter is amazing. Lights candles instantly. Highly recommend this product',
          '5',
        ],
        [
          '1',
          '45',
          '5',
          'Easy to use. A nice change from a butane lighter that never works when you need it to. No butane fill up.',
          '0',
        ],
        [
          '2',
          '47',
          '5',
          'Looks very good, adds a lot of warm atmosphere to the bedroom.',
          '4',
        ],
        [
          '3',
          '48',
          '1',
          'A piece of junk, do not waste your money.',
          '0',
        ],
        [
          '1',
          '73',
          '5',
          'Well worth the cash easy to assemble great quality very comfortable after long playing hours',
          '4',
        ],
        [
          '3',
          '74',
          '1',
          'Cheapest material, worst design.',
          '-5',
        ],
        [
          '2',
          '74',
          '1',
          'Returned',
          '0',
        ],
        [
          '1',
          '76',
          '5',
          'You just can not beat the basics. This hairdryer takes care of business and fast.',
          '0',
        ],
        [
          '3',
          '76',
          '5',
          'I just love this hair dryer. It does a wonderful job dryer my thick hair.',
          '7',
        ],
        [
          '2',
          '77',
          '2',
          'It did its job. Nothing amazing by any means. I was really disappointed that it stopped working after a year.',
          '2',
        ],
        [
          '3',
          '81',
          '1',
          'This zinc oxide is too thick. It makes your face look like a ghost',
          '0',
        ],
        [
          '1',
          '82',
          '5',
          'Love, love, love this product',
          '9',
        ],
      ],
    );
  }
}
