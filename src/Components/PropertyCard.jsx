import {
  Bath,
  BedDouble,
  CarFront,
  ChevronRight,
  Heart,
  MapPin,
  Ruler,
} from "lucide-react";
import React from "react";

function PropertyCard() {
  const properties = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      title: "Real Luxury Family House Villa",
      location: "Est St, 77-Central Park South, NYC",
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: 150000,
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/27059631/pexels-photo-27059631.jpeg",
      title: "Modern Downtown Loft",
      location: "Est St, 77-Central Park South, NYC",
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: 150000,
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/23325566/pexels-photo-23325566.jpeg",
      title: "Suburban Family Home",
      location: "Est St, 77-Central Park South, NYC",
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: 150000,
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg",
      title: "Luxury Penthouse Apartment",
      location: "Est St, 77-Central Park South, NYC",
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: 150000,
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/5824520/pexels-photo-5824520.jpeg",
      title: "Waterfront Villa with Pool",
      location: "Est St, 77-Central Park South, NYC",
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: 150000,
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/5883725/pexels-photo-5883725.jpeg",
      title: "Historic Brownstone Renovated",
      location: "Est St, 77-Central Park South, NYC",
      bedrooms: 6,
      bathrooms: 3,
      area: 720,
      garages: 2,
      price: 150000,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h1 className="text-4xl font-semibold text-gray-800">
          Featured Properties
        </h1>
        <h2 className="mb-10 text-xl font-normal mt-5 text-gray-600">
          These are our featured properties
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    className="w-full h-64 md:h-full object-cover"
                    src={property.image}
                    alt={property.title}
                  />
                </div>
                <div className="md:w-1/2 p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-left mb-2">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span>{property.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <BedDouble className="w-4 h-4 mr-1" />
                        <span>{property.bedrooms} Bedrooms</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        <span>{property.bathrooms} Bathrooms</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Ruler className="w-4 h-4 mr-1" />
                        <span>{property.area} sq ft</span>
                      </div>
                      <div className="flex items-center">
                        <CarFront className="w-4 h-4 mr-1" />
                        <span>{property.garages} Garages</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-gray-900">
                        ${property.price.toLocaleString()}
                      </h4>
                      <button
                        aria-label="Save property"
                        className="text-gray-600 hover:text-red-500 transition-colors focus:outline-none"
                      >
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="flex justify-center items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            View More
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
