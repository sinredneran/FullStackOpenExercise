const Persons = ({ persons, handleDelete }) => {
    return (
        <ol>
            {persons.map(p => <li key={p.id}>{p.name} {p.number} <button onClick={() => handleDelete(p.name, p.id)}>delete</button></li>)}
        </ol>
    );
}

export default Persons;