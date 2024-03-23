"use client"
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };



    return (
        <html lang="en">
            <body>
                <div className=''>
                    <div className="flex">
                        {/* Sidebar for larger screens */}
                        <div className="h-full fixed z-50" >
                            <Sidebar  setIsSidebarOpen={setIsSidebarOpen} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen } />
                        </div>

                        <div className="w-full">
                          
                          
                                <div className={`h-screen overflow-y-scroll bg-white p-3 px-4 ${isSidebarOpen ? 'ml-0 md:ml-48 lg:ml-48 xl:ml-48 2xl:ml-48' : ''}`}>
                                    {children}
                                </div>
                       
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}
