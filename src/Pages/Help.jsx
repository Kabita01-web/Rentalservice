import React from 'react'
import { Home, Building2, CreditCard, HelpCircle, Mail, Clock, Globe } from 'lucide-react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function Help() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <NavBar />
      <div className="max-w-4xl mx-auto px-6 py-12 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="bg-white rounded-xl mt-10  shadow-sm p-8 mb-8 border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Help & Support
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            We're here to make your property search and rental experience as easy as possible
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
              Last Updated: October 14, 2025
            </div>
            
          </div>
        </div>

        {/* Quick Contact Card */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Need Quick Help?</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3" />
              <a href="mailto:support@gharbhada.com" className="hover:underline font-medium">
                support@gharbhada.com
              </a>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-3" />
              <span>Sunday – Friday, 9:00 AM to 6:00 PM</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-3" />
              <span>www.gharbhada.com</span>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-6">
          {/* For Renters Section */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                For Renters
              </h3>
            </div>
            <p className="text-gray-600 mb-4 italic">
              People looking for rooms or apartments
            </p>
            
            <div className="space-y-4">
              <p className="text-gray-700 font-medium">If you are searching for a place to stay:</p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                    1
                  </span>
                  <p className="text-gray-700">
                    Use the search bar to find rooms or apartments by location, budget, or type.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                    2
                  </span>
                  <p className="text-gray-700">
                    Click on a listing to view photos, rent amount, and contact details.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                    3
                  </span>
                  <p className="text-gray-700">
                    Contact the property owner directly through the provided phone or email.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                    4
                  </span>
                  <p className="text-gray-700">
                    Always visit the property and confirm details before making any payments.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-800">
                  <strong>Need help finding the right place?</strong> 👉 Email us at{" "}
                  <a href="mailto:support@gharbhada.com" className="text-blue-600 hover:text-blue-800 underline font-medium">
                    support@gharbhada.com
                  </a>, and we'll guide you.
                </p>
              </div>
            </div>
          </div>

          {/* For Property Owners Section */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                For Property Owners
              </h3>
            </div>
            <p className="text-gray-600 mb-4 italic">
              People listing rooms or apartments
            </p>
            
            <div className="space-y-4">
              <p className="text-gray-700 font-medium">If you want to list your property for rent:</p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                    1
                  </span>
                  <p className="text-gray-700">
                    Create a free account on GharBhada.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                    2
                  </span>
                  <p className="text-gray-700">
                    Click "Add Property" and fill in all the details — price, location, photos, and contact info.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                    3
                  </span>
                  <p className="text-gray-700">
                    Make sure your information is accurate and clear.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                    4
                  </span>
                  <p className="text-gray-700">
                    Your listing will appear after quick verification.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-800">
                  <strong>Having trouble uploading your property?</strong> 👉 Contact us at{" "}
                  <a href="mailto:support@gharbhada.com" className="text-blue-600 hover:text-blue-800 underline font-medium">
                    support@gharbhada.com
                  </a>{" "}
                  and we'll help you fix it.
                </p>
              </div>
            </div>
          </div>

          {/* Payments Section */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <CreditCard className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Payments and Technical Support
              </h3>
            </div>
            
            <p className="text-gray-700 mb-4">
              If you're using GharBhada's online payment system:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <span className="text-purple-500 mr-3 mt-1">•</span>
                <span>
                  Make sure you're using secure and verified payment options (eSewa, Khalti, or bank transfer).
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-purple-500 mr-3 mt-1">•</span>
                <span>
                  Keep a screenshot or transaction ID for your records.
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-purple-500 mr-3 mt-1">•</span>
                <span>
                  If your payment fails or gets deducted twice, send the transaction ID and date to our support team.
                </span>
              </li>
            </ul>

            <div className="mt-6 bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
              <p className="text-gray-800">
                We'll review your issue and respond within <strong>2–3 working days</strong>.
              </p>
            </div>
          </div>

          {/* Common Issues Section */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <HelpCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Common Issues
              </h3>
            </div>
            
            <div className="space-y-5">
              <div className="border-l-4 border-orange-400 pl-4 py-2">
                <p className="font-bold text-gray-900 mb-2">
                  Q1. I can't log in to my account.
                </p>
                <p className="text-gray-700">
                  → Try resetting your password or checking your email login.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-400 pl-4 py-2">
                <p className="font-bold text-gray-900 mb-2">
                  Q2. My listing isn't showing.
                </p>
                <p className="text-gray-700">
                  → It may be under review — this usually takes up to 24 hours.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-400 pl-4 py-2">
                <p className="font-bold text-gray-900 mb-2">
                  Q3. How can I delete my account or listing?
                </p>
                <p className="text-gray-700">
                  → Go to your profile → "My Listings" → "Delete Listing" or contact support.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-400 pl-4 py-2">
                <p className="font-bold text-gray-900 mb-2">
                  Q4. I found fake or misleading information.
                </p>
                <p className="text-gray-700">
                  → Please report it immediately to{" "}
                  <a href="mailto:support@gharbhada.com" className="text-orange-600 hover:text-orange-800 underline font-medium">
                    support@gharbhada.com
                  </a>{" "}
                  so our team can review and remove it.
                </p>
              </div>
            </div>
          </div>

          {/* We're Here to Help Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-3xl font-bold mb-4 flex items-center">
              🤝 We're Here to Help
            </h3>
            <p className="text-lg mb-6 text-purple-100">
              Our friendly support team is always ready to assist you.
            </p>
            
            <div className="space-y-4 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:support@gharbhada.com" className="hover:underline">
                    support@gharbhada.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Support Hours</p>
                  <p>Sunday – Friday, 9:00 AM to 6:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Globe className="w-6 h-6 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Website</p>
                  <p>www.gharbhada.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>© 2025 Ghar Bhada. All rights reserved.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Help
