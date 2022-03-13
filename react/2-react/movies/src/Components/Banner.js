import {movies} from './getMovies';

//rcc for adding class component 
import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
      let movie = movies.results[0] //moives is an array constist of around 20 movies
    //   movie=''// emtying the movie to see if loading image is working or not
    return (
        <>
        {
            //we area using ternary operator in case if we didn't have movies data then it will show loading icon that means movies is coming from server
            // movies==''? loading Icon : movies, if movies is emty then laoding icon or if movies present then show movies
            //== is same as === in react
            movie===''?
            <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>:
        <div className="card banner-card" > 
        <img src={"https://ww.123movie.date/images/tt14442328/backdrop.jpg"} alt={movie.title} className="card-img-top banner-img" />
        {/* <div className="card-body"> */}
            <h1 className="card-title banner-title">{movie.title}</h1>
            <p className="card-text banner-text">{movie.overview}</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        {/* </div> */}
        </div>
        }
        </>
    )

    //how css is working so we are using bootstrap and getbootsraps link is in index.html file in public folder
    //and other css class that we are defining its code is written in App.css like banner-card
  }
}
