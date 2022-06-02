import React, {useState} from "react";

function PlantCard({image, name, price}) {
  const [isInStock, setIsInStock]=useState(true)

  function handleToggle(){
    setIsInStock(!isInStock)
  }
  
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      { isInStock ? (
        <button onClick={handleToggle} className="primary">In Stock</button>
      ) : (
        <button onClick={handleToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
