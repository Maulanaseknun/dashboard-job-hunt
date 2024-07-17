'use client';
import React, { FC } from 'react';
import { overviewFormSchema } from '@/lib/fom-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import TitleForm from '@/components/atoms/TitleForm';
import { Separator } from '@/components/ui/separator';
import { Form } from '@/components/ui/form';
import FieldInput from '@/components/organisms/FieldInput';

interface OverviewFormProps {}

const OverviewForm: FC<OverviewFormProps> = ({}) => {
  const form = useForm<z.infer<typeof overviewFormSchema>>({
    resolver: zodResolver(overviewFormSchema),
  });
  const onSubmit = (val: z.infer<typeof overviewFormSchema>) => {
    console.log(val);
  };
  return (
    <div>
      <div className="my-5">
        <TitleForm title="Basic Information" subTitle="This is company information than you can update anytime" />
      </div>
      <Separator className='space-y-7' />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <FieldInput title="Company Logo" subTitle="This image will be shown publicly as company logo"></FieldInput>
        </form>
      </Form>
    </div>
  );
};

export default OverviewForm;
