import Part from "./Part";

const Content = (props) => {
    return (
        <>
            {props.parts.map(x =>
                <Part detail={x} key={x.id} />
            )}
        </>
    );
}

export default Content;