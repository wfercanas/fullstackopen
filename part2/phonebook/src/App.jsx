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
    const person = persons.find((person) => person.name === newName);

    if (person) {
      if (
        window.confirm(
          `${person.name} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const updatedPerson = { ...person, number: newNumber };
        personsService.update(updatedPerson).then((data) => console.log(data));
        setPersons(
          persons.map((person) => {
            if (person.id === updatedPerson.id) {
              return updatedPerson;
            }
            return person;
          })
        );
      }
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
    const person = persons.find((person) => person.id === id);
    if (window.confirm(`Are you sure you wanto to delete ${person.name}?`)) {
      personsService.remove(id).then((data) => {
        console.log(data);
        setPersons(persons.filter((person) => person.id !== id));
      });
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
      <List filteredPersons={filteredPersons} onDelete={handleDelete} />
    </div>
  );
}

export default App;
