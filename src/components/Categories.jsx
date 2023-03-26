import React from 'react'
import '../styles/categories.css'
let Links=[{links:"All"},{links:"sitcoms"},{links:"anime"},{links:"sports"},{links:"movies"},{links:"science"},{links:"react"},{links:"javascript"},{links:"India"},{links:"cobie sm"},]
const Categories = () => {
  return (
    <div className='categories' style={{position:"fixed",top:"56px",backgroundColor:"white",width: "-webkit-fill-available",left:"227px"}}>
        <ul>
      {Links.map((data)=>
        <li><a href="" className='anc'>{data.links}</a></li>
    
    )}</ul>
    </div>
  )
}

export default Categories
