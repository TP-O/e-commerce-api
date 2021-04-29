import { Seeder } from '@modules/database/core/seeder';
import { autoInjectable } from 'tsyringe';
import { Database } from '@modules/database/core/database';

@autoInjectable()
export class BrandsSeeder extends Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = 'brands';

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
    await this.database.table('brands').insert(
      // Column names
      ['name', 'slug'],
      // Inserted data
      [
        ['No Brand', 'no-brand'], //1

        //Smart Phone
        ['Apple', 'Apple'], //2
        ['Samsung', 'samsung'], //3
        ['Xiaomi', 'xiaomi'], //4

        //TV(Samsung, LG, Sony)
        ['LG', 'lg'], //5
        ['Sony', 'sony'], //6

        //Air conditioner
        ['Nagakawa', 'nagakawa'], //7
        ['Sharp', 'sharp'], //8
        ['Daikin', 'daikin'], //9
        ['Kachi', 'kachi'], //10
        ['Casper', 'casper'], //11

        //Fridge
        ['Toshiba', 'toshiba'], //12

        //Cooking tools
        ['Cuckcoo', 'cuckcoo'], //13
        ['Panasonic', 'panasonic'], //14
        ['Rire', 'rire'], //15  
        ['Luminarc', 'luminarc'], //16

        //Lighting Devices
        ['Phillips', 'phillips'], //17
        ['Rylan', 'rylan'], //18
        ['Comet', 'comet'], //19
        ['Sylvania', 'sylvania'], //20
        ['Yeelight', 'yeelight'], //21

        //Furniture
        ['OEM', 'oem'], //22
        ['SMLife', 'smlife'], //23
        ['Sunhouse', 'sunhouse'], //24
        ['Kangaroo', 'kangaroo'], //25


        //Beverages
        ['Tiger', 'tiger'], //26
        ['Budweiser', 'budweiser'], //27
        ['Heineken', 'heineken'], //28

        //Foods
        ['Snickers', 'snickers'], //29
        ['Oreo', 'oreo'], //30
        ['Blackmores', 'blackmores'], //31
      

        //Pet Foods


        //Make Up Tools
        ['Queen Crown', 'queen-crown'], //32
        ['Synca Circ', 'synca-circ'], //33
        ['Sonic', 'sonic'], //34
        ['CLSEVXY', 'clsevxy'], //35

        //Body Care
        ['Lagivado', 'lagivado'], //36
        ['Senka', 'senka'], //37
        ['Romano', 'romano'], //38
        ['Nivea', 'nivea'], //39

        //Skin Care(No Brand)
        ['Avene Eau', 'avene-eau'], //40
        ['Madagascar Centella', 'madagascar-centella'], //41
        ['Da Balance', 'da-balance'], //42
        ['Cerave', 'cerave'], //43

      ],
    );
  }
}
