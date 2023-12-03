import axios from "axios";

const baseURL = "http://localhost:3001/persons";

function getAll() {
  return axios.get(baseURL).then((result) => result.data);
}

function create(newPerson) {
  return axios.post(baseURL, newPerson).then((result) => result.data);
}

function remove(id) {
  return axios.delete(`${baseURL}/${id}`).then((result) => result.data);
}

function update(person) {
  return axios
    .put(`${baseURL}/${person.id}`, person)
    .then((result) => result.data);
}

export default { getAll, create, remove, update };
