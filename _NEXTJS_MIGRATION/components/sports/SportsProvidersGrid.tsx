export default function SportsProvidersGrid() {
  const providers = [
    {
      name: "WS Sport",
      badge: "New",
      badgeColor: "#e00928",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F602686836c494e93a3491d0e2149296a",
      link: "https://truedinkumbet.com/go/sports",
    },
    {
      name: "CMD368 Sports",
      badge: "Hot",
      badgeColor: "#ff650f",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F619a3f6a939f43adb499c9c3be2b4957",
      link: "https://truedinkumbet.com/go/sports",
    },
  ];

  return (
    <section
      className="w-full px-2.5"
      style={{
        display: "flex",
        flexDirection: "column",
        flexFlow: "column nowrap",
        maxWidth: "100%",
        position: "relative",
        backgroundColor: "#f8f8f8",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          gap: "20px",
          height: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "min(100%, 1140px)",
          paddingBottom: "10px",
          paddingTop: "10px",
          width: "100%",
        }}
      >
        <div
          style={{
            gap: "20px",
            maxWidth: "100%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                paddingBottom: "10px",
                paddingTop: "10px",
                textAlign: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              {providers.map((provider, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: "15px",
                    paddingTop: "15px",
                    position: "relative",
                    textAlign: "center",
                  }}
                >
                  {provider.badge && (
                    <div
                      style={{
                        backgroundColor: provider.badgeColor,
                        borderRadius: "15px",
                        color: "#ffffff",
                        fontSize: "11px",
                        fontWeight: "600",
                        lineHeight: "11px",
                        padding: "2px 8px",
                        position: "absolute",
                        right: "5px",
                        top: "5px",
                        textAlign: "center",
                      }}
                    >
                      {provider.badge}
                    </div>
                  )}
                  <div style={{ lineHeight: "18px", textAlign: "center" }}>
                    <a
                      target="_blank"
                      rel="sponsored noopener"
                      href={provider.link}
                      style={{
                        borderColor: "#181818",
                        color: "#181818",
                        cursor: "pointer",
                        lineHeight: "18px",
                        textAlign: "center",
                        touchAction: "manipulation",
                        transitionDuration: "0.4s",
                        display: "inline-block",
                      }}
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        alt={provider.name}
                        width="240"
                        height="300"
                        src={provider.image}
                        style={{
                          borderColor: "#181818",
                          color: "#181818",
                          cursor: "pointer",
                          display: "block",
                          lineHeight: "18px",
                          textAlign: "center",
                          transitionDuration: "0.3s",
                          verticalAlign: "middle",
                          maxWidth: "220px",
                          height: "250px",
                          margin: "0 auto",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
