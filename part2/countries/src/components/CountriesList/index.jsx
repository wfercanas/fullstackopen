import PropTypes from "prop-types";

function CountriesList({ countries }) {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  console.log(countries);

  if (countries.length > 1) {
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
    );
  }

  return null;
}

CountriesList.propTypes = {
  countries: PropTypes.array,
};

export { CountriesList };
