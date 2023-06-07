
import { useState } from "react";
const Videos = () => {
    let [video,setVideo]= useState([
        { 
            thumbanail:"https://i.ytimg.com/vi/OuBUUkQfBYM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLByf1zSY5aLnNQQDLTMc0KMRPenzg ",
            title:" JSP Tutorial | Full Course ",
            channel:"Telusko",
            Views:"1.2M"
        },
        { 
            thumbanail:"https://i.ytimg.com/vi/JR7-EdxDSf0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAjAm-DcRSbjjLn6ZlqNH74QG0AMQ",
            title:"Hibernate Tutorial | Full Course",
            channel:"Telusko",
            Views:"1.1M views</span>"
        },
        { 
            thumbanail:"https://i.ytimg.com/vi/bpPoN7FU8eQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDS0NP7GecUdLAj2ssOJ4eiSGmaBQ",
            title:"Three Laughing Monks Story - zen motivation by Best quotes ",
            channel:"Best quotes",
            Views:"1.2K views</span>"
        },
        { 
            thumbanail:"https://i.ytimg.com/vi/GALqHBveXK4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAQ7CHgxLhckkYZuhoLOSHB_D4gUw",
            title:"Chat GPT Vs BARD | Open AI, Microsoft, Google Masth Magaa ",
            channel:"Masth Magaa",
            Views:"42K views"
        },
        { 
            thumbanail:"https://i.ytimg.com/vi/XhR2nleQOb8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBjH4cSLHA9z-DOhGxC7WmOALQ0-Q",
            title:"Unlimited ಪೆಟ್ರೋಲ್ 🔥 24/7 ಬೆಂಕಿ.! ಯಾವುದು ಮಾರಾಯ ಈ ದೇಶ.? | Dr Bro ",
            channel:"Dr Bro",
            Views:"995K views"
        },
        { 
            thumbanail:"https://i.ytimg.com/vi/PrwHu4Rv66U/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLA_nXhoaJx4KQhGgQbub9LE1jp_hQ",
             title:"Full Song: KHAIRIYAT",
            channel:"Vaibhav Kumar Sharma",
            Views:"445K views"
        },
        { 
            thumbanail:"https://i.ytimg.com/vi/0nuGm8HBjWk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDR1y5_ck7NBpBwj5FzWUkbwQo9PA",
            title:" Complete Java Web Application 🔥🔥|",
            channel:"LearnCodeWithDurgesh",
            Views:"215K views"
        },
        { 
            thumbanail:"https://i.ytimg.com/vi/e0CEJ_vC2IU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBuQvbDNU5iMgEuVpbRq36pqwruXw",
            title:" [My Girlfriend is an Alien S2]",
           channel:"TencentVideoRomantic",
            Views:"1.9M views"
        },
       // let [video,setVideo]=useState([])
        












// let removeVideo = (id,name)=>{
//     let result = video.filter((x)=> x.id !==id)
//     setVideo(result)
//     alert(`${name}video got removed`)
// }




    ])
    return ( 
<div className="videos">
<h1>Featured Videos</h1>
{video.map((data)=>{
    return(
        <div className="Video">
            <img src={data.thumbanail} alt=""/>
            <div className="videosDetails">
            <h3>{data.title}</h3>
            <p>{data.channel}</p>
            <p>{data.Views}</p>
    </div>
    </div>
    )
})}
</div>


     );
}
 
export default Videos;