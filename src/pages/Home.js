import React, { Component, Fragment } from 'react';
import { Container, SearchForm, Tags, Pagination, MovieDetail, RatingBox } from '../css/main';
import MovieBox from '../components/MovieBox';
import api from '../services/api';
import apiKey from '../services/key';

export default class Home extends Component {

    constructor(){
        super();
        this.state = {
            movies: [],
            genres: []
        };
    }
    
    componentDidMount(){
        // fetch(`https://api.themoviedb.org/3/movie/550?${apiKey}`)
        //     .then(response => response.json())
        //     .then(data => console.log(data));
        //this.handleQuery();
        this.handleGenres();
    }

    handleQuery =  async (keyword) => {
        try{
            const response = await api.get(`/search/movie?query=${keyword}&${apiKey}&page=1`);
            console.log(response.data);
            this.setState({movies: response.data.results})
        }catch(err){
            console.log(err);
        } finally{

        }
    }

    handleGenres = async (id) => {
        try {
            const response = await api.get(`/genre/movie/list?${apiKey}`);
            console.log(response);
            this.setState({genres: response.data.genres});
        } catch(err){
            console.log(err);
        }
    }

    getMovieGenres = (genre_ids) => {
        const movieGenres = [];
        genre_ids.forEach((genre) => {
            this.state.genres.forEach((g) => {
                if(g.id === genre){
                    movieGenres.push(g);
                }
            })
        });

        return movieGenres;
    }

    render(){
        return(
            <Fragment> 

                <SearchForm> 
                    <input onChange={e => this.handleQuery(e.target.value)} className="search" placeholder="Busque um filme por nome, ano ou gênero..." />
                </SearchForm>
                {
                    this.state.movies.length > 0 && 
                    
                    <Fragment> 
                        {
                            this.state.movies.map(movie => (
                                <MovieBox key={movie.id} movie={movie} genres={this.getMovieGenres(movie.genre_ids)} />            
                            ))
                        }
                    </Fragment>
                }
                

                <Pagination> 
                    <div className="page">1</div>
                    <div className="page">2</div>
                    <div className="page active">3</div>
                    <div className="page">4</div>
                    <div className="page">5</div>
                </Pagination>
            </Fragment>            
        );
    }

}