import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";

function Agent() {
  const agents = [
    {
      id: 1,
      name: "Kabita Bhurtel",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      description:
        "Passionate about creating beautiful and user-friendly interfaces with modern web technologies.",
      instagram: "https://www.instagram.com/kabeeta_bhurtel/",
      facebook: "https://www.facebook.com/kabeetabhurtel/",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      id: 2,
      name: "Smriti Nepali",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      description: "Focused on building secure and scalable web applications with cutting-edge technologies.",
      instagram: "https://www.instagram.com/smriti_nepali26",
      facebook: "https://www.facebook.com/smrti.nepali.586175",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Meet Our Team
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Talented individuals working together to create amazing experiences
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Profile Image */}
                <div className="flex justify-center pt-12 pb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <img
                      className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl ring-4 ring-blue-100 group-hover:ring-purple-100 transition-all duration-300"
                      src={agent.image}
                      alt={agent.name}
                    />
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 text-center">
                {/* Name and Role */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {agent.name}
                </h2>
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                  {agent.role}
                </p>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {agent.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center items-center space-x-4 pt-6 border-t border-gray-100">
                  <a
                    href={agent.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-110 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={agent.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:shadow-lg hover:scale-110 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={agent.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-700 text-white hover:shadow-lg hover:scale-110 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Agent;