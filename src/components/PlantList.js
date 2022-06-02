import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantObjects}) {
  const plantCards = plantObjects.map(plant=>
   <PlantCard key={plant.id}image={plant.image} name={plant.name} price={plant.price}/> )
  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
