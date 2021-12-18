import React from 'react';


export const Trending = (props) => {
    const baseURL = 'https://image.tmdb.org/t/p/';
    //const moviePoster = props.movieImage;
    const posterWidth = 'w300/';
    const posterFilePath = props.trendingResults.poster_path;
    // console.log('movie posters', moviePoster);
    // console.log('poster_path',posterFilePath);
    //console.log('title',props.trendingResults.original_title);

    const colorChanger = (vote) => {
        if(vote > 8){
            return 'votebox_green';
        }
        else if(vote >6){
            return 'votebox_yellow';
        }
        else
            return 'votebox_red';

    }

    return(
        <>
            <div className = "item-container">
                <img className = "actual-img" src = {`${baseURL}${posterWidth}${posterFilePath}`} alt='movie poster'/>
                    <section className='details'>
                        <h3>{props.trendingResults.title}</h3>
                        <h3 className ={`${colorChanger(props.trendingResults.vote_average)}`}>{props.trendingResults.vote_average}</h3>
                        
                    </section>
                <div className ="image-overlay">
                  {props.trendingResults.overview ?
                    <p className = "overview"><span className="overview_title">Overview:</span>{props.trendingResults.overview}</p>:
                    <p className = "overview"><span className="overview_title">Overview:</span> No Overview Available </p> }
                </div>
            </div>

        </>
    )
    
}
