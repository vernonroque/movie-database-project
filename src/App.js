import React, { useState , useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Trending} from './features/components/trending.js'; 

function App() {

  const APIKEY = 'abf63d7f66de896ec9b783751a6a428e';
  const baseURL = 'https://api.themoviedb.org/3';
  const movieID = 550;

  const [movies, setMovies] = useState([]);
  const [movieImages,setMovieImages] = useState([]);
  const [config,setConfig] = useState([]);
  const [trendingResults, setTrendingResults] =useState([]);

  
  
  useEffect( () => {

    const fetchConfig = async() => {
      const selectedConfig = await fetch(`${baseURL}/configuration?api_key=${APIKEY}`);
      const json = await selectedConfig.json();
      setConfig(json);
      console.log('config info', config);
    }

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

    // const fetchMovieImage = async() => {
    //   const selectedMovieImage = await fetch(`${baseURL}/movie/${movieID}/images?api_key=${APIKEY}`);
    //   const json = await selectedMovieImage.json();
    //   setMovieImages(json);
    //   console.log('movie image info', movieImages);
    // }
   
    //fetchMovies();
    //fetchMovieImage();
    fetchConfig();
    fetchTrendingList();

  },[movies.id,movieImages.id,trendingResults.length,config.length]);
  
  return (
    <>
    <h1>Trending Today</h1>
    <section className = "Trending-Container">
    
    {trendingResults.length>0 && trendingResults.map((element,index) => {
      return <Trending key={index} trendingResults = {element}/>
    })}
    </section>

    
    </>
  )
}

export default App;
