import React from 'react';

export const Popular = (props) => {

    const baseURL = 'https://image.tmdb.org/t/p/';
    const posterWidth = 'w300/';
    const posterFilePath = props.popularResults.poster_path;

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
                    <h3>{props.popularResults.title}</h3>
                    <h3 className ={`${colorChanger(props.popularResults.vote_average)}`}>{props.popularResults.vote_average}</h3>
                </section>
            <div className ="image-overlay">
                {props.popularResults.overview ?
                <p className ="overview"><span className="overview_title">Overview:</span>{props.popularResults.overview}</p>:
                <p className ="overview"><span className="overview_title">Overview:</span>No Overview Available</p>}
            </div>
        </div>
        </>
    );
}
