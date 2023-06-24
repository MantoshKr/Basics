import React from 'react'
import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <>
//     <div className='grid gap-4 grid-cols-3 grid-rows-1'>
// MovieVerse

// <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'> SIGN IN</button>
// <button className='transition duration-0 ease-in-out bg-blue-500 hover:bg-blue-700 hover:duration-700 text-white font-bold py-2 px-4 rounded-full' >SIGN UP</button>

// </div>
//     </>
//   )
// }

// export default Navbar



const Navbar = () => {
  return (
    <div className="fixed bg-white flex item-center justify-between p-1 z-[100] w-full">
    <Link to="/">
      <h1 className="text-yellow-600 font-bold text-2xl">MovieVerse</h1>
    </Link>
      <div>
        <Link to="/login">
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2">
          SIGN IN
        </button>
        </Link>
        <Link to="/signup">
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded">
          SIGN UP
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;



// const Navbar = () => {
//   return (
//     <>
//       <nav className="bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <span className="text-white font-semibold text-lg">MovieVerse</span>
//             </div>
//             <div className="flex space-x-4">
//               <button className="bg-red-600 text-white px-4 py-2 rounded">SIGN IN</button>
//               <button className="bg-gray-900 text-white px-4 py-2 rounded">SIGN UP</button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

