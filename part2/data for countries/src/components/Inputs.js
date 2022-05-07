const Inputs = ({handleSearch}) => {
    return (
        <>
            <label htmlFor='input'>find countries: </label>
            <input id='input' type="text" onChange={handleSearch} />
        </>
    );
}

export default Inputs;