import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const AddVideo = () => {
    let navigate =useNavigate()
    let thumnail= useRef(null)
    let title= useRef(null)
    let channel= useRef(null)
    let views= useRef(null)

    let upload = (e) =>{
        e.preventDefault()   //prevents the page from reload
        let data = {
            thumnail:thumnail.current.value,
            title:title.current.value,
            channel:channel.current.value,
            views:views.current.value
        }
        // console.log(data);
        fetch('http://localhost:4000/videos',{
            method: 'POST',
            headers:{'Content-Type': 'application/Json'},
            body:JSON.stringify(data)

        })
        alert('video uploaded successfully')
        navigate('/')//navigating to different routes when we click uploat or added new video it goes to the home page
    }

    return ( 
        <div className="addvideo">
            <h1>Add Video</h1>
            <div className="Add video">
                <form action="" onSubmit={upload}>
                    <input ref={thumnail} type="url" placeholder="enter thumnail url "/><br /><br />
                    <input ref={title} type="text" placeholder="enter the title" /><br /><br />
                    <input ref={channel} type="text" placeholder="enter channel name"/><br /><br />
                    <input ref={views} type="text" placeholder="enter the views"/><br /><br />

                    <input type="checkbox"></input><label for="Terms And Conditions">I agree with the website's terms and conditions</label>
                    <br /><br />
                    <button>Upload video</button>
                </form>

            </div>

        </div>
        
     );
}
 
export default AddVideo ;