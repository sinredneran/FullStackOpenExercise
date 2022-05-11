const PersonForm = ({ addContact, setNewName, newName, setNewNumber, newNumber }) => {
    return (
        <form onSubmit={addContact}>
            <div className="name">
                <label htmlFor='name'>name:</label>
                <input id='name' onChange={(e) => { setNewName(e.target.value) }} value={newName} />
            </div>
            <div className="number">
                <label htmlFor='number'>number:</label>
                <input id='number' onChange={(e) => { setNewNumber(e.target.value) }} value={newNumber} />
            </div>
            <button type="submit">add</button>
        </form>
    );
}

export default PersonForm;