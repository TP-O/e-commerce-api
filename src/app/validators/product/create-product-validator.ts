import { ProductService } from "@app/services/product/product-service";
import Joi from "joi";
import { injectable } from "tsyringe";
import { Validator } from "..";

@injectable()
export class CreateProductValidator extends Validator {

    /**
     * @param productService
     */
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
                .required()
                .messages({
                    'string.base': 'Name must be a string',
                    'string.min': 'Name must be at least 1 character',
                    'any.required': 'Name is invalid',
                }),
            price: Joi
                .number()
                .positive()
                .required()
                .messages({
                    'number.base': 'Price must be a number',
                    'number.positive': 'Price must be positive',
                    'any.required': 'Price is invalid',
                }),
            quantity: Joi
                .number()
                .positive()
                .required()
                .messages({
                    'number.base': 'Quantity must be a number',
                    'number.positive': 'Quantity must be positive',
                    'any.required': 'Quantity is invalid',
                }),
            description: Joi
                .string()
                .messages({
                    'string.base': 'Description must be a string',
                }),
        });
    }
}
