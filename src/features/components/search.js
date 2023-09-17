import React, {useState,useEffect} from 'react';

export const Search = () => {

    const baseURL = 'https://api.themoviedb.org/3';
    const APIKEY = process.env.REACT_APP_MOVIEDATABASE_API_KEY;

    const [entry,setEntry] = useState (''); 
    const [entryResults,setEntryResults] = useState([]);

    const onHandleEntry = (event) => {

        setEntry(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const fetchSearch = async () => {
            const fetchSearchResults = await fetch(`${baseURL}/search/movie?api_key=${APIKEY}&query=${entry}`);
            const jsonResults = await fetchSearchResults.json();

            setEntryResults(jsonResults);
            console.log('entryResults', entryResults.results);
            setEntry('');
            console.log('entry',entry);
        }
        
        fetchSearch();
    }

    // useEffect (() => {

    //     const fetchSearch = async() =>{
        
           
    //     }

    // fetchSearch();

    // },[entry,entryResults]);

    return(
        <>
        <form onSubmit = {handleSubmit}>
        <input type='text' value={entry} onChange = {onHandleEntry} placeholder = "Search..."/>
        </form>
       
        </>
    )
}