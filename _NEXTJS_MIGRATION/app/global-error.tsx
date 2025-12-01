"use client";

export const dynamic = "force-dynamic";

export default function GlobalError() {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Global Error
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Something went wrong globally
          </p>
          <a
            href="/"
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Go back home
          </a>
        </div>
      </body>
    </html>
  );
}
