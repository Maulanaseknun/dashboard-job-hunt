import React, { FC } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { JOB_APPLICANT_DATA, JOB_APPLICANT_COLUMNS } from '@/constants';
import ButtonActionTable from '../ButtonActionTable';

interface ApplicantsProps {}

const Applicants: FC<ApplicantsProps> = ({}) => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            {JOB_APPLICANT_COLUMNS.map((item: string, i: number) => (
              <TableHead key={item + 1}>{item}</TableHead>
            ))}
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {JOB_APPLICANT_DATA.map((item: any, i: number) => (
            <TableRow key={item.roles + 1}>
              <TableCell>{item.roles}</TableCell>
              <TableCell></TableCell>

              <TableCell>
                <ButtonActionTable url="" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Applicants;
