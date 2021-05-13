import { FeedbackService } from "@app/services/product/feedback-service";
import Joi from "joi";
import { injectable } from "tsyringe";
import { Validator } from "..";

@injectable()
export class CreateFeedbackValidator extends Validator {
    /**
     * @param feedbackService
     */
     public constructor(private productService: FeedbackService){
        super();
    } 
    /**
     * Make rules for the validator.
     */
    protected makeRules() {
        this.rules = Joi.object().keys({
            rating: Joi
                .number()
                .positive()
                .required()
                .messages({
                    'number.base': 'Rating must be a number',
                    'number.positive': 'Rating must be positive',
                    'any.required': 'Rating is invalid',
                }),
            content: Joi.any(), 
        });
    }
}
