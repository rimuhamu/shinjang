import { z } from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const PhoneNumberValidator = z.object({
  phoneNumber: z.string().regex(phoneRegex, 'Invalid Number!'),
});

export type TPhoneNumberValidator = z.infer<typeof PhoneNumberValidator>;
