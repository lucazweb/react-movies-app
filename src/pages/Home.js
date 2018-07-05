import React, { Component, Fragment } from 'react';
import { Container, SearchForm, Tags, Pagination, MovieDetail, RatingBox, MensagemBusca } from '../css/main';
import MovieBox from '../components/MovieBox';
import api from '../services/api';
import apiKey from '../services/key';

export default class Home extends Component {

    constructor(){
        super();
        this.state = {
            keyword: '',
            loading: false,
            movies: [],
            genres: [],
            currentPage: 1,
            totalPages: 0
        };
    }
    
    componentDidMount(){
        // fetch(`https://api.themoviedb.org/3/movie/550?${apiKey}`)
        //     .then(response => response.json())
        //     .then(data => console.log(data));
        //this.handleQuery();
        this.handleGenres();
    }

    handleQuery =  async (keyword, page = 1) => {
        this.setState({keyword: keyword});
        try{
            this.setState({loading: true})
            const response = await api.get(`/search/movie?query=${keyword}&${apiKey}&language=pt-BR&page=${page}`);
            console.log(response.data);
            this.setState({movies: response.data.results, totalPages: response.data.total_pages});
        }catch(err){
            console.log(err);
        } finally{
            this.setState({loading: false})
        }
    }

    handlePagination = async (page) => {
        try{
            const response = await api.get(`/search/movie?query=${this.state.keyword}&${apiKey}&language=pt-BR&page=${page}`);
            this.setState({movies: response.data.results});
        }catch(err){
            console.log(err);
        }
    }

    handleGenres = async (id) => {
        try {
            const response = await api.get(`/genre/movie/list?${apiKey}&language=pt-BR&page=${this.state.currentPage}`);
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
                    this.state.movies.length === 0 && <MensagemBusca> Sem resultados a exibir :| </MensagemBusca>
                }

                {
                    this.state.loading && <MensagemBusca> Carregando.. </MensagemBusca>
                }

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
                

                
                {
                    this.state.movies.length > 0 ?
                        <Pagination> 
                            <div onClick={() => this.handlePagination(2)} className="page">2</div>
                        </Pagination> : ''
                                            
                }
                    
                    
                    
                
            </Fragment>            
        );
    }

}