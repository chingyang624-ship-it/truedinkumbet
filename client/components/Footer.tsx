import { useState } from "react";

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white overflow-hidden" style={{ color: "rgb(134, 151, 162)" }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="mb-8">
          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Gaming License */}
            <div>
              <h3 className="text-base font-semibold text-black mb-4 flex items-center gap-1">
                Gaming License
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F4e000d99f0da46f19f6aa7a3c4db1536"
                  alt="tick"
                  className="w-8 h-6"
                />
              </h3>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F97787b72d8964636acc5077e43bf8ae8"
                alt="Gaming License"
                className="mb-4"
                style={{ maxWidth: "50%" }}
              />
              <p className="text-xs text-black">
                Truedinkumbet is operated by DraftKings a company
                registered under the laws of the Republic of the
                Philippines, and is licensed and regulated by the
                Philippine Amusement and Gaming Corporation (PAGCOR).
              </p>
            </div>

            {/* Games Links */}
            <div>
              <h3 className="text-base font-semibold text-black mb-4">Games</h3>
              <div className="space-y-2">
                {["Sports", "Esports", "Live Casino", "Slots", "Fishing"].map((game) => (
                  <a
                    key={game}
                    href="#"
                    className="block text-black hover:text-gray-600 transition-colors text-sm"
                  >
                    {game}
                  </a>
                ))}
              </div>
            </div>

            {/* Info Links */}
            <div>
              <h3 className="text-base font-semibold text-black mb-4">Info</h3>
              <div className="space-y-2">
                {[
                  { name: "About Us", href: "#" },
                  { name: "Affiliate Program", href: "#" },
                  { name: "Responsible Gaming", href: "#" },
                  { name: "Info Centre", href: "#" },
                  { name: "Term & Conditions", href: "#" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-black hover:text-gray-600 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Certification */}
            <div>
              <h3 className="text-base font-semibold text-black mb-4">Certification</h3>
              <div className="space-y-2">
                {[
                  { name: "BMM", src: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Faeaf2afcca834492b313653a37da6f4f" },
                  { name: "iTech Labs", src: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F010290ab128c4e6dac35e263cac562cc" },
                  { name: "", src: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F1984312bdd244e499c1f999815a3d132" },
                  { name: "TST", src: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F9fd2f91987314093b5835ec0a35f751e" },
                  { name: "Godaddy", src: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fac81f3a09be740b6992ed5f59e5d09e1" },
                ].map((cert) => (
                  <img
                    key={cert.name}
                    src={cert.src}
                    alt={cert.name}
                    className="h-9 w-auto mb-3"
                    style={{ filter: "grayscale(1)" }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Payment Methods & Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Payment Methods */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold text-black mb-4">Payment Method</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Bitcoin BTC", src: "9c91b42e2bb844b49f4f0c8f8053a7b7" },
                  { name: "Tether USDT", src: "fb01ba7b451c4f57ad13b6bceec2b178" },
                  { name: "Ethereum ETH", src: "6e377f4b452c435f86f2b2448f69f57d" },
                  { name: "Visa", src: "34de12af57824581b81cb9bc89ad7057" },
                  { name: "Mastercard", src: "88c7899e9f4b4d61969d87d300ed6d56" },
                ].map((method) => (
                  <img
                    key={method.name}
                    src={`https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F${method.src}`}
                    alt={method.name}
                    className="h-9 w-auto"
                    style={{ filter: "grayscale(1)" }}
                  />
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-base font-semibold text-black mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/share/17TDVW4N25/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F28bb87ef06f54425a01118d65acdbdb9"
                    alt="Truedinkumbet Facebook"
                    className="h-9 w-9"
                    style={{ filter: "grayscale(1)" }}
                  />
                </a>
                <a href="https://youtube.com/c/bk8official" target="_blank" rel="noopener noreferrer" />
                <a href="https://x.com/truedinkumbet?s=21" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff5804a6ce4f74020b78f032bcdc0ae99"
                    alt="Truedinkumbet Twitter"
                    className="h-9 w-9 cursor-pointer"
                    style={{ filter: "grayscale(1)" }}
                    href="https://x.com/truedinkumbet?s=21"
                  />
                </a>
              </div>
            </div>

            {/* Security */}
            <div>
              <h3 className="text-base font-semibold text-black mb-4">Security</h3>
              <div className="space-y-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F781ab7b4c3534acc8b0ea0e92f346fef"
                  alt="iovation"
                  className="h-9 w-auto mb-2"
                  style={{ filter: "grayscale(1)" }}
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe3196d4d46774fd88e0ff2a7d9e464b9"
                  alt="Threat Metrix"
                  className="h-9 w-auto"
                  style={{ filter: "grayscale(1)" }}
                />
              </div>
            </div>

            {/* Responsible Gaming */}
            <div>
              <h3 className="text-base font-semibold text-black mb-4">Responsible Gaming</h3>
              <div className="space-y-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fcbd46f1f9aef42ddb6d6867578c7ea52"
                  alt="18+"
                  className="h-9 w-auto mb-2"
                  style={{ filter: "grayscale(1)" }}
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F77a94ff8029a45d0931b44489a3c14d8"
                  alt="GamCare"
                  className="h-9 w-auto mb-2"
                  style={{ filter: "grayscale(1)" }}
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F17d3a112ea0346a0a986e34704a01dcb"
                  alt="BGA"
                  className="h-9 w-auto"
                  style={{ filter: "grayscale(1)" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Footer */}
        <div
          className="border-t pt-6 pb-6 flex items-center justify-between relative"
          style={{ color: "rgb(134, 151, 162)" }}
        >
          <p className="text-xs">© 2025 Truedinkumbet. All rights reserved. 18+</p>
          <button
            onClick={scrollToTop}
            className="w-10 h-9 rounded flex items-center justify-center text-lg font-bold transition-all hover:bg-gray-200"
            style={{ backgroundColor: "rgb(240, 240, 240)" }}
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
