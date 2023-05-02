import React, { useState } from "react";
import jsonData from "./data.json";
import "../index.css";


function CardData() {
  const [CityData, setCityData] = useState(jsonData);

  return (
    <div className="cardsContainer">
      {CityData.map((item) => (
        <div className="card" key={item.id}>
          <img className="images" src={item.Image} alt={item.name} />
          <p>
            <span className="title"> ID:</span> {item.Id}
          </p>
          <p>
            <span className="title"> City Name: </span>
            {item.name}
          </p>
          <p>
            <span className="title"> Information:</span> {item.Info}
          </p>
          <p>
            <span className="title"> Price: </span>
            {item.Price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CardData;
