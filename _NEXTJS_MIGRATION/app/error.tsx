"use client";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Error</h1>
      <p className="text-xl text-gray-600 mb-8">Something went wrong</p>
      <a
        href="/"
        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
      >
        Go back home
      </a>
    </div>
  );
}
