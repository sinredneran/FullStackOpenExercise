import { useEffect, useState } from 'react'
import Filter from './components/Filter';
import Notification from './components/Notification';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import services from './services/services';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterItem, setFilterItem] = useState([]);
  const [message, setMessage] = useState({
    content: '',
    messageType: 'invisible',
  });

  useEffect(() => {
    services.getAll()
      .then(initialContacts => {
        setPersons(initialContacts);
      });
  }, []);

  const addContact = (e) => {
    e.preventDefault();

    if (newName === '' || newNumber === '') {
      return alert(`can't add empty name or number.`)
    }

    let newContact = {
      name: `${newName}`,
      number: `${newNumber}`,
      id: persons.length + 1,
    }

    let checkName = false;

    persons.forEach(el => {
      if (el.name === newName) {
        checkName = true;
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)) {
          const matchedContact = el;
          const changedContact = { ...matchedContact, number: newNumber }

          services.updateContact(el.id, changedContact)
            .catch(error => {
              handleMessage(`Information of ${newName} has already been removed from server`, 'error')
            });

          handleMessage(`${newName} number changed`, 'success');

          services.getAll()
            .then(initialContacts => {
              setPersons(initialContacts);
            });
        }
      }
      if (checkName) {
        return
      }
    })
    if (checkName) {
      setNewName('');
      setNewNumber('');
      return
    }


    services.create(newContact).then(returnedContact => {
      setPersons(persons.concat(returnedContact))
      handleMessage(`Added ${newName}`, 'success');

      setNewName('');
      setNewNumber('');
    }).catch(error => {
      handleMessage(`something unexpected happened`, 'error');
    });
  }

  const handleSearch = (e) => {
    const result = e.target.value === '' ? [] : persons.filter(x => x.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilterItem(result);
  }

  const handleDelete = (name, id) => {
    if (window.confirm(`Delete ${name} ?`)) {
      handleMessage(`${name} contact is deleted`, 'success');
      services.deleteContact(id).catch(error => {
        handleMessage(`something unexpected happened`, 'error');
      });
    }
    services.getAll()
      .then(initialContacts => {
        setPersons(initialContacts);
      });
  }

  const handleMessage = (content, type) => {
    setMessage({
      content: content,
      messageType: type
    });
    setTimeout(() => {
      setMessage({ ...message, messageType: 'invisible' });
    }, 3000);
  }

  return (
    <div>
      <Notification message={message.content} type={message.messageType} />
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} filterItem={filterItem} />
      <h3>Add a new</h3>
      <PersonForm addContact={addContact} setNewName={setNewName} newName={newName} setNewNumber={setNewNumber} newNumber={newNumber} />
      <h3>Numbers</h3>
      <Persons persons={persons} handleDelete={handleDelete} />
    </div>
  )
}

export default App;