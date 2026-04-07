"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Signup() {
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

    const handleSignup = () => {
        if (!email || !password) {
            setMessage("Please enter email and password to create an account.")
            return
        }

        const users = getUsers()
        const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase())

        if (exists) {
            setMessage("This email is already taken. Please sign in.")
            return
        }

        const nextUsers = [...users, { email, password }]
        setUsers(nextUsers)
        setMessage("Account created! Redirecting to login...")
        setTimeout(() => {
            router.push("/login")
        }, 600)
    }

    return (
        <div className="signup-page">
            <div className="signup-card">
                <h2>Create Account</h2>

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
                    onClick={handleSignup}
                    className="signup-button"
                >
                    Sign up
                </button>

                {message ? <p className="message-text">{message}</p> : null}

                <p className="link-text" onClick={() => router.push("/login")}>Already have an account? Sign in</p>
            </div>
        </div>
    )
}
