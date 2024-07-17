import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-70px", // Adjust this value as needed
          width: "100%",
          fontSize: "40px",
          color: "skyblue",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className=" w-full md:w-1/2 m-auto rounded-xl p-7 my-5 md:my-8 md:p-8  border-4 border-sky-400">
      <div className="">
        <Slider {...settings}>
          {data.map((card) => {
            return (
              <>
                <div key={card.id}>
                  {/*    for image  and ttitle*/}

                  <div className="flex justify-center gap-3 mr-16 md:mr-40 lg:mr-80">
                    {/*       image */}
                    <div className="w-10 md:w-11 mt-2">
                      <img className="rounded-full" src={card.image} alt="" />
                    </div>
                    {/*     title */}

                    <div>
                      <h1 className="font-semibold">{card.name}</h1>
                      <p className=" text-gray-400">{card.title}</p>
                    </div>
                  </div>
                  {/*    paragraph section */}
                  <div className="mx-10 mt-5 md:mt-10">
                    <p className="text-start">{card.description}</p>
                  </div>
                </div>

                <div className="flex flex-row justify-start my-5 md:my-6 ml-9 gap-2 md:ml-8">
                  <FaStar className="text-orange-500 w-7 h-7" />
                  <FaStar className="text-orange-500 w-7 h-7" />
                  <FaStar className="text-orange-500 w-7 h-7" />
                  <FaStar className="text-orange-500 w-7 h-7" />
                  <FaStar className="text-orange-500 w-7 h-7" />
                </div>
              </>
            );
          })}
          {/* Star Rating Section */}

          {/*  <div>
            {[...Array(5)].map((start) => {
              return <FaStar className="text-orange-500" />;
            })}
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Card;
