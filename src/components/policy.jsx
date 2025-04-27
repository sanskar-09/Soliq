import React from 'react';
import Footer from './Footer';

function Policy() {
  return (
    <><div className="flex justify-center">
      <div className="flex flex-col max-w-4xl w-full ml-[-100px]">
        <h1 className="text-4xl font-semibold mb-6">Privacy Policy</h1>
        <p className="mb-8">
          "Your privacy matters to us. We at SOLIQ are dedicated to safeguarding your personal information and providing a secure and safe experience while using <br /> our services. This privacy policy describes how we collect, use, and protect your information."
        </p>

        <h2 className="text-3xl font-normal mb-4">Information We Collect :</h2>
        <ul className="list-disc list-inside mb-8">
          <li>Personal Information: When you register for SOLIQ, we gather personal information like your name, email address, and phone number.</li>
          <li>Usage Data: We can collect data regarding your interaction with our services, which includes IP addresses, device types, and usage patterns.</li>
          <li>Payment Information: Where applicable, we can collect payment information through secure payment gateways.</li>
        </ul>

        <h2 className="text-3xl font-normal mb-4">How We Use Your Information :</h2>
        <ul className="list-disc list-inside mb-8">
          <li>To offer and develop our services.</li>
          <li>To get in touch with you about updates, offers, or customer support.</li>
          <li>For research and analytics to improve the functionality of our platform.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-2">Third-Party Services:</h3>
        <p className="mb-8">We may employ third-party services (e.g., payment processing companies) to help with particular aspects of our site. These third parties will have access to only required data to perform those particular functions and are subject to confidentiality agreements.</p>

        <h3 className="text-2xl font-semibold mt-8 mb-2">Cookies and Tracking Technologies:</h3>
        <p className="mb-8">We employ cookies to enhance your experience and collect analytics. You can control cookie settings through your browser.</p>

        <h3 className="text-2xl font-semibold mt-8 mb-2">Your Rights:</h3>
        <p className="mb-8">You are entitled to access, edit, or delete your personal data at any time. To ask for a copy of your data or to make alterations, please get in touch with us.</p>

        <h3 className="text-2xl font-semibold mt-8 mb-2">Children's Privacy:</h3>
        <p className="mb-8">Our services are not designed for users under 13 years of age. We do not intentionally collect personal information from children.</p>

        <h3 className="text-2xl font-semibold mt-8 mb-2">Privacy Policy Changes:</h3>
        <p className="mb-8">We may modify this privacy policy from time to time. Changes will be published on this page with a new revision date.</p>
      </div>

    </div>
      <Footer /></>


  );
}

export default Policy;
