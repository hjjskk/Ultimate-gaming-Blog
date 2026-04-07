"use client";

import { useState } from "react";

const articles = [
  {
    title: "Best FPS Games",
    desc: "Top competitive shooter games dominating esports",
    img: "https://picsum.photos/400",
    story:
      "First-Person Shooter (FPS) games are a popular video game genre where players experience the action through the eyes of their character and primarily use weapons, especially guns, to defeat enemies. These games focus heavily on fast reflexes, precise aiming, and strategic movement, often requiring players to think quickly while reacting to intense situations. FPS games can range from realistic military simulations to futuristic or ability-based combat, and they commonly include both single-player story modes and competitive multiplayer modes. Their immersive perspective, skill-based gameplay, and high-paced action make them one of the most engaging and widely played genres in the gaming world.",
  },
  {
    title: "Rank Up Faster",
    desc: "Professional tips to improve your gaming rank",
    img: "https://picsum.photos/401",
    story:
      "FPS games are fast-paced, skill-based video games played from a first-person perspective where players use weapons to eliminate enemies while relying on aim, reflexes, movement, and strategy to succeed. To rank up fast in FPS games, players need to focus on improving their aim through regular practice, learning maps to understand positioning and enemy movement, maintaining consistent settings (like sensitivity), and playing smart rather than just aggressively. Good communication with teammates, staying alive instead of rushing blindly, and reviewing mistakes after matches also help you improve quickly and climb ranks faster.",
  },
  {
    title: "Best Gaming Setup",
    desc: "Best keyboards, mouse and monitors",
    img: "https://picsum.photos/402",
    story:
      "FPS games are fast-paced, first-person perspective games where players use weapons to defeat enemies, relying heavily on aim, reflexes, movement, and strategy; to rank up fast, players should practice their aim consistently, learn maps and positioning, play smart instead of rushing, and communicate well with teammates; having a good gaming setup also makes a big difference, including a smooth high-refresh-rate monitor, a responsive mouse or controller, comfortable headphones for clear sound, and stable internet, all of which help improve reaction time, accuracy, and overall performance.",
  },
  {
    title: "Esports 2026",
    desc: "Upcoming tournaments around the world",
    img: "https://picsum.photos/403",
    story:
      "Esports 2026 is shaping up to be a massive year, with several major tournaments lined up, including the Esports World Cup in Riyadh, Saudi Arabia, from July 6 to August 23. This event will feature 24 official tournaments, over 2,000 players from more than 200 esports clubs, and a total prize pool of $75 million. Some of the confirmed games include Counter-Strike 2, Dota 2, Valorant, League of Legends, Apex Legends, and Overwatch 2. The Esports Nations Cup will also take place in November, featuring national teams competing in games like PUBG Mobile and League of Legends ¹ ² ³.",
  },
  {
    title: "Streaming Tips",
    desc: "How to grow your Twitch audience",
    img: "https://picsum.photos/404",
    story:
      "Streaming 2026 is shaping up to be a massive year, with several major tournaments lined up, including the Esports World Cup in Riyadh, Saudi Arabia, from July 6 to August 23, featuring games like Counter-Strike 2, Dota 2, and League of Legends. For streamers, focus on high-quality gameplay, engage with your audience, invest in good equipment, and develop a unique personality. Promote your streams on social media, collaborate with other streamers, and stay up-to-date with game updates. Want more details on either of these?",
  },
  {
    title: "Pro Gamer Routine",
    desc: "Daily practice routine for pro gamers",
    img: "https://picsum.photos/405",
    story:
      "Pro gamers typically have structured routines that include dedicated practice sessions (4-6 hours/day), game analysis, strategy planning, and team coordination, alongside physical exercise and mental wellness activities to maintain peak performance. They also prioritize staying updated with game patches, managing tournament schedules, and adapting to meta changes, all while maintaining a healthy work-life balance to sustain their competitive edge.",
  },
  {
    title: "Battle Royale Guide",
    desc: "Best strategies for survival games",
    img: "https://picsum.photos/406",
    story:
      "Free Fire is a popular battle royale game where 50 players are dropped onto an island and must fight to be the last one standing. Players can choose to play solo, duo, or squad, and must gather weapons, armor, and resources while navigating the shrinking map. The game features a variety of guns, vehicles, and characters with unique abilities, making it a thrilling experience for players. With its fast-paced gameplay and short matches, Free Fire is a great option for those looking for a quick gaming session.",
  },
  {
    title: "Gaming PCs",
    desc: "Best gaming PC builds this year",
    img: "https://picsum.photos/407",
    story:
      "Gaming PCs are powerful machines designed to deliver high-quality gaming experiences. They're built with components like high-end GPUs, fast CPUs, and ample RAM to handle demanding games. One of the key benefits of gaming PCs is their customizability, allowing users to upgrade individual parts to keep up with evolving game requirements. This makes them a popular choice among gamers who want control over their hardware and performance.",
  },
];

export default function Explore() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const closeStory = () => setSelectedArticle(null);

  return (
    <div className="explore-container">
      <h1 className="explore-title">Explore Gaming Articles</h1>

      <div className="articles-grid">
        {articles.map((post, index) => (
          <div key={index} className="article-card">
            <img src={post.img} alt={post.title} className="article-image" />

            <h3 className="article-title">{post.title}</h3>
            <p className="article-desc">{post.desc}</p>

            <button
              onClick={() => setSelectedArticle(post)}
              className="read-btn"
            >
              Read Article
            </button>
          </div>
        ))}
      </div>

      {selectedArticle && (
        <div className="story-overlay" onClick={closeStory}>
          <div className="story-card" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedArticle.title}</h2>
            <p>{selectedArticle.story}</p>
            <button onClick={closeStory} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

