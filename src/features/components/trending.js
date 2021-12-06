import React from 'react';


export const Trending = (props) => {
    const baseURL = 'https://image.tmdb.org/t/p/';
    const moviePoster = props.movieImage;
    const posterWidth = 'w300/';
    const posterFilePath = props.trendingResults.poster_path;
    // console.log('movie posters', moviePoster);
    // console.log('poster_path',posterFilePath);
    console.log('title',props.trendingResults.original_title);

    return(
        <>
            <div className = "item-container">
                <img className = "actual-img" src = {`${baseURL}${posterWidth}${posterFilePath}`} alt='movie poster'/>
                    <section className='details'>
                        <h3>{props.trendingResults.title}</h3>
                        <h3>{props.trendingResults.vote_average}</h3>
                    </section>
                <div className ="image-overlay">
                    {/* <p className ="overview_title">Overview:</p> */}
                    <p className = "overview"><span className="overview_title">Overview:</span>{props.trendingResults.overview}</p>
                </div>
            </div>


        </>
    )
    
}
