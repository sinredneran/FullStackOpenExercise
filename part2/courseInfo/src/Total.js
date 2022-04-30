const Total = ({ total }) => {
    let copy = total.map(x => x.exercises);
    const sum = () => {
        const sumValue = copy.reduce(
            (preValue, curValue) => {
                return preValue + curValue; 
            },0);
        return sumValue;
    }
    return (
        <>
            <h2>total of {sum()} exercises</h2>
        </>
    );
}

export default Total;