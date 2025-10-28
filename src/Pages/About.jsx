import React from "react";
import Choose from "../Components/Choose";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

function About() {
  return (
    <div>
      <NavBar />
      <div className="relative h-[50vh] bg-[url('https://images.pexels.com/photos/6893945/pexels-photo-6893945.jpeg')] bg-cover bg-center flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-white max-w-4xl">
            ABOUT US
          </h1>
          <h1 className="text-xl font-semibold mt-5 text-white">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            / About Us
          </h1>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1  max-w-2xl  float-left mx-auto my-20 px-10  ">
          <div className="bg-white p-5  rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold">
              About us <span className="text-pink-500">-GharBhada</span>
            </h1>
            <p className="mt-5 text-gray-600">
              Welcome to GharBhada, your trusted partner in finding the perfect
              rental home. We understand that searching for a rental property
              can be a daunting task, and we're here to make it easier for you.
              Our mission is to connect tenants with landlords and property
              managers, ensuring a smooth and hassle-free rental experience.
            </p>
            <p className="mt-5 text-gray-600">
              We believe that finding a home shouldn’t be complicated. That’s
              why we’ve built a user-friendly platform where anyone can browse,
              post, and connect easily — all in one place. Proudly based in
              Nepal, Gharbhada understands the local housing needs and aims to
              make renting more transparent, convenient, and community-driven.
            </p>
          </div>
          <div className="bg-white p-5 mt-10 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold">Our Vision</h1>
            <p className="mt-5 text-gray-600">
              At GharBhada, our vision is to create a world where finding a home
              is a seamless and enjoyable experience for everyone. We strive to
              empower individuals and families by providing them with the tools
              and resources they need to make informed decisions about their
              housing options.
            </p>
          </div>
          <div className="bg-white p-5 mt-10 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold">Our Mission</h1>
            <p className="mt-5 text-gray-600">
              Our mission is to connect tenants with landlords and property
              managers, ensuring a smooth and hassle-free rental experience. We
              are committed to providing a platform that is easy to use,
              reliable, and trustworthy. We aim to foster a sense of community
              among renters and landlords, promoting transparency and open
              communication.
            </p>
          </div>
        </div>
        <div className="float-right max-w-2xl mx-auto my-20 px-10  ">
          <img
            src="https://images.pexels.com/photos/8243467/pexels-photo-8243467.jpeg"
            className="w-full h-full object-cover "
            alt=""
          />
        </div>
      </div>
      <div className="clear-both">
        <Choose />
      </div>
      <Footer />
    </div>
  );
}

export default About;
