import { useEffect, useState } from "react";
import countriesServices from "./services/countries";
import { CountriesList } from "./components/CountriesList";
import { CountryDetails } from "./components/CountryDetails";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleClick(country) {
    setSearch(country);
  }

  useEffect(() => {
    countriesServices.getAll().then((response) => setCountries(response.data));
  }, []);

  function filterCountries() {
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
  }

  const filteredCountries = filterCountries();

  return (
    <>
      <div>
        <label>
          Find countries:{" "}
          <input type="text" value={search} onChange={handleChange} />
        </label>
      </div>
      <div>
        <h1>Results</h1>
        <CountriesList
          countries={filteredCountries}
          search={search}
          onClick={handleClick}
        />
        {filteredCountries.length === 1 && (
          <CountryDetails country={filteredCountries[0]} />
        )}
      </div>
    </>
  );
}

export default App;
