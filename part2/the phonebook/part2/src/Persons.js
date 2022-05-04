const Persons = ({ persons }) => {
    return (
        <ol>
            {persons.map(p => <li key={p.id}>{p.name} {p.number}</li>)}
        </ol>
    );
}

export default Persons;