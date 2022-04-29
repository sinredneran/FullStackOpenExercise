const MostVoted = (props) => {
    return ( 
        <>
        <h1>Anecdote with most votes</h1>
            <p>{props.anecdote}</p>
            <p>has {props.vote} votes</p>
        </>
     );
}
 
export default MostVoted;