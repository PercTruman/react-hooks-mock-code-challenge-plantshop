import React, {useState,useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantObjects, setPlantObjects]=useState([]);


  useEffect(() => {
  fetch('http://localhost:6001/plants')
    .then((res)=>res.json())
    .then((plantObjects) =>
      setPlantObjects(plantObjects)
    );
  },[]);

  return (
    <div className="app">
      <Header />
      <PlantPage plantObjects={plantObjects}/>
    </div>
  );
}

export default App;
