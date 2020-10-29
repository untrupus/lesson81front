import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Shorten your link!</h1>
            <input type="text"
                   name="link"
                   className="field"
                   placeholder="enter your link"
            />
            <button type="button"
                    className="btn"
            >Shorten
            </button>
            <p></p>
        </div>
    );
}

export default App;
