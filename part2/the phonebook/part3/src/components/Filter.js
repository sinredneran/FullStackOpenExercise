const Filter = ({ handleSearch, filterItem }) => {
    return (
        <div className="filter">
            <p>Filter shown with</p>
            <input type="text" onChange={handleSearch} />
            <ol>{filterItem.map(x => <li key={x.id}>{x.name} {x.number}</li>)}</ol>
        </div>
    );
}

export default Filter;