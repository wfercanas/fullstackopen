import axios from "axios";

const BASE_URL = "https://studies.cs.helsinki.fi/restcountries/api/";

const getAll = () => {
  return axios.get(`${BASE_URL}/all`);
};

const getCountry = (name) => {
  return axios.get(`${BASE_URL}/name/${name}`);
};

export default { getAll, getCountry };
