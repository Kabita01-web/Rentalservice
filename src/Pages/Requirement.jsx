import React from "react";
import NavBar from "../Components/NavBar";

function Requirement() {
  return (
    <div className="p-5  bg-indigo-50">
      <NavBar />
      <form action="">
        <div className="mb-4">
          <label htmlFor="Name" className="font-semibold text-xl ">
            Name
          </label>
          <br />
          <input
            type="text"
            id="Name"
            name="Name"
            className="border w-fit px-6 h-12 mt-2 rounded-md focus:outline-none focus:ring-2 focus:bold"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Phone number" className="font-semibold text-xl ">
            Phone number
          </label>
          <br />
          <input
            type="tel"
            id="Phone number"
            name="Phone number"
            className="border w-fit px-6 h-12 mt-2 rounded-md focus:outline-none focus:ring-2 focus:bold"
            required
          />
          <br />
        </div>
        <div className="mb-4">
          <label htmlFor="Email" className="font-semibold text-xl ">
            Email
          </label>
          <br />
          <input
            type="email"
            id="Email"
            name="Email"
            className="border w-fit px-6 h-12 mt-2 rounded-md focus:outline-none focus:ring-2 focus:bold"
            required
          />
          <br />
        </div>
        <div className="mb-4">
          <label htmlFor="looking" className="font-semibold text-xl ">
            Are You Looking to Buy or Rent?
          </label>
          <br />
          <select
            id="looking"
            name="looking"
            className="border w-fit px-6 h-12 mt-2 rounded-md focus:outline-none focus:ring-2 focus:bold"
            required
          >
            <option value="">--Please choose an option--</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
          <br />
        </div>
        <div className="mb-4">
          <label htmlFor="Want" className="font-semibold text-xl mb-5 ">
            What Do You Want to Buy or Rent?
          </label>
          <br />
          <input
            type="radio"
            name="want"
            id="land"
            value="land"
            className="mr-2"
          />
          <label htmlFor="land">Land</label>
          <br />
          <input
            type="radio"
            name="want"
            id="house"
            value="house"
            className="mr-2"
          />
          <label htmlFor="house">House</label>
          <br />
          <input
            type="radio"
            name="want"
            id="apartment"
            value="apartment"
            className="mr-2"
          />
          <label htmlFor="apartment">Apartment</label>
          <br />
          <input
            type="radio"
            name="want"
            id="room"
            value="room"
            className="mr-2"
          />

          <label htmlFor="room">Room</label>
          <br />
        </div>
        <div className="mb-4">
          <label htmlFor="Area" className="font-semibold text-xl ">
            Area
          </label>
          <br />
          <input
            type="text"
            id="Area"
            name="Area"
            className="border w-fit px-6 h-12 mt-2 rounded-md focus:outline-none focus:ring-2 focus:bold"
          />
          <br />
        </div>
        <div className="mb-4">
          <label htmlFor="Budget" className="font-semibold text-xl ">
            Budget
          </label>
          <br />
          <input
            type="text"
            id="Budget"
            name="Budget"
            className="border w-fit px-6 h-12 mt-2 rounded-md focus:outline-none focus:ring-2 focus:bold"
          />
          <br />
        </div>
        <div className="mb-4">
          <label htmlFor="Additional" className="font-semibold text-xl ">
            Requirement Details
          </label>
          <br />
          <textarea
            id="Additional"
            name="Additional"
            rows="4"
            cols="50"
            className="border w-fit px-6 h-12 mt-2 rounded-md focus:outline-none focus:ring-2 focus:bold"
          ></textarea>
          <br />
        </div>

        <button
          type="submit"
          className="font-semibold text-xl bg-red-500 border-1 px-2 rounded-md text-white "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Requirement;
