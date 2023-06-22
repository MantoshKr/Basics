import React from 'react'
// import { Route , Routes } from 'routes'--> this is your mistake 
import Home from './Pages/Home';
import {  BrowserRouter, Route , Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';


const App = () => {
  return (
    <>
     <BrowserRouter>
    <AuthContextProvider>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </AuthContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App;



// import React from 'react'
// // import { Route , Routes } from 'routes'--> this is your mistake 
// import Home from './Pages/Home';
// import { BrowserRouter , Route , Routes } from 'react-router-dom';

// const App = () => {
//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />}/>
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App