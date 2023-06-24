import React from 'react'
import Main from '../components/Main'
import api from '../Api'
import Row from '../components/Row'

const Home = () => {
  return (
    <>

    <Main />
    <Row rowID='5' title='Upcoming' fetchUrl={api.apiUpcoming}  />
    <Row rowID='1' title='Popular' fetchUrl={api.apiPopular} />
    <Row rowID='2' title='TopRated' fetchUrl={api.apiTopRated} />
    <Row rowID='3' title='Trending' fetchUrl={api.apiTrending}  />
    <Row rowID='4' title='Horror' fetchUrl={api.apiHorror} />
   
    </>
  )
}

export default Home

// const api = {
//   apiPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
//   apiTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
//   apiTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
//   apiHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
//   apiUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
// };
//
// const api = {  
//   fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
//   fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
//   };
