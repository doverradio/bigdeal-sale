// StatsPage.js
import React, { useState, useEffect } from 'react';

function StatsPage(props) {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            const response = await fetch(`/api/stats/${props.match.params.urlCode}`);
            const data = await response.json();
            setStats(data);
        };

        fetchStats();
    }, [props.match.params.urlCode]);

    return (
        <div>
            {stats ? (
                <div>
                    <p><strong>Original URL:</strong> {stats.originalUrl}</p>
                    <p><strong>Shortened URL:</strong> {stats.shortenedUrl}</p>
                    <p><strong>Click Count:</strong> {stats.clicks}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default StatsPage;
