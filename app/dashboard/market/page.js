
"use client" // Assuming this is a special comment for your project, specifying client-side usage
import { initAOS } from '@/utils/aos-init'; // Importing the AOS (Animate on Scroll) initialization function
import React, { useEffect } from 'react'; // Importing React and useEffect hook

// Defining the MarketPage component
const MarketPage = () => {
    // Example data for demonstration purposes
    const marketData = [
        { id: 1, companyName: 'Apple Inc.', symbol: 'AAPL', price: 150.25, change: 2.35, percentChange: 1.58 },
        { id: 2, companyName: 'Google LLC', symbol: 'GOOGL', price: 2850.75, change: -15.5, percentChange: -0.54 },
        { id: 3, companyName: 'Microsoft Corporation', symbol: 'MSFT', price: 305.40, change: 1.75, percentChange: 0.58 },
        // Add more data points as needed
    ];

    // Initialize AOS when the component mounts
    useEffect(() => {
        initAOS(); // Calling the AOS initialization function
    }, []);

    // Rendering the component
    return (
        <div className="container mx-auto p-4" data-aos="fade-right"> {/* Add data-aos attribute */}
            <h1 className="text-3xl font-bold mb-6">Market Overview</h1> {/* Heading for the section */}
            <div className="bg-white rounded-lg shadow-md p-6"> {/* Styling for the container */}
                <h2 className="text-xl font-semibold mb-4">Stock Market Data</h2> {/* Heading for the market data */}
                <table className="table-auto w-full"> {/* Table for displaying market data */}
                    <thead> {/* Table header */}
                        <tr>
                            <th className="px-4 py-2">Company Name</th> {/* Table header for company name */}
                            <th className="px-4 py-2">Symbol</th> {/* Table header for company symbol */}
                            <th className="px-4 py-2">Price</th> {/* Table header for company price */}
                            <th className="px-4 py-2">Change</th> {/* Table header for price change */}
                            <th className="px-4 py-2">% Change</th> {/* Table header for percent change */}
                        </tr>
                    </thead>
                    <tbody> {/* Table body */}
                    {/* Mapping over the marketData array */}
                        {marketData.map(item => ( 
                            <tr key={item.id}> {/* Table row for each item */}
                                <td className="border px-4 py-2">{item.companyName}</td> {/* Table data for company name */}
                                <td className="border px-4 py-2">{item.symbol}</td> {/* Table data for company symbol */}
                                <td className="border px-4 py-2">{item.price}</td> {/* Table data for company price */}
                                <td className={`border px-4 py-2 ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>{item.change}</td> {/* Table data for price change */}
                                <td className={`border px-4 py-2 ${item.percentChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>{item.percentChange}%</td> {/* Table data for percent change */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MarketPage;
