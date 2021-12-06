import React from 'react';

export const Popular = (props) => {

    const baseURL = 'https://image.tmdb.org/t/p/';
    const posterWidth = 'w300/';
    const posterFilePath = props.popularResults.poster_path;
    
    return(
        <>
        <div className = "item-container">
            <img className = "actual-img" src = {`${baseURL}${posterWidth}${posterFilePath}`} alt='movie poster'/>
            <section className='details'>
                    <h3>{props.popularResults.title}</h3>
                    <h3>{props.popularResults.vote_average}</h3>
                </section>
            <div className ="image-overlay">
            <p className ="overview"><span className="overview_title">Overview:</span>{props.popularResults.overview}</p>
            </div>
        </div>
        </>
    );
}
