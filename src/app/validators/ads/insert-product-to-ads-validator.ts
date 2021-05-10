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
      strategyId: Joi.number().integer().required(),
      productId: Joi.number().integer().required(),
      percent: Joi.number().integer().required(),
      quantity: Joi.number().integer().required(),
    });
  }
}
