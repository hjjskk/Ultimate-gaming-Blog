"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {

const router = useRouter()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

function handleLogin(){

if(email && password){

localStorage.setItem("loggedIn","true")

router.push("/")

}else{

alert("Enter email and password")

}

}

return (

<div style={{
display:"flex",
minHeight:"100vh",
width:"100vw",
fontFamily:"Arial"
}}>

{/* LEFT SIDE */}

<div style={{
flex:1,
background:"#111827",
color:"white",
display:"flex",
flexDirection:"column",
justifyContent:"center",
padding:"60px"
}}>

<h1>Welcome Gamer 🎮</h1>

<p>Discover gaming articles, esports news and pro tips.</p>

<ul>
<li>🔥 Latest Gaming News</li>
<li>🎮 Game Reviews</li>
<li>🏆 Esports Tournaments</li>
<li>📈 Rank Up Tips</li>
</ul>

</div>


{/* RIGHT SIDE */}

<div style={{
flex:1,
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
background:"#f4f4f4"
}}>

<h2>Sign In</h2>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={{padding:10,margin:10,width:250}}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={{padding:10,margin:10,width:250}}
/>

<button
onClick={handleLogin}
style={{
padding:10,
width:250,
background:"#2563eb",
color:"white",
border:"none"
}}
>
Sign In
</button>

<p style={{marginTop:10,cursor:"pointer",color:"blue"}}>
Forgot Password?
</p>

<button
style={{
padding:10,
width:250,
background:"#16a34a",
color:"white",
border:"none",
marginTop:10
}}
>
Create Account
</button>

</div>

</div>

)

}