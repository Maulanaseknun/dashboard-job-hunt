import { EnumValues } from 'zod';

export const JOBTYPES: EnumValues = ['Full-Time', 'Part-Time', 'Remote', 'Intership'];

export const JOB_LISTING_COLUMNS: string[] = ['Roles', 'Status', 'Data Posted', 'Due Date', 'Job Type', 'Applicants', 'Needs'];

export const JOB_APPLICANT_COLUMNS: string[] = ['Name', 'Applied Date'];

export const JOB_APPLICANT_DATA = [
  {
    name: 'Hariyanto',
    appliedDate: '22 April 2024',
  },
];

export const JOB_LISTING_DATA = [
  {
    roles: 'Software Engineer',
    status: 'Live',
    datePosted: '21 April 2023',
    dueDate: '21 April 2024',
    jobType: 'Full-Time',
    applicants: '3',
    needs: '10',
  },
];
