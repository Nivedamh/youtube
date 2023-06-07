
    import Youtube from '../images/youtube_socialnetwork_19998.png'
    import Subscribe from '../images/subscribe_icon_159165.png'
    import addvideo from '../images/plus_video_icon_215314.png'
    import  '../styles/navbar.css'
   
    function Navbar(){
    return(
        <div className="navbar">
           <div className="LOGO">
<img src={Youtube} alt="" />
           </div>
           <div className="SearchBar">
            <input type="text"  placeholder='search'/>
           
           </div>

           <div className="UserOption">
           <img height={50}width={70}src={addvideo} alt="" />
           <img height={50}width={70} src={Subscribe} alt="" />
           <h4>N</h4>

           </div>
        </div>
    )
}
export default Navbar;