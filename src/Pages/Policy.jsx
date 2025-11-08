import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function Policy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <NavBar />
      
      <div className="max-w-4xl mx-auto px-6 py-12 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="bg-white rounded-xl mt-10 shadow-sm p-8 mb-8 border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            How We Protect Your Information
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-green-50 text-blue-700 rounded-lg text-sm font-medium">
            Last Updated: October 14, 2025
          </div>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At GharBhada, your privacy is very important to us. This Privacy
            Policy explains how we collect, use, and protect your information
            when you use our website and services. By using this site, you agree
            to the terms of this policy. Please read it carefully.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                1
              </span>
              Information We Collect
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We may collect the following details when you use our website:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  Your name, email address, and contact number when you register
                  or post a listing.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  Property details such as address, rent amount, and property
                  photos.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  Payment details such as transaction IDs, payment method (e.g.,
                  eSewa, Khalti), and amount paid.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  We do not store or access your full banking or card
                  information. All payments are handled through trusted
                  third-party gateways.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                2
              </span>
              How We Use Your Information
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We use your information to:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>Create and manage your account.</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  Show your property listings or help you find available rentals.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>Communicate with you for updates or support.</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>Improve our website's features and services.</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  Process payments, confirm transactions, and send payment
                  receipts.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>Prevent fraud or misuse during online payments.</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                3
              </span>
              Information Sharing
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We do not sell or rent your personal information to third parties.
              We may share your information with:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  <strong>Payment processors</strong> like eSewa and Khalti to
                  complete transactions securely.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  <strong>Legal authorities</strong> when required by law or
                  government regulations.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  <strong>Service providers</strong> to fix technical issues or
                  protect website users from fraud or abuse.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  <strong>With your consent</strong> or at your direction.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                4
              </span>
              Your Control and Rights
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              You have the right to:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>Update or delete your account information.</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>Request removal of your property listing.</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>Contact us anytime if you feel your data is being misused.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Just send us an email at{" "}
              <a
                href="mailto:support@gharbhada.com"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                support@gharbhada.com
              </a>{" "}
              and we'll assist you quickly.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                5
              </span>
              Data Security
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We take reasonable steps to protect your information from loss,
                misuse, or unauthorized access. However, please note that no
                online platform is completely risk-free, so always be cautious
                while sharing personal details.
              </p>
              <p className="text-gray-700 leading-relaxed">
                All payment transactions are processed through secure third-party
                gateways that use encryption and comply with Nepal's financial
                data protection standards.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                6
              </span>
              External Links
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our website may include links to other sites. We are not
              responsible for the privacy practices or content of those
              third-party websites. Please review their policies separately.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                7
              </span>
              Updates to This Policy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy as our website grows. When we do,
              we'll post the updated version here with a new "Last Updated" date.
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                8
              </span>
              Contact Us
            </h3>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:{" "}
              <a
                href="mailto:support@gharbhada.com"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                support@gharbhada.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>© 2025 Ghar Bhada. All rights reserved.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Policy;