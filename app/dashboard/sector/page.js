import React from 'react';

const SectorPage = () => {
    // Example data for demonstration purposes
    const sectorData = [
        { id: 1, sectorName: 'Technology', companies: ['AAPL', 'GOOGL', 'MSFT'] },
        { id: 2, sectorName: 'Finance', companies: ['JPM', 'BAC', 'WFC'] },
        { id: 3, sectorName: 'Healthcare', companies: ['PFE', 'MRK', 'JNJ'] },
        // Add more data points as needed
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Sector Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectorData.map(sector => (
                    <div key={sector.id} className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">{sector.sectorName}</h2>
                        <ul>
                            {sector.companies.map(company => (
                                <li key={company} className="mb-2">{company}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectorPage;
