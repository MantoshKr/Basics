import React from 'react'

const Login = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center ">
    <img src="https://wwwimage-intl.pplusstatic.com/base/files/cbs_page_attribute/upsell_gen_landingpage_desktop_1440x1251_042523.jpg" alt="MovieVerse" className='z-[100]'/>
    </div>
    <form className="flex flex-wrap justify-center">
    <div className="flex flex-wrap justify-center">
    <label className="text-white font-bold text-2xl">Username</label>
    <input className="border-2 border-gray-500 rounded-lg" type="text" placeholder="Username" />
    </div>
    <div className="flex flex-wrap justify-center">
    <label className="text-white font-bold text-2xl">Password</label>
    <input className="border-2 border-gray-500 rounded-lg" type="password" placeholder="Password" />
    </div>
    <div className="flex flex-wrap justify-center">
    <button className="bg-red-600 text-white px-4 py-2 rounded">SIGN IN</button>
    </div>
    </form>
    </>
  )
}

export default Login