import Joi from 'joi';

const specProductSchema = Joi.object({
  text: Joi.string().trim().required().messages({
    'any.required': 'text is required',
    'string.empty': 'text is required',
    'string.base': 'text must a character',
  }),
});

const validateSpecProduct = (input) => {
  const {error} = specProductSchema.validate(input, {abortEarly: false});

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
  return error;
};

export default validateSpecProduct;
