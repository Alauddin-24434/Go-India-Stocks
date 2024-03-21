"use client"
// Sidebar.js
import React, { useEffect } from 'react';
import SidebarItem from './SidebarItem';
import { FaUser } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";
const Sidebar = ({ toggleSidebar, setIsLoading, isSidebarOpen, setIsSidebarOpen }) => {
    useEffect(() => {
        const handleResize = () => {
            setIsSidebarOpen(window.innerWidth >= 1024);
            setIsSidebarOpen(window.innerWidth >= 768);
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
    return (
        <section>
            <aside className={`lg:w-52  flex flex-col w-52 border-r ${isSidebarOpen ? 'block' : 'hidden'}`}>
                <div className="h-16 flex gap-6 items-center justify-between  px-4 bg-gray-800 text-white">
                    {/* Sidebar header content */}
                    <div className='flex items-center gap-2'>
                        <span><FaUser /></span>
                        <p>Hello, User</p>
                    </div>

                    <span><IoNotifications /></span>


                </div>
                <nav className="flex-1 overflow-y-auto">
                    <ul className="py-4">
                        {/* Menu items */}
                        <SidebarItem label="Discussion Forum" href="/dashboard/discussion" />
                        <SidebarItem label="Market Stories" href="/dashboard/market-stories" />
                        <SidebarItem label="Sentiment" href="/dashboard/sentiment" />
                        <SidebarItem label="Market" href="/dashboard/market" />
                        <SidebarItem label="Sector" href="/dashboard/sector" />
                        <SidebarItem label="Watchlist" href="/dashboard/watchlist" />
                        <SidebarItem label="Event" href="/dashboard/event" />
                        <SidebarItem label="News/Interviews" href="/dashboard/news-interviews" />

                    </ul>
                </nav>

            </aside>
            {/* toggle icon */}
            <div className=''>
                <button
                    onClick={toggleSidebar}
                    className={`md:hidden fixed h-16 bg-gray-800 text-white ${isSidebarOpen ? 'top-1/2 right-1/3' : 'top-1/2 left-0'}`}
                    style={{
                        transform: isSidebarOpen ? 'translate(-50%, -50%)' : '',
                    }}
                >
                    {isSidebarOpen ? <IoChevronForwardSharp /> : <IoChevronForwardSharp />}
                </button>

            </div>
            {/* <button onClick={toggleSidebar} className="md:hidden absolute top-0 right-full transform -translate-x-full translate-y-1/2 rounded-full text-black p-3">
                {isSidebarOpen ? <IoChevronForwardSharp /> : <IoChevronForwardSharp />}
            </button> */}
        </section>

    );
};

export default Sidebar;
