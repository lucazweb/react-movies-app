import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetailView from './pages/MovieDetailView';

import './css/global';
import { Container, SearchForm, Tags, Pagination, MovieDetail, RatingBox } from './css/main';

export default class App extends Component{
  constructor(){
    super();
    state: {};
  }

  render(){
    return (
      <Router> 
        <Container>
          <div className="header"> 
              <h1> Movies </h1>
          </div>          
          
          <Route exact path='/' component={Home} /> 
          <Route path='/movie/:id' component={MovieDetailView} />
        </Container>
      </Router>
    )
  }
}



