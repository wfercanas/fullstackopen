import PropTypes from "prop-types";

function CountryDetails({ country }) {
  if (!country) {
    return;
  }

  return (
    <>
      <h1>{country.name.common}</h1>
      <div>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
      </div>
      <div>
        <p>
          <strong>Languages:</strong>
        </p>
        <ul>
          {Object.entries(country.languages).map(([code, language]) => (
            <li key={code}>{language}</li>
          ))}
        </ul>
      </div>
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        style={{ width: "150px", objectFit: "contain" }}
      />
    </>
  );
}

CountryDetails.propTypes = {
  country: PropTypes.object,
};

export { CountryDetails };
