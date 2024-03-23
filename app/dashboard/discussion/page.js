
"use client" // Assuming this is a special comment for your project, specifying client-side usage
import { initAOS } from '@/utils/aos-init'; // Importing the AOS (Animate on Scroll) initialization function
import DiscussionForumCard from '@/components/Dashboard/DiscussionForumCard/DiscussionForumCard'; // Importing the DiscussionForumCard component
import MarketStoriesCard from '@/components/Dashboard/MarketStoriesCard/MarketStoriesCard'; // Importing the MarketStoriesCard component
import React, { useState, useEffect } from 'react'; // Importing React, useState, and useEffect hooks

// Defining the DiscussionPage component
const DiscussionPage = () => {
    // State variables for selected option and screen size
    const [selectedOption, setSelectedOption] = useState(null); // State for the selected option
    const [isSmallScreen, setIsSmallScreen] = useState(false); // State for detecting small screen sizes

    // useEffect hook for handling window resize
    useEffect(() => {
        // Function to handle resize
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768); // Adjust the threshold according to your screen size
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize); // Event listener for resize

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // useEffect hook for setting default selected option on small screens
    useEffect(() => {
        if (isSmallScreen && !selectedOption) {
            setSelectedOption('DiscussionForum'); // Set default selected option to 'DiscussionForum' on small screens
        }
    }, [isSmallScreen, selectedOption]);

    // useEffect hook for initializing AOS on component mount
    useEffect(() => {
        initAOS(); // Calling the AOS initialization function
    }, []);

    // Rendering the component
    return (
        <div data-aos="fade-down" className='h-screen'>
            {/* Large screen layout */}
            <div className='hidden md:grid lg:grid xl:grid 2xl:grid gap-4 grid-cols-9'>
                {/* Discussion Forum section */}
                <div className='col-span-6 text-center'>
                    <p className='bg-slate-200 font-semibold text-red-400'>Discussion Forum</p>
                    <DiscussionForumCard />
                </div>
                {/* Market Stories section */}
                <div className='col-span-3'>
                    <p className='text-center bg-slate-200 font-semibold text-red-400'>Market Stories</p>
                    <div className="flex flex-col gap-4">
                        <MarketStoriesCard />
                    </div>
                </div>
            </div>

            {/* Small screen layout */}
            {isSmallScreen && (
                <div className='flex bg-slate-700'>
                    {/* Discussion Forum option */}
                    <div
                        className={`flex-1 block py-2 text-center text-xs text-white cursor-pointer ${selectedOption === 'DiscussionForum' && 'bg-[#2e374a] border-b border-red-500'} ${selectedOption === 'DiscussionForum' && 'md:bg-transparent lg:bg-transparent'}`}
                        onClick={() => setSelectedOption('DiscussionForum')}
                    >
                        Discussion Forum
                    </div>
                    {/* Market Stories option */}
                    <div
                        className={`flex-1 block md:hidden lg:hidden py-2 text-xs text-center text-white cursor-pointer ${selectedOption === 'MarketStories' && 'bg-[#2e374a] border-b border-red-500'}`}
                        onClick={() => setSelectedOption('MarketStories')}
                    >
                        Market Stories
                    </div>
                </div>
            )}

            {/* Render selected option content */}
            {selectedOption === 'DiscussionForum' && <DiscussionForumCard />}
            {selectedOption === 'MarketStories' && <div className="grid grid-cols-1 lg:grid-cols-3 gap-4"><MarketStoriesCard /></div>}
        </div>
    );
};

export default DiscussionPage; // Exporting the DiscussionPage component
