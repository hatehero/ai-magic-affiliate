export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui",
      background: "#f5f6fa"
    }}>
      <div style={{
        background: "#fff",
        padding: 24,
        borderRadius: 12,
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        maxWidth: 420,
        width: "100%",
        textAlign: "center"
      }}>
        <h1>✨ AI Magic Affiliate</h1>
        <p style={{ color: "#555" }}>
          Projek berjaya dimulakan.
        </p>
      </div>
    </main>
  );
}
