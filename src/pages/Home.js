import React, { Component, Fragment } from 'react';
import { Container, SearchForm, Tags, Pagination, MovieDetail, RatingBox } from '../css/main';
import MovieBox from '../components/MovieBox';

export default class Home extends Component {

    constructor(){
        super();
        this.state = {};
    }
    

    render(){
        return(
            <Fragment> 

                <SearchForm> 
                    <input className="search" placeholder="Busque um filme por nome, ano ou gênero..." />
                </SearchForm>

                <MovieBox />

                <Pagination> 
                    <div class="page">1</div>
                    <div class="page">2</div>
                    <div class="page active">3</div>
                    <div class="page">4</div>
                    <div class="page">5</div>
                </Pagination>
            </Fragment>            
        );
    }

}