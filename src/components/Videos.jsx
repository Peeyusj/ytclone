import React, { useEffect, useState } from "react";
import '../styles/video.css'
import Videocard from "./Videocard";
const Videos = () => {
 
  const [videodata, setVideoData] = useState([]);
  let dislike = (id) => {
    setVideoData(videodata.filter((item) => item.id !== id));
  };
    useEffect(()=>{
      let fetchdata=async()=>{
     let response= await fetch("http://localhost:3004/ytdata/")
     let data=await response.json()
     setVideoData(data);
      }
      fetchdata()
    },[])

  return (
    <div>
      <div
        className="ytv"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifCcontent: "center",
          marginLeft: "274px",
          position: "absolute",
          top: "112px",
          zIndex: "-20",
        }}
      >
       <Videocard videodata={videodata} dislike={dislike}/>
      {/* {<Videocard videodata={videodata.filter((data)=>((parseInt(data.views)))>=2)} dislike={dislike}/>} */}


      </div>
    </div>
  );
};

export default Videos;
