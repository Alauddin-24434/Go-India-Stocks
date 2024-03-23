"use client"
import React, { useEffect, useState } from 'react';

import { FaUser } from "react-icons/fa";
import { BiSolidMessageDetail, BiIntersect } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { RiFileList3Fill, RiChatHistoryFill } from "react-icons/ri";
import { MdEventAvailable } from "react-icons/md";
import styles from "./Sidebar.module.css"
import {

    MdOutlineTableView

} from "react-icons/md";
import { LuNewspaper } from "react-icons/lu";
import { IoMdAnalytics } from "react-icons/io";
import MenuLinks from './MenuLinks';
import { FaHome } from "react-icons/fa";
import Link from 'next/link';
const Sidebar = ({ toggleSidebar, isSidebarOpen, setIsSidebarOpen }) => {


    useEffect(() => {
        const handleResize = () => {
            setIsSidebarOpen(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        handleResize();



        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const sidebarItems = [

        {
            title: "Discussion Forum",
            path: '/dashboard/discussion',
            icon: <BiSolidMessageDetail />
        },
        {
            title: "Market Stories",
            path: "/dashboard/market-stories",
            icon: < RiChatHistoryFill />
        },

        {
            title: "Sentiment",
            path: "/dashboard/sentiment",
            icon: <IoMdAnalytics />
        },
        {
            title: "Market",
            path: "/dashboard/market",
            icon: <MdOutlineTableView />
        },
        {
            title: "Sector",
            path: "/dashboard/sector",
            icon: < BiIntersect />
        },
        {
            title: "Watchlist",
            path: "/dashboard/watchlist",
            icon: <RiFileList3Fill />
        },
        {
            title: "Events",
            path: "/dashboard/event",
            icon: <MdEventAvailable />
        },
        {
            title: "News/Interviews",
            path: "/dashboard/news-interviews",
            icon: <LuNewspaper />
        },


    ]




    return (
        <section className=' '>
            <aside className='relative flex '>
                <div className={`lg:w-48 flex h-screen bg-slate-700 text-white flex-col w-48 border-r ${isSidebarOpen ? 'block ' : 'hidden'}`}>
               <div className='h-auto py-2' >
              
                    <div className=" flex gap-6 items-center justify-between px-4  text-white">
                        {/* Sidebar header content */}
                        
                        <div className='flex items-center  gap-2'>
                            <span> <img
                                className='w-8  h-8 rounded-full'
                                src="https://i.ibb.co/wYyMv1k/3d-illustration-person-with-sunglasses-23-2149436188.jpg"
                                alt="User"
                            /></span>
                            <p className='text-sm font-bold'>Hello, User</p>
                        </div>
                        <span><IoNotifications /></span>
                    </div>
               </div>
                    <hr />
                    <nav className="flex-1 overflow-y-auto">
                        <ul className={styles.list}>
                            {sidebarItems.map((item) => (
                                <MenuLinks key={item.title} item={item} />
                            ))}
                        </ul>
                     
                    </nav>
                    <hr className='mb-1' />
                <div >
                <Link href={'/'}>
                      <p className='flex text-sm items-center mx-4 gap-2'><FaHome />Home</p>
                      </Link>
                  
                      <p className='flex text-sm items-center mx-4 gap-2'><FiLogOut  />Logout</p>
                </div>
                   
                </div>
                <button
                    onClick={toggleSidebar}
                    className={` h-16 bg-gray-700 text-white ${isSidebarOpen ? 'absolute top-1/2 -right-3' : 'fixed top-1/2 left-0 '}`}
                >
                    {isSidebarOpen ? < IoChevronForwardSharp /> : <IoChevronForwardSharp />}
                </button>
            </aside>
        </section>
    );
};

export default Sidebar;
