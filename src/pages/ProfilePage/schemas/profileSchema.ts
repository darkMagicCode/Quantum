import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z
    .string()
    .min(1, 'Phone is required')
    .regex(/^[\d\s\-\+\(\)]+$/, 'Please enter a valid phone number')
    .refine(
      (value) => value.replace(/\D/g, '').length >= 10,
      'Phone number must have at least 10 digits'
    ),
  jobTitle: z.string().min(1, 'Job title is required'),
  yearsOfExperience: z
    .number()
    .min(0, 'Years of experience must be a non-negative integer')
    .int('Years of experience must be an integer'),
  address: z.string().min(1, 'Address is required'),
  workingHours: z.string().min(1, 'Working hours is required'),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
