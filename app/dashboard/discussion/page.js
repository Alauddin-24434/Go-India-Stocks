"use client"
import DiscussionForumCard from '@/components/Dashboard/DiscussionForumCard/DiscussionForumCard';
import MarketStoriesCard from '@/components/Dashboard/MarketStoriesCard/MarketStoriesCard';
import React, { useState } from 'react';

const DiscussionPage = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className='h-screen'>
            {/* large screen */}

            <div className='hidden   lg:grid gap-4   grid-cols-9'>
                <div className='col-span-6 text-center  '>
                 
                    <p className='bg-slate-200 text-red-400'>Discuttion Foroum</p>
                    <div>
                    <DiscussionForumCard />
                    </div>
                </div>
                <div className='col-span-3 '>
                    <p className='text-center bg-slate-200 text-red-400'>Market Stroies</p>
                    <div className="flex flex-col gap-y-4">
                        <MarketStoriesCard />
                    </div>
                </div>
            </div>



            <div className='flex lg:hidden  bg-slate-700'>
                <div
                    className={`flex-1 py-2 text-center text-xs  text-white cursor-pointer ${selectedOption === 'DiscussionForum' && 'bg-[#2e374a]'
                        }`}
                    onClick={() => setSelectedOption('DiscussionForum')}
                >
                    Discussion Forum
                </div>
                <div
                    className={`flex-1 py-2 text-xs text-center  text-white cursor-pointer ${selectedOption === 'MarketStories' && 'bg-[#2e374a] '
                        }`}
                    onClick={() => setSelectedOption('MarketStories')}
                >
                    Market Stories
                </div>
            </div>

            {/* Render selected option content */}
            {selectedOption === 'DiscussionForum' && <DiscussionForumCard />}
            {selectedOption === 'MarketStories' && <div className="grid grid-cols-1 lg:grid-cols-3 gap-4"><MarketStoriesCard /></div>}
        </div>
    );
};

export default DiscussionPage;