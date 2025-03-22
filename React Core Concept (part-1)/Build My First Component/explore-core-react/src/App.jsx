import "./App.css";

function App() {
    return (
        <>
            <h1>React Core Concepts</h1>
            <Student></Student>
            <Student></Student>
            <Person></Person>
        </>
    );
}

function Person() {
    const age = 17;
    const name = `Nirob`;
    return (
        <p>
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
