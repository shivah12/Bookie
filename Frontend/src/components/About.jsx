import React from 'react';
import { Link } from "react-router-dom";
import iconURL from "./icon.png"; // Import your image file

const About = () => {
  return (
    <div className="mt-28 items-center justify-center text-center">
      <div className="flex flex-col mr-4">     
        <div>
          <h1 className="text-3xl font-bold mb-4 text-pink-500">About Us</h1>
          <p className="text-lg px-10 mx-20">
            We are a team of experienced professionals dedicated to providing the
            best possible service to our clients. We have years of experience in
            the industry and are committed to delivering high-quality results.
          </p>
          <img src={iconURL} alt="Icon" style={{ width: '500px', height: '500px', marginLeft:'450px' }} />
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
