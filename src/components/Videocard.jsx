import React from 'react'
import '../styles/video.css'

const Videocard = (props) => {
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
       {props.videodata.map((data) => (
          <div style={{ margin: "10px" }}>
            <div className="thumbnail">
              <img
              className="viim"
                src={data.thumbnail}
                style={{
                  width: "270px",
                  height: "166px",
                  borderRadius: "12px",
                  
                }}
                alt=""
              />
            </div>
            <div className="title" style={{ fontWeight: "bold" }}>
              {data.title}
            </div>
            <div className="channelname">{data.channelName}</div>
            <div className="views">
              {data.views}
              <a
                style={{ marginLeft:"140px",cursor:"pointer" }}
                onClick={() => props.dislike(data.id)}
              >
                Not Intrested
              </a>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Videocard
