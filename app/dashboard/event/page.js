// Importing necessary modules
"use client" // Assuming this is a special comment for your project, specifying client-side usage
import React, { useEffect } from 'react'; // Importing React and useEffect hook
import { initAOS } from '@/utils/aos-init'; // Importing the AOS (Animate on Scroll) initialization function

// Defining the EventPage component
const EventPage = () => {
    // Example data for demonstration purposes
    const eventData = [
        { id: 1, eventName: 'Earnings Release', date: '2024-01-15', time: '14:00', description: 'Apple Inc. Q4 2023 Earnings Call' },
        { id: 2, eventName: 'Product Launch', date: '2024-02-20', time: '10:00', description: 'Google Pixel 7 Launch Event' },
        { id: 3, eventName: 'Conference', date: '2024-03-05', time: '09:30', description: 'Microsoft Build 2024 Developer Conference' },
        // Add more data points as needed
    ];

    // Using useEffect hook to initialize AOS on component mount
    useEffect(() => {
        initAOS(); // Calling the AOS initialization function
    }, []);

    // Rendering the component
    return (
        <div data-aos="zoom-in-right" className="container mx-auto p-4"> {/* Applying AOS animation to the container */}
            <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1> {/* Heading for the section */}
            <div className="bg-white rounded-lg shadow-md p-6"> {/* Styling for the container */}
                <h2 className="text-xl font-semibold mb-4">Event Schedule</h2> {/* Heading for the event schedule */}
                <ul> {/* List of events */}
                {/* Mapping over the eventData array  */}
                    {eventData.map(event => ( 
                    // List item for each event 
                        <li key={event.id} className="mb-4">
                            <h3 className="text-lg font-semibold">{event.eventName}</h3> {/* Event name */}
                            <p className="text-gray-600">{`${event.date} at ${event.time}`}</p> {/* Date and time */}
                            <p>{event.description}</p> {/* Event description */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default EventPage; 
