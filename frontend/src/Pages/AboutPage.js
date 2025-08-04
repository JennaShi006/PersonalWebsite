import React from 'react';

function AboutPage() {
  return (
    <div className="AboutPage">
      <header className="About-header">
        <h1>About Us</h1>
        <p>
          This is the About Page of our application. Here you can find more information about our team and mission.
        </p>
        <a
          className="About-link"
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default AboutPage;