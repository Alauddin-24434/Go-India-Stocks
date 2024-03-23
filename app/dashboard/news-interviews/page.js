"use client"
import React, { useEffect } from 'react';
import { initAOS } from '@/utils/aos-init';
const NewsPage = () => {
    // Example data for demonstration purposes
    const newsData = [
        { id: 1, headline: 'Apple announces record-breaking quarterly earnings', date: '2024-01-10', source: 'CNBC' },
        { id: 2, headline: 'Google unveils new AI-powered features for Gmail', date: '2024-01-12', source: 'TechCrunch' },
        { id: 3, headline: 'Microsoft acquires leading cybersecurity firm', date: '2024-01-14', source: 'Reuters' },
        // Add more data points as needed
    ];
    useEffect(() => {
        initAOS();
    }, []);
    return (
        <div data-aos="zoom-in-left" className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Latest News</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">News Headlines</h2>
                <ul>
                    {newsData.map(news => (
                        <li key={news.id} className="mb-4">
                            <h3 className="text-lg font-semibold">{news.headline}</h3>
                            <p className="text-gray-600">{`${news.date} - ${news.source}`}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NewsPage;
