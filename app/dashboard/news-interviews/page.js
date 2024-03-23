
"use client" // Special comment for client-side usage
import React, { useEffect } from 'react'; // Importing React and useEffect hook
import { initAOS } from '@/utils/aos-init'; // Importing the AOS (Animate on Scroll) initialization function

// Defining the NewsPage component
const NewsPage = () => {
    // Example data for demonstration purposes
    const newsData = [
        { id: 1, headline: 'Apple announces record-breaking quarterly earnings', date: '2024-01-10', source: 'CNBC' },
        { id: 2, headline: 'Google unveils new AI-powered features for Gmail', date: '2024-01-12', source: 'TechCrunch' },
        { id: 3, headline: 'Microsoft acquires leading cybersecurity firm', date: '2024-01-14', source: 'Reuters' },
        // Add more data points as needed
    ];

    // useEffect hook to initialize AOS on component mount
    useEffect(() => {
        initAOS(); // Calling the AOS initialization function
    }, []);

    // Rendering the component
    return (
        <div data-aos="zoom-in-left" className="container mx-auto p-4"> {/* Apply AOS animation and styling */}
            <h1 className="text-3xl font-bold mb-6">Latest News</h1> {/* Heading for the section */}
            <div className="bg-white rounded-lg shadow-md p-6"> {/* Styling for the container */}
                <h2 className="text-xl font-semibold mb-4">News Headlines</h2> {/* Subheading for the news headlines */}
                <ul> {/* Unordered list for displaying news headlines */}
               {/* Mapping over the newsData array */}
                    {newsData.map(news => ( 
                        <li key={news.id} className="mb-4"> {/* List item for each news headline */}
                            <h3 className="text-lg font-semibold">{news.headline}</h3> {/* News headline */}
                            <p className="text-gray-600">{`${news.date} - ${news.source}`}</p> {/* News date and source */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NewsPage; // Exporting the NewsPage component
