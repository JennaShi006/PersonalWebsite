import React from 'react';

function AboutPage() {
  return (
    <div className="AboutPage">
      <header className="About-header">
        <h3>Computer Science and Statistics</h3>
        <h1>Hello, my name is Haoran Shi</h1>
        <p>
          I am a 2nd year computer science and statistics student at the University of Florida that is interested in AI research and applications, creating fun projects, and dancing!
        </p>
        <p>
          This is my personal website where I share my projects, experiences, and interests. Feel free to explore and learn more about me.
        </p>
        <img src="/headshot.jpg" alt="Haoran Shi" className="headshot-image" width="300" height="450"/>
      </header>
    </div>
  );
}

export default AboutPage;