import Joi from 'joi';
import { AdsService } from '@app/services/ads/ads-service';
import { Validator } from '@app/validators';
import { injectable } from 'tsyringe';

@injectable()
export class CreateAdsValidator extends Validator {
  /**
   *
   * @param adsService
   */
  public constructor(private adsService: AdsService) {
    super();
  }

  protected makeRules() {
    this.rules = Joi.object().keys({
      categoryId: Joi.number().required().messages({
        'any.required': 'CategoryId is required',
        'number.base': 'CategoryId must be a number',
      }),
      typeId: Joi.number().required().messages({
        'any.required': 'TypeId is required',
        'number.base': 'TypeId must be a number',
      }),
      name: Joi.string().required().messages({
        'any.required': 'Name is required',
        'any.string': 'Name must be a string',
      }),
      slug: Joi.string().required().messages({
        'any.required': 'Slug is required',
        'any.string': 'Slug must be a string',
      }),
      min: Joi.number().integer().min(1).max(99).required().messages({
        'any.required': 'Min is required',
        'number.base': 'Min must be a number',
        'number.min': 'Min must be at least 1',
        'number.max': 'Min must be a most 99',
      }),
      max: Joi.number()
        .integer()
        .min(2)
        .max(100)
        .greater(Joi.ref('min'))
        .required()
        .messages({
          'any.required': 'Max is required',
          'number.base': 'Max must be a number',
          'number.min': 'Max must be at least 2',
          'number.max': 'Max must be a most 100',
          'number.great': 'Max must be greater than min',
        }),
      startOn: Joi.date().iso().required().messages({
        'any.required': 'StartOn is required',
        'date.base': 'StartOn must be a date',
        'date.iso': 'The format of startOn must be YYYY-MM-DD HH:MM:SS',
      }),
      endOn: Joi.date().iso().greater(Joi.ref('startOn')).required().messages({
        'any.required': 'EndOn is required',
        'date.base': 'EndOn must be a date',
        'date.iso': 'The format of endOn must be YYYY-MM-DD HH:MM:SS',
        'date.great': 'EndOn must be greater than startOn',
      }),
    });
  }
}
