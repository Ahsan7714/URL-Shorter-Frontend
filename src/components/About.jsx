import React, { useState } from 'react';
import axios from 'axios';

const About = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/shorten', { originalUrl });
      setShortUrl(response.data.shortUrl);
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.error || 'An error occurred');
      } else {
        setError('An error occurred');
      }
    }
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Paste your video URL here"
          required
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div>
          <h2>Shortened URL:</h2>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default About;
