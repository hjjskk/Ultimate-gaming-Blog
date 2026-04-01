const articles = [
{
title:"Best FPS Games",
desc:"Top competitive shooter games dominating esports",
img:"https://picsum.photos/400"
},
{
title:"Rank Up Faster",
desc:"Professional tips to improve your gaming rank",
img:"https://picsum.photos/401"
},
{
title:"Best Gaming Setup",
desc:"Best keyboards, mouse and monitors",
img:"https://picsum.photos/402"
},
{
title:"Esports 2026",
desc:"Upcoming tournaments around the world",
img:"https://picsum.photos/403"
},
{
title:"Streaming Tips",
desc:"How to grow your Twitch audience",
img:"https://picsum.photos/404"
},
{
title:"Pro Gamer Routine",
desc:"Daily practice routine for pro gamers",
img:"https://picsum.photos/405"
},
{
title:"Battle Royale Guide",
desc:"Best strategies for survival games",
img:"https://picsum.photos/406"
},
{
title:"Gaming PCs",
desc:"Best gaming PC builds this year",
img:"https://picsum.photos/407"
}
]

export default function Explore(){

return(

<div style={{padding:40}}>

<h1 style={{textAlign:"center"}}>Explore Gaming Articles</h1>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"20px",
marginTop:"40px"
}}>

{articles.map((post,index)=>(

<div key={index} style={{
background:"#111",
color:"white",
borderRadius:"10px",
overflow:"hidden"
}}>

<img src={post.img} style={{
width:"100%",
height:"200px",
objectFit:"cover"
}} />

<h3 style={{padding:"10px"}}>{post.title}</h3>

<p style={{padding:"0 10px"}}>{post.desc}</p>

<button style={{
margin:"10px",
padding:"8px",
background:"#2563eb",
border:"none",
color:"white"
}}>
Read Article
</button>

</div>

))}

</div>

</div>

)
}
