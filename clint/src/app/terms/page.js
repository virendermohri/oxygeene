// app/terms/page.tsx or pages/terms.js

import React from 'react';

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 ">Terms of Service</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to CareKwik. By accessing or using our website and services, you agree to be bound by these Terms of Service.
          If you do not agree with these terms, please do not use our platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Services</h2>
        <p>
          CareKwik connects users with healthcare service providers, including caretakers, doctors, and medical equipment suppliers.
          We act solely as a facilitator and are not responsible for the quality or outcome of third-party services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
        <p>
          You agree to provide accurate information during registration or booking. You are responsible for maintaining the confidentiality
          of your account and for all activities that occur under your account.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Payments & Bookings</h2>
        <p>
          All payments made via CareKwik are subject to our pricing and refund policies. Bookings are only confirmed once payment is received,
          and you will receive confirmation via email or WhatsApp.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Cancellations & Refunds</h2>
        <p>
          Cancellation policies may vary depending on the service provider. Please review the cancellation terms before booking. Refunds,
          if applicable, will be processed according to our refund guidelines.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
        <p>
          CareKwik is not liable for any injuries, losses, or damages resulting from services provided by third-party professionals.
          All services are availed at your own risk.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Intellectual Property</h2>
        <p>
          All content, logos, and branding used on this website are the property of CareKwik and may not be used without prior written consent.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Changes to These Terms</h2>
        <p>
          We reserve the right to update these Terms of Service at any time. Continued use of our platform after changes are made constitutes
          acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding these Terms, please contact us at <strong>getcarekwik@gmail.com</strong>.
        </p>
      </section>
    </div>
  );
};

export default TermsPage;
