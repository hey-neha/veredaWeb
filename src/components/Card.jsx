import React, { useState } from "react";

const Card = () => {
  const data = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?size=626&ext=jpg&ga=GA1.1.120175379.1720866215&semt=sph",
      title: "Golio",
      name: "John Doe",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, assumenda aliquam minus debitis consequatur inventore amet autem! Voluptatum, necessitatibus accusamusLorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis excepturi odit dolorem vel rem deserunt, ullam iure explicabo enim!",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?size=626&ext=jpg&ga=GA1.1.120175379.1720866215&semt=sph",
      title: "Golio",
      name: "Jane Smith",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, assumenda aliquam minus debitis consequatur inventore amet autem! Voluptatum, necessitatibus accusamusLorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis excepturi odit dolorem vel rem deserunt, ullam iure explicabo enim!",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg?size=626&ext=jpg&ga=GA1.1.120175379.1720866215&semt=sph",
      title: "Golio",
      name: "Alice Johnson",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, assumenda aliquam minus debitis consequatur inventore amet autem! Voluptatum, necessitatibus accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis excepturi odit dolorem vel rem deserunt, ullam iure explicabo enim!.",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.120175379.1720866215&semt=sph",
      title: "Golio",
      name: "Bob Brown",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, assumenda aliquam minus debitis consequatur inventore amet autem! Voluptatum, necessitatibus accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis excepturi odit dolorem vel rem deserunt, ullam iure explicabo enim!.",
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/free-photo/young-man-white-t-shirt-pointing-first-aid-kit-looking-surprised-front-view_176474-25246.jpg?size=626&ext=jpg&ga=GA1.1.120175379.1720866215&semt=sph",
      title: "Golio",
      name: "Charlie Green",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, assumenda aliquam minus debitis consequatur inventore amet autem! Voluptatum, necessitatibus accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis excepturi odit dolorem vel rem deserunt, ullam iure explicabo enim!.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === data.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="w-full md:w-[50%] m-auto rounded-xl p-7 my-5 md:my-8 md:p-8 border-4 border-sky-400">
      <div className="relative flex items-center overflow-hidden">
        <button
          className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full"
          onClick={prevSlide}
        ></button>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {data.map((card) => (
            <div key={card.id} className="min-w-full flex flex-col  gap-5 p-4">
              <div className="flex items-center gap-3">
                <div className="">
                  <img
                    className="rounded-full w-10 h-10"
                    src={card.image}
                    alt={card.name}
                  />
                </div>
                <div>
                  <h1 className="font-semibold">{card.name}</h1>
                  <p className="text-gray-400">{card.title}</p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 px-16">
                <p className="text-start ">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full"
          onClick={nextSlide}
        ></button>
      </div>
      <div className="flex justify-center mt-4 ">
        {data.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-sky-400" : "bg-sky-200"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Card;
