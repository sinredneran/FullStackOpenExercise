const Part = (props) => {
    return ( 
        <>
            <h2>{props.detail.name}</h2>
            <p>{props.detail.exercises}</p>
        </>
     );
}
 
export default Part;