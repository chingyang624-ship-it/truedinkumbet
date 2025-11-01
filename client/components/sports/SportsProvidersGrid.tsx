export default function SportsProvidersGrid() {
  const providers = [
    {
      name: 'BK8 Sports',
      badge: 'New',
      badgeColor: '#e00928',
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/bti.webp',
      link: 'https://bk8mycasino.com/go/cmdsports',
    },
    {
      name: 'CMD368 Sports',
      badge: 'Hot',
      badgeColor: '#ff650f',
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/sports-cmd.webp',
      link: 'https://bk8mycasino.com/go/cmdsports',
    },
    {
      name: 'M8 Sports',
      badge: null,
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/sports-m8.webp',
      link: 'https://bk8mycasino.com/go/cmdsports',
    },
    {
      name: 'SBOBET Sports',
      badge: null,
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/08/sbo.webp',
      link: 'https://bk8mycasino.com/go/cmdsports',
    },
  ];

  return (
    <section
      className="w-full px-2.5"
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexFlow: 'column nowrap',
        maxWidth: '100%',
        position: 'relative',
        backgroundColor: '#f8f8f8',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          gap: '20px',
          height: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: 'min(100%, 1140px)',
          paddingBottom: '10px',
          paddingTop: '10px',
          width: '100%',
        }}
      >
        <div
          style={{
            gap: '20px',
            maxWidth: '100%',
            position: 'relative',
          }}
        >
          <div style={{ height: '100%' }}>
            <div
              style={{
                display: 'inline-table',
                paddingBottom: '10px',
                paddingTop: '10px',
                textAlign: 'center',
                width: '100%',
              }}
            >
              {providers.map((provider, index) => (
                <div
                  key={index}
                  style={{
                    display: 'inline-block',
                    paddingBottom: '15px',
                    paddingTop: '15px',
                    position: 'relative',
                    textAlign: 'center',
                    width: '14.2857%',
                  }}
                >
                  {provider.badge && (
                    <div
                      style={{
                        backgroundColor: provider.badgeColor,
                        borderRadius: '15px',
                        color: '#ffffff',
                        fontSize: '11px',
                        fontWeight: '600',
                        lineHeight: '11px',
                        padding: '2px 8px',
                        position: 'absolute',
                        right: '5px',
                        top: '5px',
                        textAlign: 'center',
                      }}
                    >
                      {provider.badge}
                    </div>
                  )}
                  <div style={{ lineHeight: '18px', textAlign: 'center' }}>
                    <a
                      target="_blank"
                      rel="sponsored noopener"
                      href={provider.link}
                      style={{
                        borderColor: '#181818',
                        color: '#181818',
                        cursor: 'pointer',
                        lineHeight: '18px',
                        textAlign: 'center',
                        touchAction: 'manipulation',
                        transitionDuration: '0.4s',
                        display: 'inline-block',
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
                          aspectRatio: '240 / 300',
                          borderColor: '#181818',
                          color: '#181818',
                          cursor: 'pointer',
                          display: 'inline',
                          lineHeight: '18px',
                          maxWidth: '100%',
                          textAlign: 'center',
                          transitionDuration: '0.3s',
                          verticalAlign: 'middle',
                          width: '80%',
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
