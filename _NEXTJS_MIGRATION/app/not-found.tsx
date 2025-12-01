export default function NotFound() {
  return (
    <html>
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            fontFamily: "system-ui",
            backgroundColor: "#f5f5f5",
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
            404
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#666", marginBottom: "2rem" }}>
            Page not found
          </p>
          <a
            href="/"
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#ff6500",
              color: "white",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Go back home
          </a>
        </div>
      </body>
    </html>
  );
}
