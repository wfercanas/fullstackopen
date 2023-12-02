import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  function handleNameChange(event) {
    setNewName(event.target.value);
  }
  function handlePhoneChange(event) {
    setNewPhone(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons([...persons, { name: newName, phone: newPhone }]);
      setNewName("");
      setNewPhone("");
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>name: {<input value={newName} onChange={handleNameChange} />}</div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} - {person.phone}
        </p>
      ))}
    </div>
  );
}

export default App;
