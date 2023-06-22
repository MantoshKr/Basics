// import React, { useEffect, useState } from 'react'

// import axios from 'axios';
// import Movie from './Movie';

// const Row = (fetchUrl) => {
// const [movies, setMovies] = useState([fetchUrl])  ;

// useEffect(() => {
//     axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6d047f7208cab6f0af5d4d6c72584191&language=en-US&page=1')
//     .then((res) => {
//         console.log(res.data.results)
//         setMovies(res.data.results)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }, [])
 

//   return (
//     <div>
//    {movies.map((movie, index) => (
//          <Movie key={index} movie={movie} />
//          ))}


//     </div>
//   )
// }

// export default Row

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Movie from './Movie';
// // import { mdchevronright } from 'react-ionicons/lib/MdChevronRight';
// // import { mdchevronleft } from 'react-ionicons/lib/MdChevronLeft';
// // import { MdChevron } from 'react-ionicons/lib/MdChevron';
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';




// const Row = (rowID , fetchUrl) => {
//   const [movies, setMovies] = useState([]);

//   useEffect((fetchUrl) => {
//     axios
//       .get(
//         'https://api.themoviedb.org/3/movie/popular?api_key=6d047f7208cab6f0af5d4d6c72584191&language=en-US&page=1'
//       )
//       .then((res) => {
//         console.log(res.data.results);
//         setMovies(res.data.results);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [fetchUrl]);


//   const slideleft = () => {
//     document.getElementById('slider'+ rowID).scrollLeft -= 100;
//     };

//     const slideright = () => {
//     document.getElementById('slider'+ rowID).scrollLeft += 100;
//     };

//   return (
//     <div className="flex flex-wrap justify-center">
//     <MdChevronLeft onClick={slideleft} />
   
   
    
//     <div className="flex flex-wrap justify-center">
//       {movies.map((movie, index) => (
//         <Movie key={index} movie={movie} />
//       ))}
//     </div>

//     <MdChevronRight onClick={slideright} />
//     </div>
//   );
// };

// export default Row;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Movie from './Movie';
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

// const Row = ({ rowID, fetchUrl , title }) => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     axios
//       .get(fetchUrl)
//       .then((res) => {
//         console.log(res.data.results);
//         setMovies(res.data.results);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [fetchUrl]);

//   const slideLeft = () => {
//     document.getElementById('slider' + rowID).scrollLeft -= 100;
//   };

//   const slideRight = () => {
//     document.getElementById('slider' + rowID).scrollLeft += 100;
//   };

//   return (
//     <div className="flex flex-wrap justify-center">
//       <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
//           size={40} />
   
//       <div  id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
//         {movies.map((movie, index) => (
//           <Movie key={index} movie={movie} />
//         ))}
//       </div>

//       <MdChevronRight onClick={slideRight}  className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
//           size={40} />
//     </div>
//   );
// };

// export default Row;





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({ rowID, fetchUrl, title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fetchUrl]);

  const slideLeft = () => {
    document.getElementById('slider' + rowID).scrollLeft -= 500;
  };

  const slideRight = () => {
    document.getElementById('slider' + rowID).scrollLeft += 500;
  };

  return (
    <>
     <h2 className='text-black font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
  
      <MdChevronLeft
        onClick={slideLeft}
        className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
      />
   
      <div
        id={'slider' + rowID}
        className='w-full h-full whitespace-nowrap scroll-smooth scrollbar-hide relative overflow-x-hidden '
      >
        {movies.map((item, id) => (
          <Movie key={id} item={item} />
        ))}
      </div>

      <MdChevronRight
        onClick={slideRight}
        className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
      />
    </div>
    </>
  );
};

export default Row;
