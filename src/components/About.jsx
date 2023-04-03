import React from 'react'
import fb from '../imagess/facebook.png'
import ig from '../imagess/instagram.png'
import twt from '../imagess/twitter-sign.png'
import '../styles/Abut.css'
const About = () => {
  return (
    <div className="Abut">
      <div className="poster">
        <img src="https://lh3.googleusercontent.com/L4haMN-TsQNGw4OkWKqEbmOU5e6giwJ0_wLgv_8QE05kOladEeYRHBOM2TpCilDdpcsprB8Y8E2Z7_LZQq0eOmf-vy4SAV9cRJxP96IQumGOKT4hIatk=s3000-rw" alt="" />
      </div>
      <div className="abt">
        <div >
          <h1>
            About YouTube
          </h1>
          <p >
            Our mission is to give everyone a voice and show them the world.
          </p>
          <p >
            We believe that everyone deserves to have a voice, and that the world is a better place when we listen, share and build community through our stories.
          </p>
        </div>
      </div>
      <div className="foot">
      
       <div style={{fontWeight:"800"}} >Contact</div> 
       <div>
       <a href="https://www.instagram.com/youtube/?hl=en">
          <img src={ig} alt="" />
        </a>
        <a href="https://www.facebook.com/youtube/">
          <img src={fb} alt="" />
        </a>
        <a href="https://twitter.com/YouTube?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <img src={twt} alt="" />
        </a>
       </div>
       
      </div>
     
    </div>
  )
}

export default About
