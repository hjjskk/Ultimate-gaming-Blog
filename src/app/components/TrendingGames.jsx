export default function TrendingGames(){

const games = [
"Valorant",
"Fortnite",
"Call of Duty",
"GTA VI",
"Counter Strike 2"
]

return(

<section className="trending-section">

<h2>🔥 Trending Games</h2>

<div className="trending-list">

{games.map((game,index)=>(
<div key={index} className="trending-item">
{game}
</div>
))}

</div>

</section>

)

}