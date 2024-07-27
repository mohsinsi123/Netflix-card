 const Seriescard =({data})=> {

    const { img_url,name,rating,description,cast,genre,watch_url } = data;
    
    const btn_style = {  padding:"1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor:`${rating>=8.5 ? "pink" : "brown"}`,
        color:"var(--bg-color)",}
    
    return(
        <li className="card"> 
        <div>

 <img src={img_url}  alt="lr.webp" width="50%" height="40%"/>

</div>
<div className="card-content">
<h1>Name:{name}</h1>
<h2>Rating:
        <span className={rating>=8.5 ? "super_hit": "average"}>{rating}</span></h2>
<p>summary: {description} </p>
<p>Genre: {genre}</p>
<p>Cast:{cast} </p>
<a href={watch_url} target="_blank">

<button style={btn_style}>watch now</button>
</a>
</div>
</li>
    );
    
};

export default Seriescard;