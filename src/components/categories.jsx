import '../styles/categories.css'

const Categories = () => {
    let catagories=[
        {link:"All"},
        {link:"Sport"},
        {link:"Comedy"},
        {link:"Travel"},
        {link:"Misuc"},
        {link:"Kids"},
        {link:"Gaming"},
        {link:"Movies"},
        {link:"Bollywood"},
        {link:"Recently uploaded"}
]
    return (  
        <div className="categories">
          <ul>
            {catagories.map((data)=>{
                return(
                    <li><a href="">{data.link}</a></li>
                )
            })}
          </ul>

        </div>
    );
}
 
export default Categories ;