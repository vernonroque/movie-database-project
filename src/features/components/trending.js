import React from 'react';


export const Trending = (props) => {
    const baseURL = 'https://image.tmdb.org/t/p/';
    const moviePoster = props.movieImage;
    const posterWidth = 'w300/';
    const posterFilePath = props.trendingResults.poster_path;
    // console.log('movie posters', moviePoster);
    // console.log('poster_path',posterFilePath);

    return(
        <>
        <div className = "trending-item">
        <img className = "trending-img" src = {`${baseURL}${posterWidth}${posterFilePath}`} alt='movie poster'/>
        <p>{props.trendingResults.overview}</p>
        </div>
        </>
    )
    
}
