import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import "./App.css";
import Profiles from "../profiles";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  useEffect(()=>{
    // Logic for fetching data if needed
  }, []);

  function createEntry(datas) {
    return (
      <Cards
        key={datas.id}
        pic={datas.pic}
        name={datas.name}
        subjects={datas.subjects}
        description={datas.description}
        ytLinks={datas.ytLinks}
      />
    );
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Update search term state with input value

    const filteredResults = Profiles.filter(profile => {
      const { name, subjects } = profile;
      const searchLowerCase = searchTerm.toLowerCase();
      return (
        name.toLowerCase().includes(searchLowerCase) ||
        subjects.toLowerCase().includes(searchLowerCase)
      );
    });

    setSearchResults(filteredResults); // Update filtered results state
  };

  const resultsToDisplay = searchTerm ? searchResults : Profiles;

  return (
    <div className="App">
      <h1>Best Youtubers & Professors For Educational Purpose</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="search"
          id="search"
          placeholder="Search By Name or Course"
          value={searchTerm}
          onChange={handleSearch}
        />
        
      </form>
      <div className="cards">
        {resultsToDisplay.map(createEntry)}
      </div>
    </div>
  );
}

export default App;
