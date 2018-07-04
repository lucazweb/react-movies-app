import React from 'react';
import { MoviesBox, MovieDetail, Tags, RatingBox } from '../css/main';

const MovieBox = () => (
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
            <Tags> 
            <div className="tag">Ação</div>
            <div className="tag">Aventura</div>
            <div className="tag">Fantasia</div>
            </Tags>
        </div>
        </div>
    </MoviesBox>
);

export default MovieBox;