import React from 'react';

const StockSentimentList = ({ data }) => {
    return (
        <ul className="list-disc">
            {data.map((sentiment, index) => (
                <li key={index}>
                    <div>
                        <strong>{sentiment.stockName}</strong>
                    </div>
                    <div>Sentiment: {sentiment.sentiment}</div>
                    <div>Score: {sentiment.score}</div>
                    <div>Date: {sentiment.date}</div>
                </li>
            ))}
        </ul>
    );
};

export default StockSentimentList;
