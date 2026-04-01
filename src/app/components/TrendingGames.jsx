export default function TrendingGames(){

const games = [
"Valorant",
"Fortnite",
"Call of Duty",
"GTA VI",
"Counter Strike 2"
]

return(

<section style={{padding:"40px"}}>

<h2>🔥 Trending Games</h2>

<div style={{
display:"flex",
gap:"20px",
marginTop:"20px",
flexWrap:"wrap"
}}>

{games.map((game,index)=>(
<div key={index} style={{
background:"#111",
color:"white",
padding:"20px",
borderRadius:"10px"
}}>
{game}
</div>
))}

</div>

</section>

)

}