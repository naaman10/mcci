import React from 'react';


const HomepageHero = ({ title, subtitle }) => (
  <div className="homepage-hero">
    <div className="homepage-hero__wrapper">
      <div className="homepage-hero__col">
        <h1 className="homepage-hero__title">{title}</h1>
        <p className="homepage-hero__subtitle">{subtitle}</p>
      </div>

    </div>
  </div>
)

export default HomepageHero;
