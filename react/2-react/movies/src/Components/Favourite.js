import React, { Component } from 'react'
import {movies} from './getMovies'


export default class Favourite extends Component {

  constructor(){
    super();
    this.state={
      genres:[],
      currgen:'All Genres'
    }
  }


  render() {
    const movie = movies.results;
    console.log(movie);
    let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
    27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
    
    let temp = [];
    movie.forEach((movieObj)=>{
      if(!temp.includes(genreids[movieObj.genre_ids[0]])){
        temp.push(genreids[movieObj.genre_ids[0]]);
      }
    })

    temp.unshift('All Genres')


    return (
      
      <>
        <div className='main'>
          <div className='row'>
            <div className='col-3'>
            <ul className = "list-group favourites-genres">
              {
                temp.map((genre)=>(
                  this.state.currgen===genre?
                  <li className='list-group-item' style={{background:'#3f51b5',color:'white',fontWeight:'bold'}}>{genre}</li>
                  :
                  <li className='list-group-item' style={{background:'white',color:'#3f51b5'}}>{genre}</li>
                ))
              }
            </ul>
          </div>

          <div className='col-9 favourite-table'>
              <div className='row'>
                <input type="text" className='input-group-text col '/>
                <input type="number" className='input-group-text col '/>
                
              </div>
              <div className='row'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Genre</th>
                      <th scope="col">Popularity</th>
                      <th scope="col">Rating</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      movie.map((movieObj)=>(
                        <tr>
                          <td><img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} style={{width:'5rem'}} alt={movieObj.title}></img></td>
                          <td>{genreids[movieObj.genre_ids[0]]}</td>
                          <td>{movieObj.popularity}</td>
                          <td>{movieObj.vote_average}</td>
                          <td><button type="button" class="btn btn-danger">Delete</button></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
         
          </div>
          </div>
        </div>
      </>
      
    )
  }
}
