import Joi from 'joi';

const categorySchema = Joi.object({
  title: Joi.string().max(50).required().messages({
    'any.required': 'Title is required',
    'string.empty': 'Title is required',
    'string.max': 'Title cannot exceed more than 50 characters',
  }),
});

const validateCategory = (input) => {
  const {error} = categorySchema.validate(input, {abortEarly: false});
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
  return error;
};

export default validateCategory;
