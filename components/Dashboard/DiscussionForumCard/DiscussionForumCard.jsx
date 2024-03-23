import React from 'react';
import { FaRegHeart, FaRegEye, FaRegComment, FaShareAlt } from 'react-icons/fa';


const DiscussionForumCard = () => {
    const dummyPosts = [
        {
            id: 3,
            userName: "Emily Johnson",
            userPhoto: "https://randomuser.me/api/portraits/women/2.jpg",
            postText: "Spent the day exploring ancient ruins and uncovering secrets of the past. History is truly fascinating!",
            sectorNumber: 4,
            postTime: 6,
        },
        {
            id: 4,
            userName: "Michael Brown",
            userPhoto: "https://randomuser.me/api/portraits/men/2.jpg",
            postText: "Attended an inspiring workshop on sustainable living today. Feeling motivated to make positive changes!",
            sectorNumber: 1,
            postTime: 10,
        },
        {
            id: 5,
            userName: "Emma Wilson",
            userPhoto: "https://randomuser.me/api/portraits/women/3.jpg",
            postText: "Visited a local art gallery and was blown away by the creativity and talent on display. Art truly speaks to the soul.",
            sectorNumber: 6,
            postTime: 4,
        },
        {
            id: 6,
            userName: "William Taylor",
            userPhoto: "https://randomuser.me/api/portraits/men/3.jpg",
            postText: "Started a new book today and couldn't put it down. There's something magical about getting lost in a good story.",
            sectorNumber: 5,
            postTime: 12,
        },
        {
            id: 7,
            userName: "Sophia Martinez",
            userPhoto: "https://randomuser.me/api/portraits/women/4.jpg",
            postText: "Spent the afternoon volunteering at a local shelter. It's heartwarming to make a difference in someone's life.",
            sectorNumber: 2,
            postTime: 5,
        },
        {
            id: 8,
            userName: "Ethan Anderson",
            userPhoto: "https://randomuser.me/api/portraits/men/4.jpg",
            postText: "Took a spontaneous road trip with friends and created unforgettable memories along the way. Life is an adventure!",
            sectorNumber: 3,
            postTime: 9,
        },
        {
            id: 9,
            userName: "Olivia Garcia",
            userPhoto: "https://randomuser.me/api/portraits/women/5.jpg",
            postText: "Reflecting on the beauty of nature and feeling grateful for the simple joys it brings. Sometimes, it's the little things that matter most.",
            sectorNumber: 4,
            postTime: 3,
        },
        {
            id: 10,
            userName: "James Rodriguez",
            userPhoto: "https://randomuser.me/api/portraits/men/5.jpg",
            postText: "Attended an outdoor concert last night and danced under the stars. Music has a way of bringing people together.",
            sectorNumber: 1,
            postTime: 7,
        },
        {
            id: 11,
            userName: "Ava Hernandez",
            userPhoto: "https://randomuser.me/api/portraits/women/6.jpg",
            postText: "Cooked a delicious meal from scratch today and shared it with loved ones. Food always tastes better when it's made with love.",
            sectorNumber: 5,
            postTime: 11,
        },
    ];
    


    return (
        <div className='flex flex-col'>
        {dummyPosts.map(post => (
            <div className='grid relative grid-cols-8 gap-2 my-4 shadow-xl border py-3' key={post.id}>
                <div className='col-span-1 flex justify-center'>
                  
                    <img
                        className='w-8 lg:w-12 h-8 lg:h-12 rounded-full'
                        src={post.userPhoto ? post.userPhoto : 'https://i.ibb.co/wYyMv1k/3d-illustration-person-with-sunglasses-23-2149436188.jpg'}
                        alt="User"
                    />
                </div>
                <div className='col-span-6 flex flex-col'>
                    <div className='flex text-xs md:text-base lg:text-base xl:text-base  items-center gap-4'>
                        <p>{post.userName}</p>
                        <p className='bg-blue-600 rounded-2xl px-4'>Sector {post.sectorNumber}</p>
                    </div>
                    <p className='max-h-auto my-2 ml-0 text-xs md:text-base lg:text-base xl:text-base lg:min-h-20' style={{ textAlign: 'justify', textAlignLast: 'left' }}>{post.postText}</p>

                    <div className='flex items-center mt-2 text-xs md:text-base lg:text-base xl:text-base  justify-between'>
                        <div className='flex items-center gap-1 md:gap-2 lg:gap-2 hover:text-red-500 cursor-pointer'>
                            <FaRegHeart />
                            <span>2k</span>
                        </div>
                        <div className='flex items-center gap-1 md:gap-2 lg:gap-2 hover:text-red-500 cursor-pointer'>
                            <FaRegEye />
                            <span>2k</span>
                        </div>
                        <div className='flex items-center gap-1 md:gap-2 lg:gap-2 hover:text-red-500 cursor-pointer'>
                            <FaRegComment />2k
                            <span className='hidden md:block lg:block'>Comments</span>
                        </div>
                        <div className='flex items-center gap-1 md:gap-2 lg:gap-2 hover:text-red-500 cursor-pointer'>
                            <FaShareAlt />
                            <span>Share</span>
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <p className='flex text-xs   items-center'>
                        <time dateTime={post.postTime}>{post.postTime} min ago</time>
                    </p>
                </div>
            </div>
        ))}
    </div>

    );
};

export default DiscussionForumCard;
