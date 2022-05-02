import { useState } from 'react'
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterItem, setFilterItem] = useState([]);

  const addContact = (e) => {
    e.preventDefault();
    let newObject = {
      name: `${newName}`,
      number: `${newNumber}`,
      id: ++persons.length,
    }
    persons.some(x => x.name === newName) ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(newObject));
    setNewName('');
    setNewNumber('');
  }

  const handleSearch = (e) => {
    const result = e.target.value === '' ? [] : persons.filter(x => x.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilterItem(result);
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} filterItem={filterItem} />
      <h3>Add a new</h3>
      <PersonForm addContact={addContact} setNewName={setNewName} newName={newName} setNewNumber={setNewNumber} newNumber={newNumber} />
      <h3>Numbers</h3>
      <Persons persons={persons} />
    </div>
  )
}

export default App