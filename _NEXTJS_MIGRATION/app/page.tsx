export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white p-5">
        <h1 className="text-2xl font-bold">Truedinkumbet</h1>
      </header>
      <main className="flex-1 pt-16">
        <div className="text-center py-10">
          <h2 className="text-4xl font-bold">Welcome</h2>
          <p>App is loading...</p>
        </div>
      </main>
      <footer className="bg-gray-100 p-5 text-center">
        <p>&copy; 2024 Truedinkumbet</p>
      </footer>
    </div>
  );
}
