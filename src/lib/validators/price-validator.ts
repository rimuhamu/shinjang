import { z } from 'zod';

export const PriceValidator = z.object({
  price: z.number().gt(0),
});

export type TPriceValidator = z.infer<typeof PriceValidator>;
