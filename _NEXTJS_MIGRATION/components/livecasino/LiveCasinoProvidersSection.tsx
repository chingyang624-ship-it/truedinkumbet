export default function LiveCasinoProvidersSection() {
  const providers: any[] = [];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1f2124' }}>
          Trusted Live Casino Providers at Truedinkumbet
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {providers.map((provider, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-lg" style={{ backgroundColor: '#f9fafb' }}>
              <div className="md:w-1/3 flex justify-center">
                <img
                  src={provider.logo}
                  alt={provider.name}
                  className="max-w-xs h-auto"
                  style={{ maxHeight: '200px', maxWidth: '320px', ...provider.imageStyle }}
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1f2124' }}>
                  {provider.name}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.8' }}>
                  {provider.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
