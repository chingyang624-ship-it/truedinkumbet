export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      <a href="/" className="text-blue-500 hover:underline">
        Return Home
      </a>
    </div>
  );
}
