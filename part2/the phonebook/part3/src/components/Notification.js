const Notification = ({ message, type }) => {
    const style = {
        display: type==='invisible'?'none':'block',
        color: type==='success'?'green': type==='error'?'red':'none',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
    }
    return (
        <>
            <div className="error" style={style}>
                {message}
            </div>
        </>
    );
}

export default Notification;