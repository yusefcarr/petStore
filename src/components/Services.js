import React from 'react';
import Services from '../Photos/services_hero.png';
import Grooming from '../Photos/services_gecko.png';
import Training from '../Photos/services_turtle.png';
import Vet from '../Photos/services_lizard.png';
import Adoption from '../Photos/services_snake.png';
import Park from '../Photos/services_park.png';
import Insurance from '../Photos/services_insurance.png';
import Delivery from '../Photos/services_delivery.png';
import Credit from '../Photos/services_credit.png';

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={Services} alt="Services" className="hero-image" />
        <h1 className="hero-title">Our Services</h1>
        {/* <p>We offer a variety of premium pet services right inside most stores that are designed to save you time, money and stress.</p> */}
      </section>

      {/* Services Cards Section */}
      <section className="services-cards">
        <div className="service-card">
          <img src={Grooming} alt="Pet Grooming" className="service-image" />
          <p>Pet Grooming</p>
        </div>
        <div className="service-card">
          <img src={Training} alt="Pet Training" className="service-image" />
          <p>Pet Training</p>
        </div>
        <div className="service-card">
          <img src={Vet} alt="Vet Services" className="service-image" />
          <p>Vet Services</p>
        </div>
        <div className="service-card">
          <img src={Adoption} alt="Adoption" className="service-image" />
          <p>Adoption</p>
        </div>
        <div className="service-card">
          <img src={Park} alt="Self-Serve Reptile Park" className="service-image" />
          <p>Self-Serve Reptile Park</p>
        </div>
        <div className="service-card">
          <img src={Insurance} alt="Pet Insurance" className="service-image" />
          <p>Pet Insurance</p>
        </div>
        <div className="service-card">
          <img src={Delivery} alt="Delivery" className="service-image" />
          <p>Delivery</p>
        </div>
        <div className="service-card">
          <img src={Credit} alt="Credit Cards" className="service-image" />
          <p>Credit Cards</p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
