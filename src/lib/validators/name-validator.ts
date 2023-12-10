import { z } from 'zod';

export const NameValidator = z.object({
  name: z.string().min(2),
});

export type TNameValidator = z.infer<typeof NameValidator>;
