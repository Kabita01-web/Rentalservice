import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Terms() {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <NavBar />
      <div className="max-w-4xl mx-auto px-6 py-12 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-sm mt-10 p-8 mb-8 border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Rental Service Agreement
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
            Last Updated: October 14, 2025
          </div>
        </div>

        {/* Welcome Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Welcome to Ghar Bhada!
          </h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms and Conditions explain how you can use our website and
            services. By using this site, you agree to follow the terms below.
            Please read them carefully before listing or renting any property.
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
              About Ghar Bhada
            </h3>
            <p className="text-gray-700 leading-relaxed">
              GharBhada is an online platform that connects property owners who
              want to rent out rooms, houses, or apartments with people looking
              for a place to stay. We help users find and share property
              information easily — but we are not directly involved in any
              rental agreement or transaction between owners and renters.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                2
              </span>
              Who Can Use GharBhada
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  You must be <strong>18 years or older</strong> to create an
                  account or list a property.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  You must provide <strong>true and complete information</strong>{" "}
                  while registering.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  You are responsible for keeping your account safe and private.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                3
              </span>
              Listing Properties
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  Owners must post accurate details about their property
                  (location, price, facilities, etc.).
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>Fake, duplicate, or misleading listings are not allowed.</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  The owner must have the right or permission to rent out the
                  property.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  GharBhada may edit, hide, or remove any listing that breaks
                  these rules.
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
              Payments and Fees
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  GharBhada allows online payments through secure methods such as
                  eSewa, Khalti, or bank transfer.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  Users must provide accurate payment details during any transaction.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  Payment confirmations and receipts will be sent to the registered
                  email address.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  GharBhada may charge a small service fee or commission, which
                  will be shown clearly before payment.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  If any payment fails or is made to the wrong account, please
                  contact us immediately at{" "}
                  <a
                    href="mailto:support@gharbhada.com"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    support@gharbhada.com
                  </a>
                  .
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  Refunds, if applicable, will be processed according to our{" "}
                  <strong>Refund Policy</strong> (coming soon).
                </span>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                5
              </span>
              Refund Policy
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  Refunds are only issued in cases of double payment, transaction
                  failure, or verified technical error.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  Refund requests must be made within 7 working days of the
                  transaction.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  GharBhada does not guarantee refunds for disputes between owners
                  and renters.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                6
              </span>
              What You Shouldn't Do
            </h3>
            <p className="text-gray-700 mb-3">Please do not:</p>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <span className="text-red-500 mr-3 mt-1">✕</span>
                <span>Post illegal or fake information.</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-red-500 mr-3 mt-1">✕</span>
                <span>Upload inappropriate or offensive photos.</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-red-500 mr-3 mt-1">✕</span>
                <span>Try to hack or misuse the website.</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-red-500 mr-3 mt-1">✕</span>
                <span>Use GharBhada for activities against Nepali law.</span>
              </li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                7
              </span>
              Our Role and Responsibility
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>GharBhada only provides a listing and connection service.</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  We are not responsible for property conditions, payments, or any
                  disputes between owners and renters.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  Users should use their own judgment when contacting others
                  through the website.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>
                  GharBhada provides a secure platform for online payments but is
                  not responsible for disputes or losses arising from misuse,
                  fraud, or incorrect payment details entered by users.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                8
              </span>
              Your Privacy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We care about your privacy. Please read our Privacy Policy to
              understand how we collect, use, and protect your information.
            </p>
          </div>

          {/* Section 9 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                9
              </span>
              Ending Your Use of GharBhada
            </h3>
            <p className="text-gray-700 leading-relaxed">
              You can stop using GharBhada at any time by deleting your account.
              We may also suspend or delete your account if you break these
              terms.
            </p>
          </div>

          {/* Section 10 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                10
              </span>
              Changes to These Terms
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We may update these terms from time to time. We will notify you of
              any significant changes by posting a notice on our site or sending
              an email. Please review the terms regularly to stay informed.
            </p>
          </div>

          {/* Section 11 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                11
              </span>
              Contact Us
            </h3>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns about these terms, please
              contact us at:{" "}
              <a
                href="mailto:support@gharbhada.com"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                support@gharbhada.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>© 2025 Ghar Bhada. All rights reserved.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Terms;