"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import Hero from "./components/Hero"
import TrendingGames from "./components/TrendingGames"
import FeaturedArticles from "./components/FeaturedArticles"
import Footer from "./components/Footer"

export default function Home() {

    const router = useRouter()

    useEffect(() => {

        const loggedIn = localStorage.getItem("loggedIn")

        if (!loggedIn) {
            router.push("/login")
        }

    }, [])

    return (

        <div className="app-wrapper">

            <button
                onClick={() => {
                    localStorage.removeItem("loggedIn")
                    router.push("/login")
                }}
                className="logout-button"
            >
                Logout
            </button>

            <Hero />

            <TrendingGames />

            <FeaturedArticles />

            <Footer />

        </div>

    )

}