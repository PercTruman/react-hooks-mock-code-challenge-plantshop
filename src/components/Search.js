import React from "react";

function Search({searchInput, setSearchInput, searchPlants}) {

  function handleChange(e){
    setSearchInput(e.target.value)
    searchPlants(searchInput.toLowerCase())
  }

  

  return ( 
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input 
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
