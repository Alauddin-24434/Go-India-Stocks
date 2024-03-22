import React from 'react';

const SentimentPage = () => {
    // Example data for demonstration purposes
    const seminticData = [
        { date: '2024-01-01', positive: 10, negative: 5 },
        { date: '2024-01-02', positive: 12, negative: 6 },
        { date: '2024-01-03', positive: 15, negative: 8 },
        // Add more data points as needed
    ];

    const listData = [
        { id: 1, stockName: 'AAPL', sentiment: 'Positive', score: 0.75, date: '2024-01-01' },
        { id: 2, stockName: 'GOOGL', sentiment: 'Negative', score: -0.5, date: '2024-01-02' },
        { id: 3, stockName: 'MSFT', sentiment: 'Neutral', score: 0, date: '2024-01-03' },
        // Add more data as needed
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Stock Sentiment Analysis</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Sentiment Analysis Chart</h2>
                    {/* Render your chart component here */}
                    {/* You can use any chart library you prefer */}
                    <ul>
                        {seminticData.map(item => (
                            <li key={item.date} className="mb-2">
                                Date: {item.date}, Positive: {item.positive}, Negative: {item.negative}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Recent Stock Sentiments</h2>
                    {/* Render your list component here */}
                    {/* You can render your list component here */}
                    <ul>
                        {listData.map(item => (
                            <li key={item.id} className="mb-2">
                                Stock: {item.stockName}, Sentiment: {item.sentiment}, Score: {item.score}, Date: {item.date}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SentimentPage;
