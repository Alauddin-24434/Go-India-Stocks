import React from 'react';

const MarketStoriesCard = () => {
    const data = [
        {
            _id: 1,
            title: "The Coldest Sunset",
            image: 'https://i.ibb.co/JdNCZ7B/the-coldest-sunset.jpg',
            desc: 'Description 1'
        },
        {
            _id: 2,
            title: "The Warmest Sunrise",
            image: 'https://i.ibb.co/wds3YzN/The-Warmest-Sunrise.jpg',
            desc: 'Description 2'
        },
        {
            _id: 3,
            title: "Into the Wilderness",
            image: 'https://i.ibb.co/k9XP4gJ/Into-the-Wilderness.jpg',
            desc: 'Description 3'
        },
        {
            _id: 4,
            title: "Under the Moonlight",
            image: 'https://i.ibb.co/bFqQL4s/Under-the-Moonlight.jpg',
            desc: 'Description 4'
        },
        {
            _id: 5,
            title: "Exploring the Unknown",
            image: 'https://i.ibb.co/F8r6zNw/Exploring-the-Unknown.jpg',
            desc: 'Description 5'
        },
        {
            _id: 6,
            title: "The Enchanted Forest",
            image: 'https://i.ibb.co/m4yzNZ3/The-Enchanted-Forest.jpg',
            desc: 'Description 6'
        },
        {
            _id: 7,
            title: "Mystical Waters",
            image: 'https://i.ibb.co/6PDYFC9/Mystical-Waters.jpg',
            desc: 'Description 7'
        },
        {
            _id: 8,
            title: "A Journey to Remember",
            image: 'https://i.ibb.co/YWyZhN7/A-Journey-to-Remember.jpg',
            desc: 'Description 8'
        },
     
        {
            _id: 9,
            title: "Beyond the Horizon",
            image: 'https://i.ibb.co/QPRW2sp/Beyond-the-Horizon.jpg',
            desc: 'Description 10'
        }
    ];
   




    return (
        <div >
            {data.map(item => (
                <div key={item._id} className="bg-white p-4 rounded shadow-md">
                  
                    <img src={item.image} alt={item.title} className="w-full h-44 mb-2" />
                      <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                    <p className="text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default MarketStoriesCard;
