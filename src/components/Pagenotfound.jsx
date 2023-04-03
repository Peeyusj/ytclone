import { Link, NavLink, to } from "react-router-dom"
import '../styles/pnf.css'
import logo1 from '../imagess/ytl.png'

const Pagenotfound = () => {

    return (
        <div style={{
            position: "absolute", top: "280px", display: "flex", justifyContent: "center",
            alignItems: "center", flexDirection: "column", width: "70%", marginLeft: "240px"
        }}>
            <div className="img">
                <img src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png" alt="" />
            </div>
            <div className="txt" style={{ marginTop: "20px", textAlign: "center" }}>
                <div>
                    This page isn't available. Sorry about that.
                </div>
                <div>
                    Try searching for something else.
                </div>
            </div>
            <div className="logo" style={{marginRight:"9px"}}>
<img style={{width:"72px",marginRight:"-19px"}} src={logo1} alt="" /><h3>Youtube <sup style={{fontWeight:"lighter",fontSize:"11px"}}>IN</sup></h3>
      </div>
            <div className="bttn">
                <Link to="/"><button className="btnpnf"
                    style={{
                        marginTop: "10px",
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        width: "130px",
                        height: "32px",
                        borderRadius: "7px",
                        marginLeft:"3px",
                        cursor:"pointer"
                        
                    }}
                >Go Back to Home</button></Link>
            </div>
        </div>
    );
};
export default Pagenotfound