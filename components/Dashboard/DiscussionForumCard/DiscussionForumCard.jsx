import React from 'react';
import { FaRegHeart, FaRegEye, FaRegComment, FaShareAlt } from 'react-icons/fa';


const DiscussionForumCard = () => {
    const dummyPosts = [
        {
            id: 1,
            userName: "John Doe",
            userPhoto: "https://randomuser.me/api/portraits/men/1.jpg",
            postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ligula sit amet ante consequat lacinia.",
            sectorNumber: 3,
            postTime: 8,

        },
        {
            id: 2,
            userName: "Alice Smith",
            userPhoto: "https://randomuser.me/api/portraits/women/1.jpg",
            postText: "Sed efficitur, mauris ac gravida viverra, elit dui lobortis odio, nec pretium nunc turpis a nisi.",
            sectorNumber: 2,
            postTime: 2,

        },
        // Add more dummy posts as needed
    ];



    return (
        <div className='flex flex-col'>
            {dummyPosts.map(post => (
                <div className='grid relative grid-cols-8  gap-2 border border-t ' key={post.id}>
                    <div className='mx-3 col-span-1'>
                        <img className='w-12 h-12 rounded-full' src={post.userPhoto} alt="User" />
                    </div>
                    <div className='col-span-6'>
                        <div className='flex gap-4'>
                            <p>{post.userName}</p>
                            <p className='bg-blue-600 rounded-2xl px-4'>Sector {post.sectorNumber}</p>
                        </div>
                        <p className='min-h-44'>{post.postText}</p> 
                        <div className='flex absolute bottom-2 w-full justify-between'>
                      


                      <div className='flex  items-center gap-2'>
                          <FaRegHeart />
                          <span>2k</span>
                      </div>
                      <div className='flex items-center gap-2'>
                          <FaRegEye />
                          <span>2k</span>
                      </div>
                      <div className='flex items-center gap-2'>
                          <FaRegComment />
                          <span>2k Comments</span>
                      </div> 
                       <div className='flex items-center gap-2'>
                          <FaShareAlt />
                          <span>Share</span>
                      </div>
                   </div> 
                    </div>
                    
                 <div className='col-span-1 '>
                 <p className=' flex items-center'>{post.postTime} <span>min ago</span></p>
                 </div>
                   
                </div>
            ))}
        </div>
    );
};

export default DiscussionForumCard;
