import React from "react";
import Card from "./Card";

const Dummydata = () => {
  const data = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?size=626&ext=jpg&ga=GA1.1.120175379.1720866215&semt=sph",
      title: "Card 1",
      name: "John Doe",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, assumenda aliquam minus debitis consequatur inventore amet autem! Voluptatum, necessitatibus accusamus.",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?size=626&ext=jpg&ga=GA1.1.120175379.1720866215&semt=sph",
      title: "Card 2",
      name: "Jane Smith",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, assumenda aliquam minus debitis consequatur inventore amet autem! Voluptatum, necessitatibus accusamus.",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg?size=626&ext=jpg&ga=GA1.1.120175379.1720866215&semt=sph",
      title: "Card 3",
      name: "Alice Johnson",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, assumenda aliquam minus debitis consequatur inventore amet autem! Voluptatum, necessitatibus accusamus.",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.120175379.1720866215&semt=sph",
      title: "Card 4",
      name: "Bob Brown",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, assumenda aliquam minus debitis consequatur inventore amet autem! Voluptatum, necessitatibus accusamus.",
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/free-photo/young-man-white-t-shirt-pointing-first-aid-kit-looking-surprised-front-view_176474-25246.jpg?size=626&ext=jpg&ga=GA1.1.120175379.1720866215&semt=sph",
      title: "Card 5",
      name: "Charlie Green",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, assumenda aliquam minus debitis consequatur inventore amet autem! Voluptatum, necessitatibus accusamus.",
    },
  ];

  return (
    <div>
      {data?.map((card) => {
        console.log(card, "data -------------");
        return (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            name={card.name}
            description={card.description}
          />
        );
      })}
    </div>
  );
};

export default Dummydata;
