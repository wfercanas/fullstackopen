import PropTypes from "prop-types";

function CountriesList({ countries, onClick }) {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length > 1) {
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            {country.name.common}
            <button onClick={() => onClick(country.name.common)}>show</button>
          </li>
        ))}
      </ul>
    );
  }

  return null;
}

CountriesList.propTypes = {
  countries: PropTypes.array,
  onClick: PropTypes.func,
};

export { CountriesList };
