import React, { useState } from 'react';
import DisplayResult from '../displayResult/DisplayResult';
import ErrorView from '../errorView/ErrorView';
import InputAndSearch from '../inputAndSearch/InputAndSearch';
import Loader from '../loader/Loader';
import './Home.css'

function Home() {

    const [userDetailsObj, setUserDetailsObj] = useState([]);
    const [displayView, setDisplayView] = useState(false);
    const [errorView, setErrorView] = useState(false);
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [loading, setLoading] = useState(false);


    const searchClickHandler = (userId) => {
        const getUserApiServiceUrl = window.$getUserApiServiceUri + userId + window.$getUserApiServiceKey;
        // console.log('User Id to search = ', userId);
        // console.log('getUserAPI Endpoint = ', getUserApiServiceUrl);

        setLoading(true);
        setDisplayView(false);
        setErrorView(false);

        fetch(getUserApiServiceUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something with wrong with User Detail Get Service = ' + getUserApiServiceUrl);
                } 
                return response.json();
            })
            .then(data => {
                setUserDetailsObj(data);
                setDisplayView(true);
                setErrorView(false);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setDisplayView(false);
                setErrorMessage('Something with wrong with User Detail Get Service = ' + getUserApiServiceUrl);
                setErrorView(true);
                setLoading(false);
            })
    }

    return (
        <div className='home'>
            <InputAndSearch onSearchClick={searchClickHandler}></InputAndSearch>
            {displayView && <DisplayResult userDetails={userDetailsObj}></DisplayResult>}
            {errorView && <ErrorView errorMessage={errorMessage}></ErrorView>}
            {loading && <Loader errorMessage={errorMessage}></Loader>}
        </div>
    );
}

export default Home;