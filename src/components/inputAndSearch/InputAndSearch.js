import React, { useState } from 'react';
import './InputAndSearch.css';

function InputAndSearch(props) {
    const [inputText, setInputText] = useState('');

    const inputChangeHandler = (event) => {
        setInputText(event.target.value);
    }

    const search = () => {
        // console.log('User searched by = ' + inputText);
        props.onSearchClick(inputText);
    }

    return (
        <div>
            <label className='input-label'>User Id:</label>
            &nbsp;
            <input
                id="userSearchInput"
                className='input-textbox'
                type='number'
                value={inputText}
                onChange={inputChangeHandler}
                placeholder='Enter a numeric Id to search' />
            &nbsp;
            <button id="userSearchButton" disabled={inputText ? false : true} type='submit' onClick={search}> Search </button>

        </div>
    );
}

export default InputAndSearch;