import { JOBTYPES } from '@/constants';
import { z } from 'zod';

export const jobFormSchema = z.object({
  roles: z.string({ required_error: 'Job Title is required' }).min(3, { message: 'Job Title must be at least 3 characters' }),
  jobType: z.enum(JOBTYPES, { required_error: 'You need to select' }),
  salaryFrom: z.string({ required_error: 'Salary From is required' }),
  salaryTo: z.string({ required_error: 'Salary To is required' }),
  categoryId: z.string({ required_error: 'You need to select a category' }),
  requiredSkills: z.string().array().nonempty({ message: 'Required Skill must be at least 1 skill' }),
  jobDescription: z.string({ required_error: 'Job Description is required' }).min(10, { message: 'Job Description must be at least 10 characters' }),
  responsibility: z.string({ required_error: 'Responsibilties is required' }).min(10, { message: 'Responsibilities must be at least 10 characters' }),
  whoYouAre: z.string({ required_error: 'Who You Are is required' }).min(10, { message: 'Who You Are must be at least 10 characters' }),
  niceToHaves: z.string({ required_error: 'Nice-To-Haves is required' }).min(10, { message: 'Nice-To-Haves must be at least 10 characters' }),
  benefits: z
    .object({
      benefits: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: 'Benefits must be at least 1 benefit' }),
});

export const overviewFormSchema = z.object({
  image: z.any().refine((item: any) => item?.name, { message: 'Image is required' }),
  name: z.string({ required_error: 'Name is required' }),
  website: z.string({ required_error: 'Website is required' }),
  location: z.string({ required_error: 'Location is required' }),
  employee: z.string({ required_error: 'Employee is required' }),
  industry: z.string({ required_error: 'Industry is required' }),
  dateFounded: z.string({ required_error: 'Date Founded is required' }),
  techStack: z.string().array().nonempty({ message: 'Industry is required' }),
  description: z.string({ required_error: 'Description is required' }),
});
