import React, { Component } from 'react';
import { Container, SearchForm, Tags, Pagination, MovieDetail, RatingBox } from '../css/main';

export default class MovieDetailView extends Component{
    constructor(){
        super();
        this.state = {};
    }
    
    render(){
        return(
            <MovieDetail> 
                <div className="detail-header"> 
                <h2 className="movie-title"> Thor: Ragnarok </h2>
                <div className="date">25/10/2017</div>
                </div>
                <div className="detail-body"> 
                <div className="infos">
                    <div className="detail-info">
                    <h3> Sinopse </h3>
                    <p>Thor (Chris Hemsworth) está preso do outro lado do universo. Ele precisa correr contra o tempo para voltar a Asgard e parar Ragnarok, a destruição de seu mundo, que está nas mãos da poderosa e implacável vilã Hela (Cate Blanchett). </p>
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
                        <div className="tag">Aventura</div>
                        <div className="tag">Fantasia</div>
                    </Tags>  
    
                    <RatingBox>
                        <div className="rating"> 87%</div>                
                    </RatingBox>

                </div>
                    <div className="detail-image"> 
                    <img src="https://is2-ssl.mzstatic.com/image/thumb/Video118/v4/7a/42/91/7a429166-3c7f-9a98-bd13-e1f74c0f01e3/source/1200x630bb.jpg" alt="" />
                    </div>                 
                </div>
                <div className="detail-trailer"> </div>
            </MovieDetail>              
        )
    }
}