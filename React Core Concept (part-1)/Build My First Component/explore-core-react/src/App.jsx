import "./App.css";

function App() {
    return (
        <>
            <h1>React Core Concepts</h1>
            <Student></Student>
            <Student></Student>
            <Person></Person>
            <Developer name="Mozumder"></Developer>
            <Developer name="Rajon"></Developer>
            <Developer name="Sabana"></Developer>
            <Player name="tamim" runs="5000"></Player>
            <Player name="shakib" runs="4000"></Player>
            <Salami event="ROja Eid" amount="39"></Salami>
            <Salami event="Graduation"></Salami>
        </>
    );
}


function Salami({event,amount}) {
    return (
        <div className='student'>
            <p>Salami For :{event}</p>
            <p>Amount {amount}</p>
        </div>
    )

}



// const j{name,runs} = {name: "Tamim", runs: 5000}
function Player({name, runs}) {
    return (
        <div className='student'>
            <h3>Player: {name}</h3>
            <p>Runs: {runs}</p>
        </div>
    )
}



function Developer(props) {
    console.log(props);
    return (
        <div style={{ border: "2px solid red", margin: "10px" }}>
            <h3>Developer: {props.name}</h3>
            <p>Technology: </p>
        </div>
    )
}



function Person() {
    const age = 17;
    const name = `Nirob`;

    const personStyle = {
        color: "red",
        fontSize: "20px",
        backgroundColor: "yellow",
        padding: "10px",
        border: "2px solid green",
        margin: "10px",
    };
    return (
        <p style={personStyle}>
            I am a Person {name} {age}
        </p>
    );
}

function Student() {
    return (
        <div className="student">
            <p>Name:</p>
            <p>Dept:</p>
        </div>
    );
}
function Sports() {
    return (
        <div>
            <h3>Cricket</h3>
            <p>Playing and losing</p>
        </div>
    );
}

export default App;
