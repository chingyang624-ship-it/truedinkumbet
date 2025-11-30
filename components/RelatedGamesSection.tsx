import Link from "next/link";

interface RelatedGame {
  title: string;
  description: string;
  href: string;
  image: string;
}

interface RelatedGamesSectionProps {
  relatedGames: RelatedGame[];
}

export default function RelatedGamesSection({
  relatedGames,
}: RelatedGamesSectionProps) {
  return (
    <section className="py-20 px-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Explore Other Truedinkumbet Games
        </h2>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Discover more exciting gaming options available at Truedinkumbet. From
          live dealers to sports betting, we have something for everyone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedGames.map((game, index) => (
            <Link
              key={index}
              href={game.href}
              className="group block bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              <img
                src={game.image}
                alt={`Play ${game.title} at Truedinkumbet`}
                className="w-full h-48 object-cover group-hover:brightness-110 transition-all"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {game.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {game.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
          >
            Back to All Games
          </Link>
        </div>
      </div>
    </section>
  );
}
