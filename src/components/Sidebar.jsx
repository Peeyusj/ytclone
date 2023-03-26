import React from 'react'
import '../styles/sidebar.css'

let Links=[{image:"./images/trendingtopic.png",links:"Trending"},{image:"./images/bag.png",links:"Shopping"},{image:"./images/bulb.png",links:"Learning"},
{image:"./images/gamecontroller.png",links:"Gaming"},{image:"./images/live.png",links:"Live"},{image:"./images/movieclapperopen.png",links:"Movie"},{image:"./images/music.png",links:"Music"},
{image:"./images/newspaper.png",links:"News"},{image:"./images/trophy.png",links:"Sports"},{image:"./images/cloakroom.png",links:"Faishon & Beauty"},]

let a="../imagess/gamecontroller.png";


export default function Sidebar() {
  return (
    <div className='sidebar'>
     <div className="sidebarLinks">
      <ul>
        {
          Links.map((data)=>
            <li> <img style={{width:"20px",marginRight:"3px",marginLeft:"5px"}} src={data.image} alt="" /><a href="http://"  target="_blank">{data.links}</a></li>
)

        }
        </ul>
     </div>
    </div>
  )
}

