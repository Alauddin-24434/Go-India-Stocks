"use client"
import React, { useEffect, useState } from 'react';

import { FaUser } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaLessThan } from "react-icons/fa6";

import styles from "./Sidebar.module.css"
import {
    MdDashboard,


} from "react-icons/md";
import MenuLinks from './MenuLinks';
const Sidebar = ({ toggleSidebar, setIsLoading, isSidebarOpen, setIsSidebarOpen }) => {
 

    useEffect(() => {
        const handleResize = () => {
            setIsSidebarOpen(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        // Simulate loading delay (remove this setTimeout in your actual implementation)
        setTimeout(() => {
            setIsLoading(false); // Set loading state to false after delay
        }, 2000); // Adjust loading delay time as needed

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const sidebarItems = [
        {
            title: "Dashboard",
            path: '/dashboard',
            icon: <MdDashboard />
        },
        {
            title: "Discussion Forum",
            path: '/dashboard/discussion',
            icon: <FaUser />
        },
        {
            title: "Market Stories",
            path: "/dashboard/market-stories",
            icon: <MdDashboard />
        },

        {
            title: "Sentiment",
            path: "/dashboard/sentiment",
            icon: <MdDashboard />
        },
        {
            title: "Episode",
            path: "/dashboard/episode",
            icon: <MdDashboard />
        },
        {
            title: "Report",
            path: "/dashboard/report",
            icon: <MdDashboard />
        },


    ]




    return (
        <section className=''>
            <aside className='relative flex '>
                <div className={`lg:w-52 flex h-screen bg-slate-700 text-white flex-col w-52 border-r ${isSidebarOpen ? 'block' : 'hidden'}`}>
                    <div className="h-16 flex gap-6 items-center justify-between px-4 bg-gray-800 text-white">
                        {/* Sidebar header content */}
                        <div className='flex items-center gap-2'>
                            <span><FaUser /></span>
                            <p>Hello, User</p>
                        </div>
                        <span><IoNotifications /></span>
                    </div>
                    <nav className="flex-1 overflow-y-auto">
                        <ul className={styles.list}>
                            {sidebarItems.map((item) => (
                                <MenuLinks key={item.title} item={item} />
                            ))}
                        </ul>
                    </nav>
                </div>
                <button
                    onClick={toggleSidebar}
                    className={` h-16 bg-gray-800 text-red-500 ${isSidebarOpen ? 'absolute top-1/2 -right-3' : 'fixed top-1/2 left-0 '}`}
                >
                    {isSidebarOpen ? < FaLessThan /> : <IoChevronForwardSharp />}
                </button>
            </aside>
        </section>
    );
};

export default Sidebar;
