import React, { Component } from 'react';
import api from '../services/api';
import apiKey from '../services/key';
import {Tags, MovieDetail, RatingBox } from '../css/main';

export default class MovieDetailView extends Component{
    constructor(){
        super();
        this.state = {
            movie: {}
        };
    }

    componentDidMount(){
        this.handleMovie();
    }

    handleMovie = async () => {
        try{
            const response = await api.get(`/movie/${this.props.match.params.id}?${apiKey}`)
            this.setState({movie: response.data});
            console.log(response.data);
        } catch(err){
            console.log(err);
        } finally{
            // loading state off
        }
    }

    render(){
        return(
            <MovieDetail> 
                <div className="detail-header"> 
                <h2 className="movie-title"> {this.state.movie.title} </h2>
                <div className="date">25/10/2017</div>
                </div>
                <div className="detail-body"> 
                <div className="infos">
                    <div className="detail-info">
                    <h3> Sinopse </h3>
                    <p>{this.state.movie.overview} </p>
                    </div>          
    
                    <div className="detail-info topics">
                    <h3> Informações </h3>
    
                    <div className="info-topics"> 
                        <div className="info"> 
                        <h4> Situação </h4>
                        <p> Lançado </p>
                        </div>
                        
                        <div className="info"> 
                        <h4> Idioma </h4>
                        <p> Lançado </p>
                        </div>
    
                        <div className="info"> 
                        <h4> Duração </h4>
                        <p> Lançado </p>
                        </div>
    
                        <div className="info"> 
                        <h4> Orçamento </h4>
                        <p> Lançado </p>
                        </div>
    
                        <div className="info"> 
                        <h4> Receita </h4>
                        <p> Lançado </p>
                        </div>
    
                        <div className="info"> 
                        <h4> Lucro </h4>
                        <p> Lançado </p>
                        </div>                
                    </div>
    
                    </div>  
    
                    <Tags> 
                        <div className="tag">Ação</div>
                    </Tags>  
    
                    <RatingBox>
                        <div className="rating"> {this.state.movie.vote_average * 10}%</div>                
                    </RatingBox>

                </div>
                    <div className="detail-image"> 
                    <img src={`http://image.tmdb.org/t/p/w342/${this.state.movie.poster_path}`} alt="" />
                    </div>                 
                </div>
                <div className="detail-trailer"> </div>
            </MovieDetail>              
        )
    }
}