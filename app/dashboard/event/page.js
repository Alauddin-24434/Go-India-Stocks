
"use client"
import React, { useEffect } from 'react';
import { initAOS } from '@/utils/aos-init';
const EventPage = () => {
    // Example data for demonstration purposes
    const eventData = [
        { id: 1, eventName: 'Earnings Release', date: '2024-01-15', time: '14:00', description: 'Apple Inc. Q4 2023 Earnings Call' },
        { id: 2, eventName: 'Product Launch', date: '2024-02-20', time: '10:00', description: 'Google Pixel 7 Launch Event' },
        { id: 3, eventName: 'Conference', date: '2024-03-05', time: '09:30', description: 'Microsoft Build 2024 Developer Conference' },
        // Add more data points as needed
    ];
    useEffect(() => {
        initAOS();
    }, []);
    return (
        <div data-aos="zoom-in-right" className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Event Schedule</h2>
                <ul>
                    {eventData.map(event => (
                        <li key={event.id} className="mb-4">
                            <h3 className="text-lg font-semibold">{event.eventName}</h3>
                            <p className="text-gray-600">{`${event.date} at ${event.time}`}</p>
                            <p>{event.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default EventPage;
