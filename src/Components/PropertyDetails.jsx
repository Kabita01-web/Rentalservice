import React from 'react';
import {
  Bath,
  BedDouble,
  CarFront,
  Heart,
  MapPin,
  Ruler,
  Wifi,
  Users,
  X,
  Phone,
  MessageCircle,
  Share2,
} from "lucide-react";

const PropertyDetails = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <div className='fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50'>
      <div className='bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 w-full max-w-full sm:max-w-2xl md:max-w-4xl h-[650px] overflow-y-auto'>
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{property.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image */}
        <div className="relative mb-6 rounded-xl overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full text-gray-700 hover:text-red-500 hover:bg-white transition-all shadow-lg">
              <Heart className="w-5 h-5" />
            </button>
            <button className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full text-gray-700 hover:text-blue-500 hover:bg-white transition-all shadow-lg">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Details</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 text-indigo-600 mr-3" />
                <span>{property.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 text-indigo-600 mr-3" />
                <span>{property.shared ? "Shared Room" : "Single Room"}</span>
              </div>
              {property.wifi && (
                <div className="flex items-center text-gray-600">
                  <Wifi className="w-5 h-5 text-indigo-600 mr-3" />
                  <span>WiFi Included</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                <BedDouble className="w-4 h-4 text-indigo-600" />
                <span className="text-sm text-gray-700">{property.bedrooms} Room</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                <Bath className="w-4 h-4 text-indigo-600" />
                <span className="text-sm text-gray-700">{property.bathrooms} {property.bathrooms > 1 ? 'Baths' : 'Bath'}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                <Ruler className="w-4 h-4 text-indigo-600" />
                <span className="text-sm text-gray-700">{property.area.toLocaleString()} sq ft</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                <CarFront className="w-4 h-4 text-indigo-600" />
                <span className="text-sm text-gray-700">{property.garages} {property.garages > 1 ? 'Parkings' : 'Parking'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
          <p className="text-gray-600 leading-relaxed">
            This beautiful {property.shared ? "shared" : "single"} room located in {property.location} offers 
            {property.area} square feet of comfortable living space. Perfect for {property.shared ? "students or young professionals" : "individuals"} 
            looking for a cozy place in a great neighborhood. The property includes {property.bathrooms} 
            {property.bathrooms > 1 ? ' bathrooms' : ' bathroom'} and {property.garages} 
            {property.garages > 1 ? ' parking spaces' : ' parking space'}.
          </p>
        </div>

        {/* Price & Contact */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Monthly Rent</p>
              <h4 className="text-3xl font-bold text-rose-600">
                Rs. {property.price.toLocaleString()}
                <span className="text-base font-normal text-gray-500 ml-2">/ {property.period}</span>
              </h4>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium">
                <Phone className="w-4 h-4" />
                Call Now
              </button>
              <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                <MessageCircle className="w-4 h-4" />
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;