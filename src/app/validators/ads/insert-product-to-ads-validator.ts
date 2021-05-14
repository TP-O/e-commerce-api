import Joi from 'joi';
import { autoInjectable } from 'tsyringe';
import { Validator } from '@app/validators';
import { AdsService } from '@app/services/ads/ads-service';

@autoInjectable()
export class InsertProductToAdsValidator extends Validator {
  public constructor(private adsService: AdsService) {
    super();
  }

  protected makeRules() {
    this.rules = Joi.object().keys({
      strategyId: Joi.number().integer().required().messages({
        'any.required': 'StrategyId is required',
        'number.base': 'StrategyId must be a number',
      }),
      productId: Joi.number().integer().required().messages({
        'any.required': 'ProductId is required',
        'number.base': 'ProductId must be a number',
      }),
      percent: Joi.number().integer().required().messages({
        'any.required': 'Percent is required',
        'number.base': 'Percent must be a number',
      }),
      quantity: Joi.number().integer().required().messages({
        'any.required': 'Quantity is required',
        'number.base': 'Quantity must be a number',
      }),
    });
  }
}
