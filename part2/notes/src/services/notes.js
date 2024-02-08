import axios from "axios";

const baseURL = `http://localhost:3001/api/notes/`;

const getAll = () => {
  const request = axios.get(baseURL);
  const nonExisting = {
    id: 10000,
    content: "This not is not saved to server",
    important: true,
  };
  return request.then((response) => response.data.concat(nonExisting));
};

const create = (newObject) => {
  return axios.post(baseURL, newObject).then((response) => response.data);
};

const update = (id, newObject) => {
  return axios
    .put(`${baseURL}/${id}`, newObject)
    .then((response) => response.data);
};

export default { getAll, create, update };
