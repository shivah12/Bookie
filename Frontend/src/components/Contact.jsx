import React from 'react';
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <div className="mt-28 items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-4 text-pink-500 ">Contact Us!</h1>
      <p className="text-lg px-10 mx-20">
        If you have any questions or comments, please don't hesitate to reach out
        to us.  You can contact us by email at{" "}
        <a
          href="mailto:email@example.com"
          className="text-blue-600 hover:text-blue-900"
        >
          email@example.com
        </a>
        {" "}or by phone at (123) 456-7890.
      </p>
      <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
        </Link>
    </div>
  );
};

export default Contact;