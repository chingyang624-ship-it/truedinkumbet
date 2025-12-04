"use client";

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  link: string;
  content?: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "What is Cryptocurrency Casino?",
    description:
      "Online gambling is evolving, and cryptocurrency casinos are at the forefront of this change. With digital assets becoming more mainstream, more players are asking: What is a cryptocurrency casino, and why should I use one? In this guide, we break down what makes crypto casinos unique, their benefits, and what you need to know before you play.",
    category: "Casino Review",
    date: "28-01-2025",
    image: "https://www.bk8.services/wp-content/uploads/2020/10/What-is-Cryptocurrency-Casino.jpg",
    link: "/blog/casino-review/what-is-cryptocurrency-casino/",
    content: `
      <h2>What is Cryptocurrency Casino?</h2>
      <p>Online gambling is evolving, and cryptocurrency casinos are at the forefront of this change. With digital assets becoming more mainstream, more players are asking: What is a cryptocurrency casino, and why should I use one? In this guide, we break down what makes crypto casinos unique, their benefits, and what you need to know before you play.</p>

      <p>Crypto gambling is becoming increasingly popular due to its provable fairness and quick deposits or withdrawals as no banks are needed to process fiat transactions. The cryptocurrency casino industry is becoming bigger day-to-day.</p>

      <p>BK8Asia is one of the most trusted, and fair Bitcoin & Crypto casinos as there is a lot of false betting site out there. Our online casino currently accepts BitCoin (BTC) and Tether (USDt) to ease the cryptocurrency users to able to enjoy online entertainment.</p>

      <h2>Why Casinos Use Cryptocurrencies?</h2>
      <p>As the popularity of cryptocurrencies continues to increase, many online betting sites have begun to work hard to adapt to this new payment and betting method. The fun of online betting without using cryptocurrency in the past can now be obtained by using cryptocurrency for betting.</p>

      <p>Even if some websites accept cryptocurrency payments, they may only provide limited online betting options such as sports betting services.</p>

      <h2>Types Of Cryptocurrency Casino</h2>
      <p>If you want to use cryptocurrency for online betting, you have two different options:</p>
      <ul>
        <li>You can use a betting site that only accepts cryptocurrency payments</li>
        <li>You can use a betting site that has been in operation for a long time and has added cryptocurrency payment methods</li>
      </ul>

      <h2>Provably Fair Betting</h2>
      <p>Currently, only cryptocurrency casino betting can be called provably fair betting. This is revolutionary and makes it impossible for casinos or players to cheat at any time when playing games.</p>

      <p>Provably fair (PF) betting uses a cryptographic hash function, which is basically a mathematical algorithm that can map and stream data and cannot be tampered or reversed in any way.</p>
    `,
  },
];

export default function CasinoReviewArticleContent({ slug }: { slug: string }) {
  const article = articles.find(
    (a) =>
      a.link
        .toLowerCase()
        .includes(slug.toLowerCase().replace(/-/g, " "))
  );

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Article Not Found</h1>
        <p className="text-center text-gray-600">
          Sorry, the article you are looking for could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <a
              href="/blog/category/casino-review/"
              className="text-orange-500 hover:text-orange-600 font-bold"
            >
              {article.category}
            </a>
            <span>|</span>
            <span>{article.date}</span>
          </div>

          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            {article.title}
          </h1>

          <div className="relative h-96 mb-8 overflow-hidden rounded-lg">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {article.description}
          </p>

          {article.content && (
            <div className="text-gray-700 leading-relaxed space-y-6">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          )}
        </div>

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-3xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles
              .filter((a) => a.id !== article.id)
              .slice(0, 2)
              .map((relatedArticle) => (
                <a
                  key={relatedArticle.id}
                  href={relatedArticle.link}
                  className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-orange-500 font-bold mb-2">
                      {relatedArticle.category}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {relatedArticle.date}
                    </p>
                  </div>
                </a>
              ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <a
            href="/blog/category/casino-review/"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-900 transition-colors font-bold"
          >
            ← Back to Casino Review
          </a>
        </div>
      </div>
    </div>
  );
}
