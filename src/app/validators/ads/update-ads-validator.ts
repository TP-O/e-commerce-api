import Joi from 'joi';
import { AdsService } from '@app/services/ads/ads-service';
import { Validator } from '@app/validators';
import { injectable } from 'tsyringe';

@injectable()
export class UpdateAdsValidator extends Validator {
  /**
   *
   * @param adsService
   */
  public constructor(private adsService: AdsService) {
    super();
  }

  protected makeRules() {
    this.rules = Joi.object().keys({
      categoryId: Joi.number().messages({
        'number.base': 'CategoryId must be a number'
      }),
      typeId: Joi.number().messages({
        'number.base': 'TypeId must be a number'
      }),
      name: Joi.string().messages({
        'any.string': 'Name must be a string',
      }),
      slug: Joi.string().messages({
        'any.string': 'Slug must be a string',
      }),
      min: Joi.number().integer().min(1).max(99).messages({
        'number.base': 'Min must be a number',
        'number.min': 'Min must be at least 1',
        'number.max': 'Min must be a most 99',
      }),
      max: Joi.number()
        .integer()
        .min(2)
        .max(100)
        .greater(Joi.ref('min'))
        .messages({
          'number.base': 'Max must be a number',
          'number.min': 'Max must be at least 2',
          'number.max': 'Max must be a most 100',
          'number.great': 'Max must be greater than min',
        }),
      startOn: Joi.date().iso().messages({
        'date.base': 'StartOn must be a date',
        'date.iso': 'The format of startOn must be YYYY-MM-DD HH:MM:SS',
      }),
      endOn: Joi.date().iso().greater(Joi.ref('startOn')).messages({
        'date.base': 'EndOn must be a date',
        'date.iso': 'The format of endOn must be YYYY-MM-DD HH:MM:SS',
        'date.great': 'EndOn must be greater than startOn',
      }),
    });
  }
}
