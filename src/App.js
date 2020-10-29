import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {postLink} from "./store/actions";
import './App.css';

function App() {
    const dispatch = useDispatch();
    const shortLink = useSelector(state => state.shortLink);
    const [link, setLink] = useState("");

    const onChangeHandler = event => {
        const value = event.target.value;
        setLink(value);
    };


    const short = () => {
        dispatch(postLink(link));
        setLink('');
    };

    return (
        <div className="App">
            <h1>Shorten your link!</h1>
            <input type="text"
                   name="link"
                   className="field"
                   placeholder="enter your link"
                   value={link}
                   onChange={onChangeHandler}
            />
            <button type="button"
                    className="btn"
                    onClick={short}
            >Shorten
            </button>
            {shortLink.shortUrl ?
                <>
                    <p className="description">Your link now look like this:</p>
                    <a href={shortLink.originalUrl}>http://localhost:8000/{shortLink.shortUrl}</a>
                </>
                : null}
        </div>
    );
}

export default App;
