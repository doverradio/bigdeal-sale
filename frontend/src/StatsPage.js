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
        <div className='mt-3'>
            {stats ? (
                <div className="container m-3 p-3">
                    <div className="row">
                        <div className="col-12"> 
                            <p className='m-1 p-1'><strong>Original URL:</strong> {stats.originalUrl}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"> 
                            <p className='m-1 p-1'><strong>Shortened URL:</strong> {stats.shortenedUrl}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"> 
                            <p className='m-1 p-1'><strong>Click Count:</strong> {stats.clicks}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default StatsPage;
