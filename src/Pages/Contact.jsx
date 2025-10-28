import {
  Clock,
  LocationEdit,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <div>
      <NavBar />
      <div className="relative h-[50vh] bg-[url('https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg')] bg-cover bg-center flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-white max-w-4xl">
            CONTACT US
          </h1>
          <h1 className="text-xl font-semibold mt-5 text-white">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            / Contact Us
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 max-w-7xl mx-auto my-20 px-4 ">
        <div className="bg-white p-5  rounded-lg shadow-lg">
          <h1 className="text-xl font-bold">OUR LOCATION</h1>

          <div className="w-full h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.925266147456!2d83.98299247531948!3d28.209583075898347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595006e47a60f%3A0x872668dd53b61b80!2sPokhara%20chauthe!5e0!3m2!1sen!2snp!4v1760083223022!5m2!1sen!2snp"
              className="w-full p-2 h-full  border-0 rounded-lg shadow-md grid"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-6xl mx-auto my-20 px-6">
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center ">
          <h1 className="text-xl font-bold">CONTACT US</h1>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="First Name"
            />
            <input
              type="text"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Last Name"
            />
            <input
              type="email"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder=" Email"
            />
            <textarea
              rows={4}
              className="bborder border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder=" Message"
            ></textarea>
            <button className="bg-red-500 w-50 text-white p-2 mt-2 rounded-md">
              Submit
            </button>
          </div>
        </div>
        <div
          className="relative w-100 h-[460px]
             bg-cover bg-center 
             bg-[url('https://images.pexels.com/photos/8191959/pexels-photo-8191959.jpeg')]
             flex flex-col  text-white rounded-lg shadow-lg mx-auto my-20 px-4"
        >
          <div className="absolute inset-0 bg-gray-900/80"></div>

          <div className="relative p-5 flex flex-col gap-5">
            <h1 className="text-3xl  font-bold mt-3 ">Contact Details</h1>
            <p className="text-white mb-5">
              Please find below contact details and contact us today!
            </p>
            <h1>
              <MapPin className="inline mr-2" />
              123 Main Street, Pokhara, Nepal
            </h1>
            <h1>
              <Phone className="inline mr-2 " />
              +97826182932/98374929294
            </h1>
            <h1>
              <MessageCircle className="inline mr-2" />
              <a href="http://gmail.com" class="">
                {" "}
                example@gmail.com
              </a>
            </h1>
            <h1>
              <Clock className="inline mr-2" />
              9:00 AM - 6:00 PM
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
