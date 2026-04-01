export default function Home () {
    return (
        <main style={{
            padding: "40px",
            fontFamily: "Arial"
        }}>
            <h1>Welcome to My Blog</h1>

            <p>This is my beautiful blog homepage.</p>

            <button style={{
                padding: "10px 20px",
                background: "blue",
                color: "white",
                border: "none",
                borderRadius: "8px"
            }}>
               Read Blog
            </button>
        </main>
    );
}