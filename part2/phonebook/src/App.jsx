import { useEffect, useState } from "react";
import axios from "axios";

import { Search } from "./components/Search";
import { Form } from "./components/Form";
import { List } from "./components/List";

function App() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  }, []);

  const [search, setSearch] = useState("");
  function handleSearch(event) {
    setSearch(event.target.value);
  }

  const [newName, setNewName] = useState("");
  function handleNameChange(event) {
    setNewName(event.target.value);
  }

  const [newNumber, setNewNumber] = useState("");
  function handleNumberChange(event) {
    setNewNumber(event.target.value);
  }

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleSubmit(event) {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
      setNewNumber("");
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search value={search} onChange={handleSearch} />
      <Form
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <List filteredPersons={filteredPersons} />
    </div>
  );
}

export default App;
