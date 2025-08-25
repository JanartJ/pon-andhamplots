import React from "react";
import "./aboutus.css"; // Import CSS file
import anandham_Logo from "../../assets/logo/Ponanandham_logo.png";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake,faLocationDot,faSquareCheck,faRocket } from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
  return (
    <Container>
    <div className="about-container">
      <br></br>
      <section className="about-header">
        <h1 className="heading-bold">About Us</h1>
        <p>
          At <strong>Anandham Plots</strong>, we believe that owning land is more than just a transaction—it’s a foundation for dreams, growth, and a secure future.
        </p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <p>
            Headquartered in the heart of Chennai at <strong>Ground Floor, 63/29, Poes Garden, Teynampet</strong>, we have proudly established ourselves as a trusted name in real estate, serving discerning customers across <strong>Padappai, Kanchipuram, and Red Hills</strong>.
          </p>
          <p>
            With a commitment to transparency, integrity, and excellence, we offer carefully curated plots that are not just investments but pathways to building your dream home or securing your legacy. 
          </p>
          <p>
            Our experienced team is dedicated to guiding you through every step of the process—from site visits and legal clearances to final registration—ensuring a seamless and hassle-free experience.
          </p>
        </div>

        <div className="about-image">
          <img
            src={anandham_Logo}
            alt="Anandham Plots"
          />
        </div>
      </section>

      <section className="about-highlights">
        <h2 className="green-text heading-bold">What sets us apart?</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <span className="emoji"><FontAwesomeIcon icon={faSquareCheck} /></span>
            <h3>Transparency & Trust</h3>
            <p>
              Clear documentation, honest pricing, and full legal approvals ensure a smooth and secure buying experience.
            </p>
          </div>

          <div className="highlight-card">
            <span className="emoji"><FontAwesomeIcon icon={faLocationDot} /></span>
            <h3>Prime Locations</h3>
            <p>
              We select plots in fast-growing areas with high appreciation potential, so your investment grows over time.
            </p>
          </div>

          <div className="highlight-card">
            <span className="emoji"><FontAwesomeIcon icon={faHandshake} /></span>
            <h3>Customer-Centric Service</h3>
            <p>
              From inquiry to registration and beyond, we provide personalized guidance and full support.
            </p>
          </div>

          <div className="highlight-card">
            <span className="emoji"><FontAwesomeIcon icon={faRocket} /></span>
            <h3>Future-Focused Vision</h3>
            <p>
              We’re not just selling plots—we’re helping you build your future, whether it’s a first home, retreat, or investment.
            </p>
          </div>
        </div>
      </section>

      <section className="about-footer">
        <p>
          At <strong>Anandham Plots</strong>, we don’t just sell land; we cultivate trust and lasting relationships. 
          <br />
          Visit us at: <a href="https://www.anandhamplots.com" target="_blank" rel="noopener noreferrer">www.anandhamplots.com</a>
        </p>
      </section>
    </div>
    </Container>
  );
}
