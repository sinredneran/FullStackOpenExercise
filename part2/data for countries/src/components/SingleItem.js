const SingleItem = ({filterItems}) => {
    return (
        <>
            <div className='single-item'>
                <h1>{filterItems.name}</h1>
                <p>capital: {filterItems.capital}</p>
                <p>area: {filterItems.area}</p>
                <h3>languages: </h3>
                <ul>
                    {Object.values(filterItems.languages).map(x => <li key={x} >{x}</li>)}
                </ul>
                <img src={filterItems.flags} alt={`${filterItems.name} flag`} />
            </div>
        </>
    );
}

export default SingleItem;