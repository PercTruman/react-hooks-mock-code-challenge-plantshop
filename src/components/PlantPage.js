import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantObjects, setPlantObjects}) {
  
  function addNewPlant(newPlant){
    const updatedPlantList = {...plantObjects, newPlant}
    setPlantObjects(updatedPlantList)
  }

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plantObjects={plantObjects} addNewPlant={addNewPlant}/>
    </main>
  );
}

export default PlantPage;
