'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Separator } from '@/components/ui/separator';
import React, { FC, ReactNode } from 'react';

interface FieldInputProps {
  children: ReactNode;
  title: string;
  subTitle: string;
}

const FieldInput: FC<FieldInputProps> = ({ children, title, subTitle }) => {
  return (
    <>
      <div className="flex flex-row items-start">
        <div className="w-[35%]">
          <div className="font-semibold">{title}</div>
          <div className="w-80 text-gray-400">{subTitle}</div>
        </div>
        {children}
      </div>
      <Separator />
    </>
  );
};

export default FieldInput;
