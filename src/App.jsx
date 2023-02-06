import "./App.css";
import React, { useState } from "react";
import { sites } from "./data";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setResults(
      sites.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <form className="" onSubmit={handleSearch}>
      <div class="logo">
        <img
          class="logo"
          src={require("./assets/pictures/ReynoldsLogo.jpg")}
          alt="logo"
        />
      </div>
      <div className="search-box">
        <input
          className="input"
          type="text"
          placeholder="search sites"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <br />
      <button type="submit" className="buttonSearch">
        Search
      </button>
      <div>
        {results.map((item) => (
          <div className="siteItems">
            <h2>{item.name}</h2>
            <h4>{item.adress}</h4>
            <h5>{item.description}</h5>
            <div className="container">
              {item.image.map((x) => (
                <img className="image" src={require(`${x}`)} alt={x.image} />
              ))}
              {/* <img src={require(`${item.image}`)} alt={item.name} /> */}
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};

export default App;
