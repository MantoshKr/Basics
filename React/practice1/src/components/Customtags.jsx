import React from 'react'
import './Customtags.css'



function charli(children) {
    return (
        <div className="charli">
            {children}
        </div>  
    )
}


function ritu(children) {
    return (
        <div className="ritu">
            {children}
        </div>
    )
}


const customtags = () => {
  return (
    <charli>hello
    <br/>
    <ritu>hello again</ritu>
    </charli>
  )
}

export default customtags