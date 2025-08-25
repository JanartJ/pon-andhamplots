import React from "react";
import { Container } from "react-bootstrap";

export default function PrivacyPolicy() {
  return (
    <div>
      <Container>
        <br></br>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#335731",
            fontWeight:600
          }}
        >
          Privacy Policy
        </h2>

        <p>
          At <strong>Anadham Plots</strong>, we value your privacy and are
          committed to protecting your personal information. This policy
          outlines how we collect, use, and safeguard the information you
          provide to us.
        </p>

        <h4 style={{ marginTop: "20px", color: "#335731" }}>
          1. Information We Collect
        </h4>
        <p>We collect personal information when you:</p>
        <ul>
          <li>Fill out forms on our website</li>
          <li>Subscribe to our mailing list</li>
          <li>Interact with us through customer support</li>
        </ul>
        <p>
          This may include your name, email, phone number, and other relevant
          details.
        </p>

        <h4 style={{ marginTop: "20px", color: "#335731" }}>
          2. How We Use Your Information
        </h4>
        <ul>
          <li>To provide and improve our services</li>
          <li>To communicate updates, offers, or important notifications</li>
          <li>To respond to inquiries and provide customer support</li>
        </ul>

        <h4 style={{ marginTop: "20px", color: "#335731" }}>
          3. Data Security
        </h4>
        <p>
          We take appropriate security measures to protect your personal
          information from unauthorized access, alteration, disclosure, or
          destruction.
        </p>

        <h4 style={{ marginTop: "20px", color: "#335731" }}>
          4. Third-Party Disclosure
        </h4>
        <p>
          We do not sell, trade, or share your personal information with third
          parties except when required by law or to deliver services (e.g.,
          courier partners).
        </p>

        <h4 style={{ marginTop: "20px", color: "#335731" }}>5. Cookies</h4>
        <p>
          Our website may use cookies to enhance your browsing experience. You
          can disable cookies in your browser settings if you prefer.
        </p>

        <h4 style={{ marginTop: "20px", color: "#335731" }}>
          6. Updates to this Policy
        </h4>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the updated date.
        </p>

        <h4 style={{ marginTop: "20px", color: "#335731" }}>7. Contact Us</h4>
        <p>
          If you have questions regarding this policy, you can contact us at:{" "}
          <br />
          <strong>Email:</strong> sales@anadhamplots.com
        </p>

        <p
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontSize: "14px",
            color: "#777"
          }}
        >
          © {new Date().getFullYear()} Anadham Plots. All rights reserved.
        </p>
      </Container>
    </div>
  );
}
