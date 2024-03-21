"use client"
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Loading state

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };



    return (
        <html lang="en">
            <body>
                <div className=''>
                    <div className="flex">
                        {/* Sidebar for larger screens */}
                        <div className="h-full" >
                            <Sidebar setIsLoading={setIsLoading} setIsSidebarOpen={setIsSidebarOpen} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen } />
                        </div>

                        <div className="w-full">
                            {/* Toggle button for small screens */}
                           


                            {/* Main content or loader icon */}
                            {isLoading ? (
                                <div className="flex justify-center items-center h-screen">
                                    {/* Replace this with your loader icon */}
                                    <div className="loader">Loading.......</div>
                                </div>
                            ) : (
                                <div className="h-screen bg-white p-3 px-4">
                                    {children}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}
