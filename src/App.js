import React, { Component } from 'react';
import './css/global';
import { Container, SearchForm, MoviesBox, Pagination } from './css/main';

export default class App extends Component{
  constructor(){
    super();
    state: {};
  }

  render(){
    return (
      <Container> 
        <div className="header"> 
          <h1> Movies </h1>
        </div>
        <SearchForm> 
          <input className="search" placeholder="Busque um filme por nome, ano ou gênero..." />
        </SearchForm>

        <MoviesBox>
          <div className="movie"> 
            <div className="thumb"> <img src="https://is2-ssl.mzstatic.com/image/thumb/Video118/v4/7a/42/91/7a429166-3c7f-9a98-bd13-e1f74c0f01e3/source/1200x630bb.jpg" alt="" /></div>
            <div className="movie-info">
              <div className="movie-header"> 
                <h2>Thor: Ragnarok</h2>
                <div className="rating"> 75%</div>
                <span className="date">25/10/2017</span>
              </div>
              <div className="movie-synopsis"> Thor (Chris Hemsworth) está preso do outro lado do universo. Ele precisa correr contra o tempo para voltar a Asgard e parar Ragnarok, a destruição de seu mundo, que está nas mãos da poderosa e implacável vilã Hela (Cate Blanchett). </div>
              <div className="tags"> 
                <div className="tag">Ação</div>
                <div className="tag">Aventura</div>
                <div className="tag">Fantasia</div>
              </div>
            </div>
          </div>
          <Pagination> 
            <div class="page">1</div>
            <div class="page">2</div>
            <div class="page active">3</div>
            <div class="page">4</div>
            <div class="page">5</div>
          </Pagination>
        </MoviesBox>
        
      </Container>
    )
  }
}



