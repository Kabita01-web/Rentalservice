import { Facebook, Instagram, InstagramIcon, Linkedin } from "lucide-react";
import React from "react";

function Agent() {
  const agents = [
    {
      id: 1,
      name: "Kabita Bhurtel",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      description:
        "Passionate about creating beautiful and user-friendly interfaces.",
      instagram: "https://www.instagram.com/kabeeta_bhurtel/",
      facebook: "https://www.facebook.com/kabeetabhurtel/f",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      id: 2,
      name: "Smriti Nepali",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      description: "Focused on building secure and scalable web applications.",
      instagram: "https://www.instagram.com/smriti_nepali26",
      facebook: "https://www.facebook.com/smrti.nepali.586175",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  ];
  return (
    <div>
      <div className="m-auto mt-5 mb-5 text-center">
        <h1 className=" text-3xl sm:text-4xl font-semibold text-gray-800">
          Our Team
        </h1>
        <h1 className=" text-lg mt-4 text-gray-600 mx-auto">
          Meet Our Team Members
        </h1>
      </div>
      <div className="max-w-7xl mx-auto justify-center px-4 flex flex-col-1  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="bg-white rounded-lg shadow-md p-6 text-center"
          >
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              src={agent.image}
              alt={agent.name}
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {agent.name}
            </h2>
            <p className="text-gray-600">{agent.role}</p>
            <p className="mt-2 text-gray-500">{agent.description}</p>
            <div className="border-t border-gray-200 pt-4 mt-4 flex justify-center space-x-4">
              <a
                href={agent.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={agent.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={agent.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Agent;
