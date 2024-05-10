import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  // Sample data
  const sampleData = [
    {
      id: 1,
      title: "Web Development",
      description: "Learn web development from scratch.",
      image: "https://th.bing.com/th/id/OIP.HnkioNiSThktPrmZClTboAHaHa?w=500&h=500&rs=1&pid=ImgDetMain",
      price: 49.99,
    },
    {
      id: 2,
      title: "Data Science",
      description: "Master data science concepts and tools.",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/7/QS/OB/KX/96881112/mba-in-data-business-500x500.png",
      price: 59.99,
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Master UI/UX concepts and research.",
      image: "https://th.bing.com/th/id/OIP.gBXQjid0MUshaFPfumeR7AHaHa?w=500&h=500&rs=1&pid=ImgDetMain",
      price: 39.99,
    },
    {
      id: 2,
      title: "Graphic Design",
      description: "Basic to Advanced of Graphic designing.",
      image: "https://i.pinimg.com/originals/61/93/0e/61930e3f2aea0011631e71dd8b07edca.jpg",
      price: 29.99,
    },
    {
      id: 2,
      title: "Content Writing",
      description: "Explore the creativity of your mind and pen them in a defined way.",
      image: "https://th.bing.com/th/id/OIP.f2-ltYy59nP6zRm7vAJKHgHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain",
      price: 49.99,
    }
    
  ];

  useEffect(() => {
    
    setBook(sampleData);
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
          Welcome to our Course Selection!{" "}
            <span className="text-pink-500">Choose Your Path :)</span>
          </h1>
          <p className="mt-12">
          Explore our wide range of courses and enhance your skills, advance
          your career, or simply indulge your interests!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
