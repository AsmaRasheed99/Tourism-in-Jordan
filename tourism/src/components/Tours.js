import React, { useState } from "react";
import jsonData from "./data.json";
import "../index.css";


function CardData() {
  const [CityData, setCityData] = useState(jsonData);

  const [info0, setinfo0] = useState("");
  const [id0, setid0] = useState("");

 function ShowMore(info,id){
  console.log(info)


  // CityData.filter((element)=>element.Id ==)
  setinfo0(info)
  setid0(id)


 }




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
            <span className="title"> Price: </span>
            {item.Price}
          </p>
          <button onClick={()=>ShowMore(item.Info,item.Id)}>More Information</button>

  
          {  item.Id ==id0  ?  <p>{info0}</p> : <><p>{""}</p></>
          }

         
        </div>
      ))}
    </div>
  );
}

export default CardData;
