import React, { useState , useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Trending} from './features/components/trending.js'; 
import {Popular} from './features/components/popular.js';
//import {Search} from './features/components/search.js';

function App() {

  const APIKEY = process.env.REACT_APP_MOVIEDATABASE_API_KEY;
  const baseURL = 'https://api.themoviedb.org/3';
  const movieID = 550;

  const [movies, setMovies] = useState([]);
  const [movieImages,setMovieImages] = useState([]);
  const [config,setConfig] = useState([]);
  const [trendingResults, setTrendingResults] =useState([]);
  const [popularResults, setPopularResults] = useState([]);
  const [entry,setEntry] = useState (''); 
  const [entryResults,setEntryResults] = useState([]);
  const [isSearch,setIsSearch] = useState(false);

  useEffect( () => {

    // const fetchConfig = async() => {
    //   const selectedConfig = await fetch(`${baseURL}/configuration?api_key=${APIKEY}`);
    //   const json = await selectedConfig.json();
    //   setConfig(json);
    //   console.log('config info', config);
    // }

    // const fetchMovies = async() => {
    //   const selectedMovie = await fetch(`${baseURL}movie/${movieID}?api_key=${APIKEY}`);
    //   const json = await selectedMovie.json();
    //   setMovies(json);
    //   console.log('movie json', movies);
    // }

    const fetchTrendingList = async() => {
      const selectedTrendingList = await fetch(`${baseURL}/trending/movie/day?api_key=${APIKEY}`);
      const jsonResults = await selectedTrendingList.json();
      setTrendingResults(jsonResults.results);
      //setTrendingResults(jsonResults);
      console.log('Trending results', trendingResults);
    }

    const fetchPopularList = async() => {
      const selectedPopularList = await fetch(`${baseURL}/movie/popular?api_key=${APIKEY}`);
      const jsonResults2 = await selectedPopularList.json();
      setPopularResults(jsonResults2.results);
      //console.log('Popular results', popularResults);

    }

    // const fetchMovieImage = async() => {
    //   const selectedMovieImage = await fetch(`${baseURL}/movie/${movieID}/images?api_key=${APIKEY}`);
    //   const json = await selectedMovieImage.json();
    //   setMovieImages(json);
    //   console.log('movie image info', movieImages);
    // }
   
    //fetchMovies();
    //fetchMovieImage();
    //fetchConfig();
    fetchTrendingList();
    fetchPopularList();

  },[popularResults.length]);

  const onHandleEntry = (event) => {

    setEntry(event.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();

    if(entry){
      const fetchSearch = async () => {
          const fetchSearchResults = await fetch(`${baseURL}/search/movie?api_key=${APIKEY}&query=${entry}`);
          const jsonResults3 = await fetchSearchResults.json();

          setTrendingResults(jsonResults3.results);
          setEntryResults(jsonResults3.results);
          console.log('updated trending', trendingResults);
          console.log('entryResults', jsonResults3.results);
          console.log('updated trending 2', trendingResults);
          
      }
      fetchSearch();
      setEntry('');
      setIsSearch(true);
      console.log('entry',entry);
    }

}
  
  return (
    <>
    <header className ='app_header'>
    <form onSubmit = {handleSubmit}>
        <input className ='search' type='text' value={entry} onChange = {onHandleEntry} placeholder = "Search..."/>
        </form>
    </header>
    {!isSearch ? <h1 className="trending_title">Trending Today</h1>:<h1 className="trending_title">Search Results</h1>}
    <section className = "Trending-Container">
    
    {trendingResults.length>0 && trendingResults.map((element,index) => {
      if(element.poster_path){
        return <Trending key={index} trendingResults = {element}/>
      }
      else
        return '';
    })}
    </section>
    <h1>Popular Today</h1>
    <section className = "Popular-Container">
      {popularResults.length>0 && popularResults.map((element,index) => {
        return <Popular key = {index} popularResults = {element}/>
      })}

    </section>

    
    </>
  )
}

export default App;
