import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MoviesBox, Tags } from '../css/main';
import imgBaseUrl from '../services/imgBaseUrl';

const FormatDate = (string) => {
    return string.split('-').reverse().join('/');
}

const VoteAverage = (vote_average) => {
    return vote_average * 10
}

const MovieBox = ({movie, genres}) => (
    <MoviesBox>
        <div className="movie"> 
            <div className="thumb"> <Link to={`/movie/${movie.id}`}><img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="" /> </Link></div>
            <div className="movie-info">
                <div className="movie-header"> 
                <h2>{movie.title}</h2>
                <div className="rating"> {VoteAverage(movie.vote_average)}%</div>
                <span className="date">{FormatDate(movie.release_date)}</span>
                </div>
                <div className="movie-synopsis"> {movie.overview} </div>
                <Tags> 
                    {
                        genres.map(genre => (
                            <div key={genre.id} className="tag">{genre.name}</div>
                        ))
                    }
                </Tags>
            </div>
        </div>
    </MoviesBox>
);

export default MovieBox;