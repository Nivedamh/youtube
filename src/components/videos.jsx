import '../styles/videos.css'
import { useState, useEffect } from "react";
// import icon from "../images/videoIcon.png"
const Videos = () => {
    let [video, setVideo] = useState([
        {
            thumnail: "https://i.ytimg.com/vi/zSb2bnZLnoo/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLA83ukZgMqp6RTqxQKfKJUPYRDo4w",
            title: "https://www.youtube.com/watch?v=zSb2bnZLnoo",
            channel: "https://www.youtube.com/@soulfulmusic3239",
            views: "55M views"
        },
        {
            thumnail: "https://i.ytimg.com/vi/-uY_ArLuFqI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLAGioC1f624gVsS5ZUNqwAwrBKOwA",
            title: "https://www.youtube.com/watch?v=-uY_ArLuFqI",
            channel: "https://www.youtube.com/@MrHeangUpdate",
            views: "20M views"
        },
        {
            thumnail: "https://i.ytimg.com/vi/KCgYeFH78VA/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLCiYnG2UceeaLoWUielWdCzNGyy4Q",
            title: "https://www.youtube.com/watch?v=KCgYeFH78VA",
            channel: "https://www.youtube.com/@OggyHindi",
            views: "35M views"
        },
        {
            thumnail: "https://i.ytimg.com/vi/tYf0BoFe9D8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLDe7aBqBmbvln0JxMrUSpbhKTdm8w",
            title: "https://www.youtube.com/watch?v=tYf0BoFe9D8",
            channel: "https://www.youtube.com/@HombaleFilms",
            views: "13M views"
        },
        {
            thumnail: "https://i.ytimg.com/vi/_XBVWlI8TsQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLAMv28Z19hsVbfYk29ZWKMOrnr6Wg",
            title: "https://www.youtube.com/watch?v=_XBVWlI8TsQ",
            channel: "https://www.youtube.com/@UVCreations",
            views: "55k views"
        },
        {
            thumnail: "https://i.ytimg.com/an_webp/MUMCZZl9QCY/mqdefault_6s.webp?du=3000&sqp=CPL59qMG&rs=AOn4CLBx3nMRrBRPB55eFgjUrfImKnLkHA",
            title: "https://www.youtube.com/watch?v=MUMCZZl9QCY",
            channel: "https://www.youtube.com/@officialenglandcricket",
            views: "23M views"
        },
        {
            thumnail: "https://i.ytimg.com/vi/2XUS5MFLxeM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLA4a69oSiGASu8Qxh0x7HDqTkfV5g",
            title: "https://www.youtube.com/watch?v=2XUS5MFLxeM",
            channel: "https://www.youtube.com/@soulfulmusic3239",
            views: "1.5M views"
        },
        {
            thumnail: "https://i.ytimg.com/vi/NeXbmEnpSz0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLDXFhYoSM04TXuwnPCorYAHkeregw",
            title: "https://www.youtube.com/watch?v=NeXbmEnpSz0",
            channel: "https://www.youtube.com/@naturebeautyworld9031",
            views: "22k views"
        },
        {
            thumnail: "https://i.ytimg.com/vi/-uY_ArLuFqI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLAGioC1f624gVsS5ZUNqwAwrBKOwA",
            title: "https://www.youtube.com/watch?v=-uY_ArLuFqI",
            channel: "https://www.youtube.com/@rcstatus.1313",
            views: "1.8M views"
        },
        {
            thumnail: "https://i.ytimg.com/vi/TtoJDXPrdig/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLBaZ3QkO_kmgNu0F0VhgRvjODBeJA",
            title: "https://www.youtube.com/watch?v=TtoJDXPrdig",
            channel: "https://www.youtube.com/@ahaTelugu",
            views: "10M views"
        },
        {
            thumnail: "https://i.ytimg.com/vi/kcOpIV0tMdI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLC8IUSSNkg1Hk2F-8oyXyOzUPLPow",
            title: "https://www.youtube.com/watch?v=kcOpIV0tMdI",
            channel: "https://www.youtube.com/@LIV_Music",
            views: "28k views"
        },
        {
            thumnail: "https://i.ytimg.com/vi/0n7AWxYCj9I/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLAULCqvyc_jgLcGAVu5BnqNLqWkaQ",
            title: "https://www.youtube.com/watch?v=0n7AWxYCj9I",
            channel: "https://www.youtube.com/@saregamasouth",
            views: "1.4M views"
        },
    ])
    let [shorts, setShort] = useState([
        {
            thumnail: "https://i.ytimg.com/vi/bSWPuIxp7Vo/oar2.jpg?sqp=-oaymwElCJUDENAFSFryq4qpAxcIARUAAIhC2AEB4gEKCBwQAhgGIAE4AQ==&rs=AOn4CLBIe1A2AGtOZD0h6VEkzmghQAw2PA",
            title: "https://www.youtube.com/shorts/bSWPuIxp7Vo",
            views: "2M views"
        },
        {
            thumnail: "https://i.ytimg.com/vi/dFg8Nu2X5Mo/oar2.jpg?sqp=-oaymwElCJUDENAFSFryq4qpAxcIARUAAIhC2AEB4gEKCBwQAhgGIAE4AQ==&rs=AOn4CLChTZy8W8MDW_frFpNPpYzZEXmOKw",
            title: "https://www.youtube.com/shorts/dFg8Nu2X5Mo",
            views: "26M views"
        },
        {
            thumnail: "https://i.ytimg.com/vi/2pc-eHxJR48/oar2.jpg?sqp=-oaymwElCJUDENAFSFryq4qpAxcIARUAAIhC2AEB4gEKCBwQAhgGIAE4AQ==&rs=AOn4CLBZYYGjZ9tTeoN8kjU3GOo0diJ9gA",
            title: "https://www.youtube.com/shorts/2pc-eHxJR48",
            views: "1.8M views"
        },
        {
            thumnail: "https://i.ytimg.com/vi/4NSAp8YlNLA/oar2.jpg?sqp=-oaymwElCJUDENAFSFryq4qpAxcIARUAAIhC2AEB4gEKCBwQAhgGIAE4AQ==&rs=AOn4CLCF7h5MIyvtfD_s7aBVoC6_JAaR0g",
            title: "https://www.youtube.com/shorts/4NSAp8YlNLA",
            views: "25k views"
        },
        {
            thumnail: "https://i.ytimg.com/vi/WmzkeTMIZ-c/oar2.jpg?sqp=-oaymwElCJUDENAFSFryq4qpAxcIARUAAIhC2AEB4gEKCBwQAhgGIAE4AQ==&rs=AOn4CLDQJCfL8N2YgsZwJkLAd8W23hiEKQ",
            title: "https://www.youtube.com/shorts/WmzkeTMIZ-c",
            views: "20M views"
        },
        {
            thumnail: "https://i.ytimg.com/vi/BFC0z_z0nck/oar2.jpg?sqp=-oaymwElCJUDENAFSFryq4qpAxcIARUAAIhC2AEB4gEKCBwQAhgGIAE4AQ==&rs=AOn4CLAOSaqp6ZoV0rx4BOgW6LQZ0xuQOg",
            title: "https://www.youtube.com/shorts/BFC0z_z0nck",
            views: "2.2M views"
        }
    ])
    useEffect(() => {
        let fetchData = async () => {
            let responce = await fetch('http://localhost:4000/videos')
            let data = await responce.json()
            setVideo(data)
            
        }
        fetchData()
    },[])

    let removeVideo = (id, name) => {
        fetch(`https://localhost:4000/videos/${id}`, { 
            method: 'DELETE'
        })
        alert(`${name}video got removed`)
    }

        // its deleted videos temporarly
        // let result = video.filter((x) => x.id !== id)
        // setVideo(result)             
        // alert(`${name} video got removed`)
    

    return (
        <div className="videos">
            <h1>Featured Videos</h1>
            <div className="videoData">
                {video.map((data) => {
                    return (
                        <div className="video">
                            <img src={data.thumnail} alt="" />
                            <div className="videoDetails">
                                <h3>{data.title}</h3>
                                <p>{data.channel}</p>
                                <p>{data.views}</p>
                                <a href="" onClick={() => removeVideo(data.id, data.channel)}>Remove</a>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className="shorts">
                <h1>Shorts</h1>
                {shorts.map((data) => {
                    return (
                        <div className="stort">
                            <img src={data.thumnail} alt="" />
                            <h3>{data.title}</h3>
                            <p>{data.views}</p>
                        </div>
                    )
                })}

            </div>
        </div>


    );
}

export default Videos;