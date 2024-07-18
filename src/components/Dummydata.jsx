import React from "react";
import Card from "./Card";

const Dummydata = () => {
 

  console.log(data);

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
