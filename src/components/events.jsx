const Events = ()=>{
   // let submitFn=()=>{
        // console.log("submitted");
        let submitFn = (x) =>{ 
        console.log('hello ${x}');
    }
    return (
        <div className="events">
<button onClick={()=>submitFn("react")}>click</button>

        </div>
    );
}
export default Events;