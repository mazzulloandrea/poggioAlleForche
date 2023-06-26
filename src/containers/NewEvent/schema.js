import * as yup from 'yup';
import { DateTime } from 'luxon';
import { useCallback } from 'react';

const START_DATE_FROM = DateTime.now().startOf('day');
const START_DATE_TO = DateTime.now().startOf('day');

export const defaultValues = {
  title: null,
  description: null,
  dateFrom: START_DATE_FROM.set({ hour: 9 }).toFormat(`yyyy-MM-dd'T'HH:mm`),
  dateTo: START_DATE_TO.set({ hour: 18 }).toFormat(`yyyy-MM-dd'T'HH:mm`),
  tags: [],
  location: null,
  image: null,
};

export const validationSchema = yup.object().shape({
  title: yup.string().trim().required().min(5).max(30),
  description: yup.string().trim().required().max(2000),
  dateFrom: yup
    .date()
    .required()
    .min(START_DATE_FROM)
    .transform((_, originalValue) => new Date(originalValue)),
  dateTo: yup
    .date()
    .required()
    .min(yup.ref('dateFrom'))
    .transform((_, originalValue) => new Date(originalValue)),
  tags: yup.array().transform((_, originalValue) =>
    originalValue
      .split(',')
      .map(t => t.trim())
      .filter(Boolean),
  ),
  image: yup.mixed(),
  location: yup.string().trim().required(),
});

export const useYupValidationResolver = validationSchema =>
  useCallback(
    async data => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        console.log(errors);
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {},
          ),
        };
      }
    },
    [validationSchema],
  );
