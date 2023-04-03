import React,{useRef} from 'react'
import '../styles/addvideo.css'
import umb from '../imagess/umbrella.jpg'
import {useNavigate} from "react-router-dom"

const Addvideo = () => {
  let title=useRef("")
  let thumbnail=useRef("")
  let views=useRef("")
  let channelName=useRef("")
  let nevigate=useNavigate()

 let submit=(e)=>{
     e.preventDefault()
     let data={
         title:title.current.value,
         thumbnail:thumbnail.current.value,
         views:views.current.value,
         channelName:channelName.current.value,
     }
     fetch("http://localhost:3004/ytdata/",{method:'Post',headers:{"Content-Type":'application/json'},body:JSON.stringify(data)})
     alert("added")
     nevigate('/')
 }
  return (
    <div className='vidouter'>
    <h1>Add Videos</h1>
    <div className="formouter">
    <form className="forms" onSubmit={submit}>
      <div className="input">
        <input type="text" ref={title} placeholder='Video title' />
        <input type="text" ref={thumbnail} placeholder='video Thumbnail' />
        <input type="text" ref={views} placeholder='views' />
        <input type="text" ref={channelName} placeholder='channelName' />
      </div>
      <button>Add Video</button>
    </form>
    <div className="bgimg" style={{height:"100%"}}>
      <img style={{width:"400px", height:"100%"}}  src={umb} alt="" />
    </div>
    </div>
   
    </div>
  )
}

export default Addvideo

