import Link from "next/link";

export default function Header() {
  const navItems = [
    { name: "Slots", href: "/slots" },
    { name: "Live Casino", href: "/live-casino" },
    { name: "Esports", href: "https://truedinkumbet.com/RFSEOTDK" },
    { name: "Sports", href: "/sports" },
    { name: "Fishing", href: "/fishing" },
    { name: "App Download", href: "/app-download" },
  ];

  return (
    <header className="bg-white">
      <div
        className="fixed top-0 w-full z-50 px-5 shadow-md"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
      >
        <div className="flex flex-wrap items-center">
          <Link href="/" className="flex-1 md:flex-[0.25] py-1 px-2 mr-2">
            <img
              alt="Truedinkumbet"
              width="110"
              height="50"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7"
              className="w-[150px] h-12"
            />
          </Link>

          <nav className="hidden md:flex flex-[0.75] text-left">
            <ul className="flex gap-3 z-10 relative">
              {navItems.map((item) => (
                <li key={item.name} className="inline-block">
                  <Link
                    href={item.href}
                    {...(item.href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="font-medium text-gray-800 hover:text-gray-600 transition-colors leading-[52px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="inline-block relative group">
                <span className="font-medium text-gray-800 leading-[52px] flex items-center gap-1 cursor-default">
                  Blog
                  <span className="text-xs">▼</span>
                </span>
                <ul className="absolute hidden group-hover:block bg-white top-full left-0 w-48 p-4 shadow-lg rounded-lg z-50 mt-0">
                  <li>
                    <Link
                      href="/crypto-casino"
                      className="font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 transition-colors text-sm block px-3 py-2 rounded"
                    >
                      Crypto casino
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/reviews"
                      className="font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 transition-colors text-sm block px-3 py-2 rounded"
                    >
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/e-wallet-casino"
                      className="font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 transition-colors text-sm block px-3 py-2 rounded"
                    >
                      E-Wallet Casino
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="hidden md:flex flex-[0.25] gap-4 text-right py-2 px-2">
            <a
              href="https://truedinkumbet.com/RFSEOTDK"
              className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors"
            >
              Login
            </a>
            <a
              href="https://truedinkumbet.com/RFSEOTDK"
              className="inline-block text-sm font-bold text-white bg-orange-500 rounded-lg px-3 py-2 hover:bg-orange-600 transition-all animate-bounce"
            >
              Join Now
            </a>
          </div>
        </div>

        <div className="md:hidden w-full py-3 px-2">
          <div className="flex gap-2">
            <a
              href="https://truedinkumbet.com/RFSEOTDK"
              className="flex-1 text-center py-2 text-gray-800 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
            >
              Login
            </a>
            <a
              href="https://truedinkumbet.com/RFSEOTDK"
              className="flex-1 text-center py-2 text-white font-bold bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors text-sm"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
