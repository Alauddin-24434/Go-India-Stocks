"use client"
import React, { useEffect } from 'react';
import { initAOS } from '@/utils/aos-init';
const WatchlistPage = () => {
    // Example data for demonstration purposes
    const watchlistData = [
        { id: 1, companyName: 'Apple Inc.', symbol: 'AAPL', price: 150.25, change: 2.35, percentChange: 1.58 },
        { id: 2, companyName: 'Google LLC', symbol: 'GOOGL', price: 2850.75, change: -15.5, percentChange: -0.54 },
        { id: 3, companyName: 'Microsoft Corporation', symbol: 'MSFT', price: 305.40, change: 1.75, percentChange: 0.58 },
        // Add more data points as needed
    ];
    useEffect(() => {
        initAOS();
    }, []);
    return (
        <div data-aos="zoom-in-right" className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">My Watchlist</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Watchlist Data</h2>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Company Name</th>
                            <th className="px-4 py-2">Symbol</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Change</th>
                            <th className="px-4 py-2">% Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {watchlistData.map(item => (
                            <tr key={item.id}>
                                <td className="border px-4 py-2">{item.companyName}</td>
                                <td className="border px-4 py-2">{item.symbol}</td>
                                <td className="border px-4 py-2">{item.price}</td>
                                <td className={`border px-4 py-2 ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>{item.change}</td>
                                <td className={`border px-4 py-2 ${item.percentChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>{item.percentChange}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WatchlistPage;
