"use client"
import React, { useEffect } from 'react';
import { initAOS } from '@/utils/aos-init';
const MarketStoriesPage = () => {
    const marketStoriesData = [
        {
            _id: 1,
            title: "The Coldest Sunset",
            image: 'https://i.ibb.co/JdNCZ7B/the-coldest-sunset.jpg',
            desc: 'A breathtaking view of the sunset over the mountains, casting a beautiful array of colors across the sky.'
        },
        {
            _id: 2,
            title: "The Warmest Sunrise",
            image: 'https://i.ibb.co/wds3YzN/The-Warmest-Sunrise.jpg',
            desc: 'As the sun rises over the horizon, it brings warmth and light to the world, signaling the start of a new day.'
        },
        {
            _id: 3,
            title: "Into the Wilderness",
            image: 'https://i.ibb.co/k9XP4gJ/Into-the-Wilderness.jpg',
            desc: 'Venture deep into the wilderness, where nature thrives in its purest form, untouched by civilization.'
        },
        {
            _id: 4,
            title: "Under the Moonlight",
            image: 'https://i.ibb.co/bFqQL4s/Under-the-Moonlight.jpg',
            desc: 'The serene glow of the moonlight illuminates the landscape, creating a tranquil and magical atmosphere.'
        },
        {
            _id: 5,
            title: "Exploring the Unknown",
            image: 'https://i.ibb.co/F8r6zNw/Exploring-the-Unknown.jpg',
            desc: 'Embark on an adventure to explore the unknown, discovering hidden treasures and secrets along the way.'
        },
        {
            _id: 6,
            title: "The Enchanted Forest",
            image: 'https://i.ibb.co/m4yzNZ3/The-Enchanted-Forest.jpg',
            desc: 'Step into the enchanted forest, where mystical creatures roam and ancient trees whisper secrets of old.'
        },
        {
            _id: 7,
            title: "Mystical Waters",
            image: 'https://i.ibb.co/6PDYFC9/Mystical-Waters.jpg',
            desc: 'Dive into the mystical waters, where legends say magical creatures dwell and dreams come to life.'
        },
        {
            _id: 8,
            title: "A Journey to Remember",
            image: 'https://i.ibb.co/YWyZhN7/A-Journey-to-Remember.jpg',
            desc: 'Embark on a journey to remember, filled with adventures, challenges, and unforgettable memories.'
        },
        {
            _id: 9,
            title: "Beyond the Horizon",
            image: 'https://i.ibb.co/QPRW2sp/Beyond-the-Horizon.jpg',
            desc: 'Explore beyond the horizon, where endless possibilities await and the unknown beckons with promise.'
        }
    ];
    // useEffect hook to initialize AOS on component mount
    useEffect(() => {
        initAOS(); // Calling the AOS initialization function
    }, []);

    // Rendering the component
    return (
        <div  data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Apply AOS animation and grid layout */}
            {/* Mapping over the marketStoriesData array */}
            { marketStoriesData?.map(item => ( 
                <div key={item._id} className="bg-white p-4 rounded shadow-md"> {/* Container for each market story */}
                    <img src={item.image} alt={item.title} className="w-full h-44 mb-2" /> {/* Image for the market story */}
                    <h2 className="text-lg font-semibold mb-2">{item.title}</h2> {/* Title for the market story */}
                    <p className="text-sm">{item.desc}</p> {/* Description for the market story */}
                </div>
            ))}
        </div>
    );
};

export default MarketStoriesPage; 