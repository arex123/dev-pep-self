import React, { Component } from 'react'
// import {movies} from './getMovies'
import axios from 'axios'
//from this we will show all movies in grid view just like in netflix/prime UI
//we will get all movies if movie is empty then we will show loader searching icon 
//or else we will map through the movies array and return every movie in card view with modified styling

export default class Movies extends Component {

    constructor(){
        super();
        this.state={
            hover:'',
            parr: [1],
            currPage:1,
            movies:[]
        }
    }

  async componentDidMount(){ //for calling apis or doing some extra task which takes time
    const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=0daade82f51a5cfbe4135d2fef442e86&page=${this.state.currPage}`)
    console.log("componentdidmount");

    this.setState({

        movies : [...res.data.results]
    }
    )


    console.log(res);
  }
  render() {
      console.log("render");
    //   let movie = movies.results //getting all movies as array from static file, result is nested array in movies, 
    return (
        <>
      {
          //using ternary operator to check if movie we got some movies or not
          this.state.movies.length===0?
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div> :
          <div>
              <h3 className='text-center'><strong> Trending </strong></h3>
              <div className='movies-list'>
                  {
                      this.state.movies.map((movieObj)=>( //Note carefully not curly braces use only open brackets in writing map/filter function
                        <div className="card movies-card" onMouseEnter={()=>this.setState({hover:movieObj.id})} onMouseLeave={()=>this.setState({hover:''})}> 
                        <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt={movieObj.title} className="card-img-top movies-img" />
                        {/* <div className="card-body"> */}
                            <h5 className="card-title movies-title">{movieObj.original_title}</h5>
                            {/* <p className="card-text movies-text">{movieObj.overview}</p> */}
                            <div className='button-wrapper' style={{display:'flex',width:'100%',justifyContent:'center'}}>                        
                            {
                                this.state.hover == movieObj.id && 
                                <a className="btn btn-primary movies-button">Add to favourites</a>
                            }
                            </div>
                        {/* </div> */}


                        </div>
                     ))
                  }
              </div>
                 <div style={{display:'flex', justifyContent:'center'}}>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">

                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            {
                                this.state.parr.map((value)=>(
                                    <li className="page-item"><a className="page-link" href="#">{value}</a></li>
                                ))
                            }
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>

                        </ul>
                    </nav>
                </div>
          </div>
      }
      </>
    )
  }
}
