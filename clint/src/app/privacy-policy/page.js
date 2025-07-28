// app/privacy/page.tsx or page.jsx
export const metadata = {
  title: "Privacy Policy | CareKwik Home Healthcare",
  description:
    "Review CareKwik’s privacy policy to understand how we handle, protect, and use your personal information when you use our home healthcare services in Chandigarh, Mohali, and Panchkula.",
};

import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 ">Privacy Policy – CareKwik Home Healthcare</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <p>
          We collect personal information such as your name, contact number, address, health-related preferences,
          and booking details when you interact with our platform. We may also gather technical data like IP addresses,
          device type, and browsing activity for analytics and security purposes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
        <p>
          The information you provide helps us deliver personalized healthcare services, confirm appointments,
          respond to inquiries, send updates, and improve your overall experience on CareKwik.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Data Protection</h2>
        <p>
          We take the protection of your data seriously. We implement secure technologies and strict procedures to safeguard your personal
          information against unauthorized access, disclosure, or loss.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data. You may also request that we restrict or stop processing
          your information, subject to applicable laws.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date.
          We encourage you to review the policy periodically.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy, please contact us at <strong>getcarekwik@gmailcom</strong>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPage;
