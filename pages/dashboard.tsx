/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import { BsBell, BsInbox, BsCalendar, BsPerson, BsCaretDownSquare, BsHouse, BsTools } from 'react-icons/bs';
import SideBar from '../components/dashboard/SideBar';
import SummaryCard from '../components/dashboard/SummaryCard';

const DashBoard: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Dashboard Challenge" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className=" grid grid-cols-12 grid-rows-6 h-screen md:m-2 md:p-4 gap-4">
                <SideBar />
                <div className='col-span-8 col-start-2 row-span-2  flex flex-col'>
                    <p className='font-bold text-4xl pt-4'>Welcome to Fyatu's dashboard</p>
                    <div className='grid grid-cols-12 grid-rows-6 h-full gap-3 phone:flex phone:flex-col'>
                        {[1, 2, 3, 4].map((r, i) => <SummaryCard index={i} key={i} />)}
                    </div>
                </div>
                <div className='col-span-8 col-start-2 row-span-2 row-start-3  grid grid-cols-12 grid-rows-6 gap-y-4 gap-x-8'>
                    <div className=' px-8 py-4 col-span-4 row-span-3 bg-white rounded-[20px] border shadow-2xl shadow-gray-300/70 flex flex-col'>
                        <p className='font-bold text-2xl'>New Clients</p>
                        <div className='flex justify-between items-center pt-4 px-16'>
                            <p className='text-5xl font-bold'>54</p>
                            <span className=' w-20 bg-green-100 text-green-500 flex justify-center rounded-lg'> + 54%</span>
                        </div>
                    </div>
                    <div className=' px-8 py-4 col-span-4 row-span-3 row-start-4 bg-white rounded-[20px] border shadow-2xl shadow-gray-300/70 flex flex-col'>
                        <p className='font-bold text-2xl'>Invoice overdue</p>
                        <div className='flex justify-between items-center pt-4 px-16'>
                            <p className='text-5xl font-bold'>4</p>
                            <span className=' w-20 bg-red-100 text-red-500 flex justify-center rounded-lg'> - 12%</span>
                        </div>
                    </div>
                    <div className=' col-span-8  col-start-5 row-span-full bg-sky-100 rounded-[20px] p-8'>
                        <div className="flex flex-col">
                            <div className='flex justify-between'>
                                <p className='text-bold text-2xl'>Revenue</p>
                                <p className='text-bold'>Last 7 days Vs prior week</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-span-8 col-start-2 row-span-2 row-start-5 flex flex-col overflow-y-auto'>
                    <p className='p-4 font-bold'>Recent emails</p>
                    <div className='flex w-full justify-between items-center p-3'>
                        <p className=' rounded-full  w-12 h-12 bg-black'></p>
                        <p className=' rounded-full  text-gray-700'>
                            Hannah Morgan
                        </p>
                        <p className=' rounded-full  text-gray-700'>
                            Meeting schedule
                        </p>
                        <p className=' rounded-full'>
                            1:12PM
                        </p>

                    </div>
                    <div className='flex w-full justify-between items-center p-3 hover:bg-white hover:shadow-2xl hover:shadow-gray-300/70 hover:rounded-[20px] cursor-pointer'>
                        <p className=' rounded-full w-12 h-12 bg-black'></p>
                        <p className=' rounded-full  text-gray-700'>
                            Hannah Morgan
                        </p>
                        <p className=' rounded-full  text-gray-700'>
                            Meeting schedule
                        </p>
                        <p className=' rounded-full'>
                            1:12PM
                        </p>

                    </div>
                </div>
                <div className='phone:hidden col-span-3 col-start-10 bg-fyatu-light-1 rounded-[20px] row-span-full flex flex-col gap-72 p-4'>
                    <div className=" py-2 flex justify-evenly font-bold px-8">
                        <BsCalendar size={25} />
                        <BsBell size={25} />
                        <BsInbox size={25} />
                        <div className='flex justify-center items-center'>
                            <BsPerson size={25} />
                            <BsCaretDownSquare />
                        </div>
                    </div>
                    <div className='flex flex-col items-start px-12 justify-between h-full '>
                        <div className="flex flex-col items-start gap-4">
                            <p className=' font-bold mb-4 text-2xl'>Your to-Do list</p>
                            <div className='flex gap-4'>
                                <div className='rounded-lg bg-fyatu-light flex flex-col justify-center items-center w-12 h-12'>
                                    <BsBell size={20} />
                                </div>
                                <div className='flex flex-col '>
                                    <p>Run payroll</p>
                                    <p className=' text-gray-300'>Mar 4 at 6:00 pm</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='rounded-lg bg-fyatu-light flex flex-col justify-center items-center w-12 h-12'>
                                    <BsBell size={20} />
                                </div>
                                <div className='flex flex-col '>
                                    <p>Run payroll</p>
                                    <p className=' text-gray-300'>Mar 4 at 6:00 pm</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-[20px] flex flex-col p-4 w-full'>
                            <p className='font-bold px-8'>Board meeting</p>
                            <div className='flex gap-4'>
                                <span className='w-5 h-3 bg-fyatu-primary rounded-full'></span>
                                <div className='flex flex-col text-gray-300 gap-4 items-start'>
                                    <p>Feb 22 at 6:00 PM</p>
                                    <p>You have been invited to attend a meeting of the Board Directors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;