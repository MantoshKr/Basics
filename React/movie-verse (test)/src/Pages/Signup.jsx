import React from 'react'

const Signup = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center flex-row ">
    <img src="https://wwwimage-intl.pplusstatic.com/base/files/cbs_page_attribute/upsell_gen_landingpage_desktop_1440x1251_042523.jpg" alt="MovieVerse" />
    <form className="flex flex-wrap justify-center">
    <div className="flex flex-wrap justify-center">
    <label className="text-black font-bold text-2xl">Name</label>
    <input className="border-2 border-gray-500 rounded-lg" type="text" placeholder="Name" />
    </div>
    <div className="flex flex-wrap justify-center ">
    <label className="text-black font-bold text-2xl">Email</label>
    <input className="border-2 border-gray-500 rounded-lg" type="email" placeholder="Email" />
    </div>
    <div className="flex flex-wrap justify-center">
    <label className="text-black font-bold text-2xl">Choose Password</label>
    <input className="border-2 border-gray-500 rounded-lg" type="password" placeholder="Password" />
    </div>
    <div className="flex flex-wrap justify-center">
    <label className="text-black font-bold text-2xl">Confirm Password</label>
    <input className="border-2 border-gray-500 rounded-lg" type="password" placeholder="Password" />
    </div>
    <div className="flex flex-wrap justify-center">
    <button className="bg-red-600 text-white px-4 py-2 rounded">SIGN UP</button>
    </div>
    </form>
    </div>
    
    </>
  )
}

export default Signup