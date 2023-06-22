const api_key=process.env.REACT_APP_API_KEY;


// const api = {  
//     fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
//     fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
//     fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
//     fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
//     fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
//     fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
//     fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
//     };


const api = {
    apiPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
    apiTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    apiTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=2`,
    apiHorror: `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=horror&page=1&include_adult=false`,
    apiUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
  };

    export default api;