import React from 'react';

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src="services_hero.jpg" alt="Services" className="hero-image" />
        <h1 className="hero-title">Our Services</h1>
        <h2>Support your pet's Whole Health with personalized service offerings</h2>
        <p>We offer a variety of premium pet services right inside most stores that are designed to save you time, money and stress.</p>
      </section>

      {/* Services Cards Section */}
      <section className="services-cards">
        <div className="service-card">
          <img src="grooming.jpg" alt="Pet Grooming" className="service-image" />
          <p>Pet Grooming</p>
        </div>
        <div className="service-card">
          <img src="training.jpg" alt="Pet Training" className="service-image" />
          <p>Pet Training</p>
        </div>
        <div className="service-card">
          <img src="vet_services.jpg" alt="Vet Services" className="service-image" />
          <p>Vet Services</p>
        </div>
        <div className="service-card">
          <img src="adoption.jpg" alt="Adoption" className="service-image" />
          <p>Adoption</p>
        </div>
        <div className="service-card">
          <img src="reptile_park.jpg" alt="Self-Serve Reptile Park" className="service-image" />
          <p>Self-Serve Reptile Park</p>
        </div>
        <div className="service-card">
          <img src="insurance.jpg" alt="Pet Insurance" className="service-image" />
          <p>Pet Insurance</p>
        </div>
        <div className="service-card">
          <img src="delivery.jpg" alt="Delivery" className="service-image" />
          <p>Delivery</p>
        </div>
        <div className="service-card">
          <img src="credit_cards.jpg" alt="Credit Cards" className="service-image" />
          <p>Credit Cards</p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
