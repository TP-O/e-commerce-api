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
      categoryId: Joi.required(),
      typeId: Joi.required(),
      name: Joi.string().required(),
      slug: Joi.string().required(),
      min: Joi.number().integer().min(1).max(99).required(),
      max: Joi.number()
        .integer()
        .min(2)
        .max(100)
        .greater(Joi.ref('min'))
        .required(),
      startOn: Joi.date().iso().required(),
      endOn: Joi.date().iso().greater(Joi.ref('startOn')).required(),
    });
  }
}
