import React, { Component } from 'react'
import {movies} from './getMovies'

//from this we will show all movies in grid view just like in netflix/prime UI
//we will get all movies if movie is empty then we will show loader searching icon 
//or else we will map through the movies array and return every movie in card view with modified styling

export default class Movies extends Component {
  render() {
      let movie = movies.results //getting all movies as array, result is nested array in movies, 
    return (
        <>
      {
          //using ternary operator to check if movie we got some movies or not
          movie.length===0?
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div> :
          <div>
              <h3 className='text-center'><strong> Trending </strong></h3>
              <div className='movies-list'>
                  {
                      movie.map((movieObj)=>( //Note carefully not curly braces use only open brackets in writing map/filter function
                        <div className="card movies-card" > 
                        <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt={movieObj.title} className="card-img-top movies-img" />
                        {/* <div className="card-body"> */}
                            <h5 className="card-title movies-title">{movieObj.original_title}</h5>
                            {/* <p className="card-text movies-text">{movieObj.overview}</p> */}
                            <div className='button-wrapper' style={{display:'flex',width:'100%',justifyContent:'center'}}>                        
                                <a href="#" class="btn btn-primary movies-button">Add to favourites</a>
                            </div>
                        {/* </div> */}
                        </div>
                     ))
                  }
              </div>
          </div>
      }
      </>
    )
  }
}
