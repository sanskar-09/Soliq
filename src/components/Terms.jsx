import React from 'react';
import Footer from './Footer'; // Adding Footer same as Policy

function Terms() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col max-w-4xl w-full ml-[-100px]">
          <h1 className="text-4xl font-semibold mb-6">Terms & Conditions</h1>

          <p className="mb-8">
            "By accessing SOLIQ, you are accepting our Terms & Conditions. Read the document in its entirety. Your use of our services is governed by the following terms:"
          </p>

          <h2 className="text-3xl font-normal mb-4">Acceptance of Terms:</h2>
          <p className="mb-8">
            By accessing or using our website, app, or services, you are agreeing to be bound by these Terms and Conditions and our Privacy Policy.
          </p>

          <h2 className="text-3xl font-normal mb-4">Use of Services:</h2>
          <p className="mb-8">
            SOLIQ provides an AI-based solar efficiency monitoring system which is designed to assist users in maximizing the performance of their solar panels. You are solely liable for the use of our services according to relevant laws.
          </p>

          <h2 className="text-3xl font-normal mb-4">User Responsibilities:</h2>
          <p className="mb-8">
            Users are liable for ensuring the accuracy of their account details, as well as any content uploaded or shared through the platform.
          </p>

          <h2 className="text-3xl font-normal mb-4">Data Collection:</h2>
          <p className="mb-8">
            We can gather data to enhance the user experience, but all data is secured in accordance with our Privacy Policy.
          </p>

          <h2 className="text-3xl font-normal mb-4">Limitation of Liability:</h2>
          <p className="mb-8">
            SOLIQ shall not be responsible for any damages incurred through the use of the platform, whether direct or indirect, consequential or incidental.
          </p>

          <h2 className="text-3xl font-normal mb-4">Modifications:</h2>
          <p className="mb-8">
            We reserve the right to make changes, updates, or stop services at any time without giving any notice.
          </p>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Terms;
