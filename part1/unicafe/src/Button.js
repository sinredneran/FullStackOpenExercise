const Button = (props) => {
    return ( 
        <button onClick={props.handleValue}>{props.name}</button>
     );
}
 
export default Button;
