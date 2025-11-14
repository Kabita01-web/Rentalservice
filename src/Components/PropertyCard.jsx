import {
  Bath,
  BedDouble,
  CarFront,
  ChevronRight,
  Heart,
  MapPin,
  Ruler,
  Wifi,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import PropertyDetails from './PropertyDetails';

function PropertyCard() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const properties = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      title: "Luxury Single Room in Bagnati",
      location: "Budhanilkantha, Kathmandu",
      bedrooms: 1,
      bathrooms: 1,
      area: 250,
      garages: 1,
      price: 8000,
      period: "month",
      wifi: true,
      shared: false
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/27059631/pexels-photo-27059631.jpeg",
      title: "Modern Shared Room in City Center",
      location: "Kamalpokhari, Kathmandu",
      bedrooms: 1,
      bathrooms: 2,
      area: 180,
      garages: 0,
      price: 5500,
      period: "month",
      wifi: true,
      shared: true
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/23325566/pexels-photo-23325566.jpeg",
      title: "Cozy Single Room with Attached Bath",
      location: "Patan Durbar Square, Lalitpur",
      bedrooms: 1,
      bathrooms: 1,
      area: 200,
      garages: 0,
      price: 7000,
      period: "month",
      wifi: true,
      shared: false
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg",
      title: "Premium Room with Mountain View",
      location: "Bhaktapur Durbar Area, Bhaktapur",
      bedrooms: 1,
      bathrooms: 1,
      area: 220,
      garages: 0,
      price: 7500,
      period: "month",
      wifi: true,
      shared: false
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/5824520/pexels-photo-5824520.jpeg",
      title: "Lakeside Shared Room",
      location: "Fewa Lake, Pokhara",
      bedrooms: 1,
      bathrooms: 2,
      area: 190,
      garages: 0,
      price: 6000,
      period: "month",
      wifi: true,
      shared: true
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/5883725/pexels-photo-5883725.jpeg",
      title: "Bachelor Room with Kitchen Access",
      location: "Biratnagar Municipality, Morang",
      bedrooms: 1,
      bathrooms: 1,
      area: 210,
      garages: 0,
      price: 5000,
      period: "month",
      wifi: false,
      shared: false
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      title: "Heritage Building Single Room",
      location: "Thamel, Kathmandu",
      bedrooms: 1,
      bathrooms: 1,
      area: 180,
      garages: 0,
      price: 8500,
      period: "month",
      wifi: true,
      shared: false
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg",
      title: "Contemporary Shared Room",
      location: "Boudha, Kathmandu",
      bedrooms: 1,
      bathrooms: 2,
      area: 170,
      garages: 0,
      price: 4800,
      period: "month",
      wifi: true,
      shared: true
    },
  ];

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseDetails = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto text-center px-4">
        <div className="mb-12">       
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            Featured Rental Rooms
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your perfect rental room from our curated selection
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 relative overflow-hidden">
                  <img
                    className="w-full h-64 md:h-full object-cover transition-transform duration-500 hover:scale-105"
                    src={property.image}
                    alt={property.title}
                  />
                  <div className="absolute top-4 right-4">
                    <button
                      aria-label="Save property"
                      className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full text-gray-700 hover:text-red-500 hover:bg-white transition-all shadow-lg"
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-600 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                      For Rent
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {property.wifi && (
                      <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Wifi className="w-3 h-3" />
                        WiFi
                      </span>
                    )}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                      property.shared 
                        ? "bg-orange-500 text-white" 
                        : "bg-purple-500 text-white"
                    }`}>
                      <Users className="w-3 h-3" />
                      {property.shared ? "Shared" : "Single"}
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 text-left mb-3 hover:text-rose-600 transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-5">
                      <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0 text-rose-500" />
                      <span>{property.location}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                        <BedDouble className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm text-gray-700 font-medium">{property.bedrooms} Room</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                        <Bath className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm text-gray-700 font-medium">{property.bathrooms} {property.bathrooms > 1 ? 'Baths' : 'Bath'}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                        <Ruler className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm text-gray-700 font-medium">{property.area.toLocaleString()} sq ft</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                        <CarFront className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm text-gray-700 font-medium">{property.garages} {property.garages > 1 ? 'Parking' : 'Parking'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <div className="flex flex-col gap-2 items-center">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Monthly Rent</p>
                        <h4 className="text-2xl font-bold text-rose-500">
                          Rs. {property.price.toLocaleString()}
                          <span className="text-sm font-normal text-gray-500 ml-1">/ {property.period}</span>
                        </h4>
                      </div>
                      <button 
                        onClick={() => handleViewDetails(property)}
                        className="bg-rose-500 text-white px-5 py-2.5 rounded-lg hover:bg-rose-700 transition-colors font-medium text-sm shadow-md hover:shadow-lg cursor-pointer"
                      >
                        View Room Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="group flex justify-center items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-600 to-red-600 text-white rounded-full hover:from-rose-700 hover:to-red-700 transition-all shadow-lg hover:shadow-xl font-semibold">
            Explore All Rental Rooms
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <PropertyDetails 
          property={selectedProperty} 
          onClose={handleCloseDetails} 
        />
      )}
    </div>
  );
}

export default PropertyCard;