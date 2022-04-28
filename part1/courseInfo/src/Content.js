import Part from "./Part";

const Content = (props) => {
    return (
        <>
            <Part detail={props.parts[0]}/>
            <Part detail={props.parts[1]}/>
            <Part detail={props.parts[2]}/>
        </>
    );
}

export default Content;