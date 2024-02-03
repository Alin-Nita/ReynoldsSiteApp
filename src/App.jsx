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
            <div className="data">
              <h2>{item.name}</h2>
              <h3>{item.adress}</h3>
              <br></br>
              <h4>{item.routeInformations}</h4>
              <h4>{item.description}</h4>
              <h4>{item.maneouvring}</h4>
              <h4>{item.potting}</h4>
              <h4>{item.specialRequirements}</h4>
              <h4>{item.generalInformations}</h4>
              <h4>{item.notes}</h4>
              <h4>
                {" "}
                - Real images with the actual site during delivery{" "}
                <span>&#8595;&#8595;&#8595;</span>
              </h4>
            </div>
            <div className="container">
              {item.image.map((x) => (
                <img className="image" src={require(`${x}`)} alt={x.image} />
              ))}
              {/* <img src={require(`${item.image}`)} alt={item.name} /> */}
            </div>
          </div>
        ))}
      </div>
      <div className="trademark">
        <p>
          Reynolds Logistics <span>&#174;</span> All Rights Reserved
        </p>
      </div>
    </form>
  );
};

export default App;
