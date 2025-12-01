"use client";

export default function GlobalError() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "system-ui",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Error
      </h1>
      <p style={{ fontSize: "1rem", color: "#666", marginBottom: "2rem" }}>
        Something went wrong
      </p>
      <a
        href="/"
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#ff6500",
          color: "white",
          borderRadius: "0.5rem",
          textDecoration: "none",
        }}
      >
        Go back home
      </a>
    </div>
  );
}
