import YTLogo from '../images/youtube_socialnetwork_19998.png'
import notification from '../images/subscribe_icon_159165.png'
import video from '../images/plus_video_icon_215314.png'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">

            <div className="logo">
                <img width={110} height={90} src={YTLogo} alt="" />
            </div>
            <div className="searchBar">
                <input type="text" placeholder='search' />
            </div>
            <div className="navLinks">
                    <Link to="/">Home</Link>
                    <Link to="/add-video">Add Video</Link>

                </div>
            <div className="userOption">
                <img width={35} src={video} alt="" />
                <img width={35} src={notification} alt="" />

                <h4>N</h4>

                
            </div>
            



        </div>

    )
}
export default Navbar;