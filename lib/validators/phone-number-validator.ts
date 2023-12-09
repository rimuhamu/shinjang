import { z } from 'zod';

export const PhoneNumberValidator = z.object({
  number: z.number().min(12),
});

export type TPhoneNumberValidator = z.infer<typeof PhoneNumberValidator>;
