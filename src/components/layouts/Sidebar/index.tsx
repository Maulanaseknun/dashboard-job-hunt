'use client'
import { Button } from '@/components/ui/button';
import React, { FC } from 'react';
import { TiMessages, TiDocumentText } from 'react-icons/ti';
import { FaRegBuilding } from 'react-icons/fa';
import { RiCalendarScheduleLine } from 'react-icons/ri';
import { IoHomeOutline } from 'react-icons/io5';
import { FaUsersRectangle } from 'react-icons/fa6';
import { MdOutlineSettings } from 'react-icons/md';
import { IoMdLogOut } from "react-icons/io";
import { useRouter } from 'next/navigation';
interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {

  const router = useRouter()
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <Button variant={'ghost'} className="w-full justify-start rounded-none  hover:text-primary" onClick={() => router.push('/')}>
              <IoHomeOutline className="mr-2 text-lg" /> Home
            </Button>
            <Button variant={'ghost'} className="w-full justify-start rounded-none  hover:text-primary">
              <TiMessages className="mr-2 text-lg" /> Messages
            </Button>
            <Button variant={'ghost'} className="w-full justify-start rounded-none  hover:text-primary">
              <FaRegBuilding className="mr-2 text-lg" /> Company Profile
            </Button>
            <Button variant={'ghost'} className="w-full justify-start rounded-none hover:text-primary">
              <FaUsersRectangle className="mr-2 text-lg" /> All Aplicants
            </Button>
            <Button variant={'ghost'} className="w-full justify-start rounded-none  hover:text-primary" onClick={() => router.push('/job-listings')}>
              <TiDocumentText className="mr-2 text-lg"  /> Job Listing
            </Button>
            <Button variant={'ghost'} className="w-full justify-start rounded-none  hover:text-primary">
              <RiCalendarScheduleLine className="mr-2 text-lg" /> My Schedule
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
          <Button variant={'ghost'} className="w-full justify-start rounded-none  hover:text-primary" onClick={() => router.push('/settings')}>
            <MdOutlineSettings className="mr-2 text-lg" /> Settings
          </Button>
          <Button variant={'ghost'} className="w-full justify-start rounded-none  hover:text-primary">
            <IoMdLogOut className="mr-2 text-lg" /> Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
