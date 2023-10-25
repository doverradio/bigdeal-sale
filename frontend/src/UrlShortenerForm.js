// UrlShortenerForm.js
import React, { useState } from 'react';

function UrlShortenerForm() {
    const [url, setUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            // Assuming your backend API endpoint for shortening is /api/shorten
            const response = await fetch('/api/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ originalUrl: url })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setShortenedUrl(data.shortUrl);

        } catch (error) {
            console.error("Error shortening the URL:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="d-flex">
                    <input
                        type="url"
                        className="form-control mr-2"
                        style={{ maxWidth: '50vw' }}
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        placeholder="Enter URL to shorten"
                        required
                    />
                    <button className="btn btn-secondary" type="submit">Shorten URL</button>
                </div>
            </form>

            {shortenedUrl && <p>Shortened URL: <a href={`https://${shortenedUrl}`} target='_blank' rel="noreferrer">{shortenedUrl}</a></p>}
            {shortenedUrl ? JSON.stringify(shortenedUrl) : null}
        </div>
    );
}

export default UrlShortenerForm;
