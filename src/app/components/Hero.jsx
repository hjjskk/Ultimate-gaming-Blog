export default function Hero(){

return(

<section style={{
height:"60vh",
background:"#0f172a",
color:"white",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center"
}}>

<h1 style={{fontSize:"50px"}}>
Ultimate Gaming Blog 🎮
</h1>

<p>Gaming news, esports updates and pro strategies</p>

<a href="/explore">
<button style={{
marginTop:"20px",
padding:"12px 20px",
background:"#2563eb",
color:"white",
border:"none"
}}>
Explore Articles
</button>
</a>

</section>

)

}