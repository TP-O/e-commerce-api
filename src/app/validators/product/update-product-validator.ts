import { ProductService } from "@app/services/product/product-service";
import Joi from "joi";
import { injectable } from "tsyringe";
import { Validator } from "..";

@injectable()
export class UpdateProductValidator extends Validator {
    public constructor(private productService: ProductService){
        super();
    }
    /**
     * Make rules for the validator.
     */
    protected makeRules() {
        this.rules = Joi.object().keys({
            name: Joi
                .string()
                .min(1)
                .messages({
                    'string.base': 'Name must be a string',
                    'string.min': 'Name must be at lease 1 character',
            }),
            price: Joi
                .number()
                .positive()
                .messages({
                    'number.base': 'Price must be a number',
                    'number.positive': 'Price must be a positive',
            }),
            quantity: Joi
                .number()
                .positive()
                .messages({
                    'number.base': 'Quantity must be a number',
                    'number.positive': 'Quantity must be a positive',
            }),
            description: Joi
                .string()
                .messages({
                    'string.base': 'Description must be a string',
            }),
        });
    }
}
