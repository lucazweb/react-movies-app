import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
import api from '../services/api';
import apiKey from '../services/key';
import FormatDate from '../helpers/FormatDate';

import {Tags, MovieDetail, RatingBox } from '../css/main';
import imgPlaceholder from '../assets/placeholder_movie.gif';

export default class MovieDetailView extends Component{
    constructor(){
        super();
        this.state = {
            movie: {},
            genres: []
        };
    }

    componentDidMount(){
        this.handleMovie();
    }

    handleMovie = async () => {
        try{
            const response = await api.get(`/movie/${this.props.match.params.id}?${apiKey}&language=pt-BR`)
            this.setState({movie: response.data, genres: response.data.genres});
            console.log(response.data);
        } catch(err){
            console.log(err);
        } finally{
            // loading state off
            this.handleVideos();
        }
    }

    handleVideos = async () => {
        try{
            const response = await api.get(`/movie/${this.props.match.params.id}/videos?${apiKey}&language=pt-BR`)
            //this.setState({movie: response.data});
            console.log(response.data);
        } catch(err){
            console.log(err);
        } finally{
            // loading state off
        }        
    }

    getProfit = (revenue, budget) => {
        return revenue - budget;
    }

    translateStatus = (status) => {
        if(status === "Released"){
            return "Lançado"
        }
    }

    render(){
        return(
            <MovieDetail> 
                <div className="detail-header"> 
                <h2 className="movie-title"> {this.state.movie.title} </h2>
                <div className="date">{FormatDate(this.state.movie.release_date)}</div>
                </div>
                <div className="detail-body"> 
                <div className="infos">
                    <div className="detail-info">
                    <h3> Sinopse </h3>
                    <p>{this.state.movie.overview ? this.state.movie.overview : 'Não disponível'} </p>
                    </div>          
    
                    <div className="detail-info topics">
                    <h3> Informações </h3>
    
                    <div className="info-topics"> 
                        <div className="info"> 
                        <h4> Situação </h4>
                        <p> {
                                this.state.movie.status ? this.translateStatus(this.state.movie.status) : 'Não disponível'
                            } </p>
                        </div>
                        
                        <div className="info"> 
                        <h4> Idioma </h4>
                        <p> Lançado </p>
                        </div>
    
                        <div className="info"> 
                        <h4> Duração </h4>
                        <p> {this.state.movie.runtime ? `${this.state.movie.runtime} min` : 'Não disponível' }  </p>
                        </div>
    
                        <div className="info"> 
                            <h4> Orçamento </h4>
                            <p> {this.state.movie.budget ? <CurrencyFormat value={this.state.movie.budget} thousandSeparator={true} prefix={'$ '} displayType="text" /> : 'Não disponível' } </p>
                        </div>
    
                        <div className="info"> 
                        <h4> Receita </h4>
                        <p> {this.state.movie.revenue ? <CurrencyFormat value={this.state.movie.revenue} thousandSeparator={true} prefix={'$ '} displayType="text" /> : 'Não disponível' } </p>
                        </div>
    
                        <div className="info"> 
                        <h4> Lucro </h4>
                        <p> {
                                ((this.state.movie.budget) && (this.state.movie.revenue)) ? <CurrencyFormat value={this.getProfit(this.state.movie.revenue, this.state.movie.budget)} thousandSeparator={true} prefix={'$ '} displayType="text" /> : 'Não disponível'
                            } 
                        </p>
                        </div>                
                    </div>
    
                    </div>  
    
                    <Tags> 
                    {
                        this.state.genres.map(genre => (
                            <div key={genre.id} className="tag">{genre.name}</div>
                        ))
                    }
                        
                    </Tags>  
    
                    <RatingBox>
                        <div className="rating"> {this.state.movie.vote_average * 10}%</div>                
                    </RatingBox>

                </div>
                    <div className="detail-image"> 
                    {
                        this.state.movie.poster_path ? (<img src={`http://image.tmdb.org/t/p/w342/${this.state.movie.poster_path}`} alt="" />) : (<img src={imgPlaceholder} alt="" />)
                    }                    
                    
                    </div>                 
                </div>
                <div className="detail-trailer"> </div>
            </MovieDetail>              
        )
    }
}