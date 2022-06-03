import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantObjects, updatePlants, setPlantObjects}) {
  const [searchInput, setSearchInput]=useState('')

  function addNewPlant(newPlant){
    const updatedPlantList = {...plantObjects, newPlant}
    updatePlants(updatedPlantList)
  }
  function searchPlants(searchInput){
    const filteredPlants = plantObjects.filter(plantObj=>plantObj.name.toLowerCase().includes(searchInput))
    updatePlants(filteredPlants)
    }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}plantObjects={plantObjects} setPlantObjects={setPlantObjects}/>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} searchPlants={searchPlants} />
      <PlantList plantObjects={plantObjects}/>
    </main>
  );
}

export default PlantPage;
