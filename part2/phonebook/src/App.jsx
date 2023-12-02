import { useEffect, useState } from "react";

import personsService from "./services/persons";

import { Search } from "./components/Search";
import { Form } from "./components/Form";
import { List } from "./components/List";

function App() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    personsService.getAll().then((data) => setPersons(data));
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
      const newPerson = { name: newName, number: newNumber };
      personsService.create(newPerson).then((data) => {
        setPersons([...persons, data]);
        setNewName("");
        setNewNumber("");
      });
    }
  }

  function handleDelete(id) {
    personsService.remove(id).then((data) => {
      console.log(data);
      setPersons(persons.filter((person) => person.id !== id));
    });
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
      <List filteredPersons={filteredPersons} onDelete={handleDelete} />
    </div>
  );
}

export default App;
