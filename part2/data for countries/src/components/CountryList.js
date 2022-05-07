const CountryList = ({filterItems, handleShow}) => {
    return (
        <>
            <ul>
                {
                    filterItems.map(x =>
                        <li key={x.area}>
                            {x.name}
                            <button onClick={() => handleShow(x)}>show</button>
                        </li>)
                }
            </ul>
        </>
    );
}

export default CountryList;