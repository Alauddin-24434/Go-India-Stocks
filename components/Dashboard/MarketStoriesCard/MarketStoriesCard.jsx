import React, { useEffect } from 'react';

const MarketStoriesCard = () => {
     // Initialize AOS when the component mounts
  
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
    




    return (
        <div >
            { marketStoriesData?.map(item => (
                <div key={item._id} className="bg-white p-4 border my-2 rounded shadow-md">
                  
                    <img src={item.image} alt={item.title} className="w-full h-44 mb-2" />
                      <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                    <p className="text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default MarketStoriesCard;
