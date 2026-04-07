"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const getUsers = () => {
        try {
            const saved = localStorage.getItem("users")
            return saved ? JSON.parse(saved) : []
        } catch {
            return []
        }
    }

    const setUsers = (users) => {
        localStorage.setItem("users", JSON.stringify(users))
    }

    function handleLogin() {
        if (!email || !password) {
            setMessage("Please enter email and password to sign in.")
            return
        }

        const users = getUsers()
        const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase())

        if (!user) {
            setMessage("No account found. Please create one first.")
            return
        }

        if (user.password !== password) {
            setMessage("Email or password is incorrect.")
            return
        }

        localStorage.setItem("loggedIn", "true")
        localStorage.setItem("currentUser", email)
        router.push("/")
    }

    return (

        <div className="login-page">

            {/* LEFT SIDE */}

            <div className="login-info">

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

            <div className="login-form">

                <h2>Sign In</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="auth-input"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="auth-input"
                />

                <button
                    onClick={handleLogin}
                    className="auth-button"
                >
                    Sign In
                </button>

                {message ? (
                    <p style={{ marginTop: 10, color: "#b91c1c" }}>{message}</p>
                ) : null}

                <p style={{ marginTop: 10, cursor: "pointer", color: "blue" }}>
                    Forgot Password?
                </p>

                <p
                    className="link-text"
                    onClick={() => router.push("/signup")}
                >
                    Don’t have an account? Sign up
                </p>

                <button
                    onClick={() => router.push("/signup")}
                    className="auth-button"
                >
                    Sign up
                </button>

            </div>

        </div>

    )

}