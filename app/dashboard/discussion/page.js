"use client"
import DiscussionForumCard from '@/components/Dashboard/DiscussionForumCard/DiscussionForumCard';
import MarketStoriesCard from '@/components/Dashboard/MarketStoriesCard/MarketStoriesCard';
import React, { useState, useEffect } from 'react';

const DiscussionPage = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768); // Adjust the threshold according to your screen size
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Set default selected option to 'DiscussionForum' on small screens
    useEffect(() => {
        if (isSmallScreen && !selectedOption) {
            setSelectedOption('DiscussionForum');
        }
    }, [isSmallScreen, selectedOption]);

    return (
        <div className='h-screen'>
            {/* Large screen layout */}
            <div className='hidden md:grid lg:grid xl:grid 2xl:grid gap-4 grid-cols-9'>
                <div className='col-span-6 text-center'>
                    <p className='bg-slate-200 font-semibold text-red-400'>Discussion Forum</p>
                    <DiscussionForumCard />
                </div>
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
                    <div
                        className={`flex-1 block py-2 text-center text-xs text-white cursor-pointer ${selectedOption === 'DiscussionForum' && 'bg-[#2e374a] border-b border-red-500'} ${selectedOption === 'DiscussionForum' && 'md:bg-transparent lg:bg-transparent'}`}
                        onClick={() => setSelectedOption('DiscussionForum')}
                    >
                        Discussion Forum
                    </div>
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

export default DiscussionPage;
