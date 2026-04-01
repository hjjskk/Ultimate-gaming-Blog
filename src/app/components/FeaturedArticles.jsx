export default function FeaturedArticles(){

return(

<section style={{padding:"40px"}}>

<h2>⭐ Featured Articles</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"20px"
}}>

<div style={{background:"#1e293b",padding:"20px",color:"white"}}>
<h3>Best FPS Games</h3>
<p>Top competitive shooter games.</p>
</div>

<div style={{background:"#1e293b",padding:"20px",color:"white"}}>
<h3>Rank Up Faster</h3>
<p>Pro tips for competitive players.</p>
</div>

<div style={{background:"#1e293b",padding:"20px",color:"white"}}>
<h3>Gaming Setup</h3>
<p>The best equipment for gamers.</p>
</div>

</div>

</section>

)

}