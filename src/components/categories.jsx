import  '../styles/categories.css'
const Categories = () => {
    let categories =[
        {link:"All"},
        {link:"Sports"},
        {link:"Movies"},
        {link:"Games"},
        {link:"Food"},
        {link:"Tv show"},
        {link:"Travel"},
        {link:"Kids"},
        {link:"Beauty"},
        {link:"God"}
    ]
    return (  
<div className="categories">
 <ul>
    {categories.map((data)=>{
return (
    <li><a href="youtube">{data.link}</a></li>
)
    })}
 </ul>
</div>

    );
}
 
export default Categories;