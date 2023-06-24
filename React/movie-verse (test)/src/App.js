import React from 'react'
// import { Route , Routes } from 'routes'--> this is your mistake 
import Home from './Pages/Home';
import {  BrowserRouter, Route , Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Account from './Pages/Account';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <>
     <BrowserRouter>
    <AuthContextProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="Login" element={<Login />}/>
      <Route path="Signup" element={<Signup />}/>
      <Route path="Account" element={<Account />}/>
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