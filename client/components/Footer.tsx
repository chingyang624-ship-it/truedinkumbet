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
          {/* Club Partners Section */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-12 justify-center">
              {/* Burnley F.C. */}
              <div className="text-center">
                <p className="text-xs mb-2 text-black">Official Club Partners 2023/24</p>
                <img
                  src="https://bk8mycasino.com/wp-content/themes/BK8/svg/bfc.svg"
                  alt="Burnley F.C."
                  className="w-14 h-16 mx-auto mb-2"
                />
                <p className="text-xs text-black text-center">Burnley F.C.</p>
              </div>

              {/* HSBC BWF */}
              <div className="text-center">
                <p className="text-xs mb-2 text-black">
                  Official Sponsor of the<br />
                  HSBC BWF World Tour Finals 2024
                </p>
                <img
                  src="https://bk8mycasino.com/wp-content/uploads/2024/07/hsbc-bwf.webp"
                  alt="HSBC BWF"
                  className="w-44 h-20 mx-auto"
                />
              </div>

              {/* Manny Pacquiao */}
              <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                <img
                  src="https://bk8mycasino.com/wp-content/uploads/2024/07/sponsor-mp.webp"
                  alt="Manny Pacquiao"
                  className="w-28 h-32"
                />
                <div>
                  <p className="text-sm font-semibold mb-2 text-black">
                    BK8 Brand Ambassador<br />
                    Philippines 2023 - 2024
                  </p>
                  <img
                    src="https://bk8mycasino.com/wp-content/uploads/2024/07/signature-mp.webp"
                    alt="Manny Pacquiao Signature"
                    className="w-16 h-11 mb-2"
                  />
                  <p className="font-bold text-black">Manny Pacquiao</p>
                  <p className="text-xs text-black">
                    8 Division World Boxing Champion<br />
                    & Winner of 12 Major World Titles
                  </p>
                </div>
              </div>

              {/* EGR Nomination */}
              <div className="text-center">
                <p className="text-xs mb-2 text-black">
                  Nominated for<br />
                  Innovation in Sports Betting
                </p>
                <img
                  src="https://bk8mycasino.com/wp-content/uploads/2024/09/egr_nomination.webp"
                  alt="EGR"
                  className="w-44 h-8 mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Award Nomination */}
          <div className="mb-12 pb-8 border-t border-gray-300">
            <h4 className="font-medium text-black text-center mb-6 mt-6">Award Nomination</h4>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="text-center">
                <img
                  src="https://bk8mycasino.com/wp-content/uploads/2024/12/bk8award1.webp"
                  alt="BK8 Awards Nomination EGR"
                  className="w-44 h-16 mx-auto"
                />
              </div>
              <div className="text-center">
                <img
                  src="https://bk8mycasino.com/wp-content/uploads/2024/12/bk8award2.webp"
                  alt="BK8 Awards Nomination"
                  className="w-32 h-20 mx-auto"
                />
              </div>
              <div className="text-center">
                <img
                  src="https://bk8mycasino.com/wp-content/uploads/2024/12/bk8award3.webp"
                  alt="BK8 Awards Nomination"
                  className="w-32 h-20 mx-auto"
                />
              </div>
              <div className="text-center">
                <img
                  src="https://bk8mycasino.com/wp-content/uploads/2024/12/bk8award4.webp"
                  alt="BK8 Awards Nomination"
                  className="w-32 h-20 mx-auto"
                />
              </div>
              <div className="text-center">
                <img
                  src="https://bk8mycasino.com/wp-content/uploads/2024/12/bk8award5.webp"
                  alt="BK8 Awards Nomination"
                  className="w-32 h-20 mx-auto"
                />
              </div>
              <div className="text-center">
                <img
                  src="https://bk8mycasino.com/wp-content/uploads/2024/12/bk8award6.webp"
                  alt="BK8 Awards Nomination"
                  className="w-32 h-20 mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Previous Sponsorships */}
          <div className="mb-12 pb-8 border-t border-gray-300">
            <h4 className="font-medium text-black text-center mb-6 mt-6">Our Previous Sponsorships</h4>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { name: "Aston Villa F.C.", svg: "avfc.svg", year: "2023-2024" },
                { name: "Crystal Palace F.C.", svg: "crystal-palace-fc.svg", year: "2022-2023" },
                { name: "Huddersfield Town A.F.C.", svg: "huddersfield-town-afc.svg", year: "2021-2023" },
                { name: "Valencia C.F.", svg: "valencia-cf.svg", year: "2021-2022" },
                { name: "Athletic Club", svg: "athletic-club.svg", year: "2021-2022" },
                { name: "Villarreal C.F.", svg: "villarreal-cf.svg", year: "2021-2022" },
                { name: "Elche C.F.", svg: "elche-cf.svg", year: "2021-2022" },
                { name: "RCD Mallorca", svg: "rcd-mallorca.svg", year: "2021-2022" },
              ].map((team) => (
                <div key={team.name} className="text-center">
                  <img
                    src={`https://bk8mycasino.com/wp-content/themes/BK8/svg/${team.svg}`}
                    alt={team.name}
                    className="w-14 h-14 mx-auto mb-2"
                  />
                  <p className="text-xs text-black text-center max-w-[100px]">{team.name}</p>
                  <p className="text-[10px] text-gray-500 text-center">{team.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Gaming License */}
            <div>
              <h3 className="text-base font-semibold text-black mb-4 flex items-center gap-1">
                Gaming License
                <img
                  src="https://bk8mycasino.com/wp-content/themes/BK8/svg/tick.svg"
                  alt="tick"
                  className="w-8 h-6"
                />
              </h3>
              <img
                src="https://bk8mycasino.com/wp-content/uploads/2025/08/gaming-license.png"
                alt="Gaming License"
                className="w-20 h-12 mb-4"
              />
              <p className="text-xs text-black">
                BK8 is operated by Mettlemind Tech Ltd. (Reg. No. 15779),
                registered in Anjouan, Union of Comoros, and licensed
                under ALSI-202504032-FI2. Fully compliant and legally
                authorized to provide games of chance and wagering.
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
                  "About Us",
                  "Affiliate Program",
                  "Responsible Gaming",
                  "Info Centre",
                  "Term & Conditions",
                  "Crypto Casino",
                ].map((info) => (
                  <a
                    key={info}
                    href="#"
                    className="block text-black hover:text-gray-600 transition-colors text-sm"
                  >
                    {info}
                  </a>
                ))}
              </div>
            </div>

            {/* Certification */}
            <div>
              <h3 className="text-base font-semibold text-black mb-4">Certification</h3>
              <div className="space-y-2">
                {[
                  { name: "BMM", src: "bmm-logo.svg" },
                  { name: "iTech Labs", src: "itechlab.svg" },
                  { name: "", src: "GLI.svg" },
                  { name: "TST", src: "TST.svg" },
                  { name: "Godaddy", src: "godaddy.svg" },
                ].map((cert) => (
                  <img
                    key={cert.name}
                    src={`https://bk8mycasino.com/wp-content/themes/BK8/svg/${cert.src}`}
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
                  { name: "Bitcoin BTC", src: "bitcoin.svg" },
                  { name: "Tether USDT", src: "USDT.svg" },
                  { name: "Ethereum ETH", src: "ethereum.svg" },
                  { name: "Touch N Go", src: "TouchNGo.svg" },
                  { name: "Boost", src: "boost.svg" },
                  { name: "GrabPay", src: "grab_pay.svg" },
                  { name: "Duitnow", src: "duit_now.svg" },
                  { name: "Visa", src: "visa.svg" },
                  { name: "Mastercard", src: "master_card.svg" },
                  { name: "FPX", src: "FPX.svg" },
                ].map((method) => (
                  <img
                    key={method.name}
                    src={`https://bk8mycasino.com/wp-content/themes/BK8/svg/${method.src}`}
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
                <img
                  src="https://bk8mycasino.com/wp-content/themes/BK8/svg/facebook.svg"
                  alt="BK8 Facebook"
                  className="h-9 w-9"
                  style={{ filter: "grayscale(1)" }}
                />
                <a href="https://youtube.com/c/bk8official" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://bk8mycasino.com/wp-content/themes/BK8/svg/youtube.svg"
                    alt="BK8 Youtube Channel"
                    className="h-9 w-9 cursor-pointer"
                    style={{ filter: "grayscale(1)" }}
                  />
                </a>
                <a href="https://twitter.com/bk8official" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://bk8mycasino.com/wp-content/themes/BK8/svg/twitter.svg"
                    alt="BK8 Twitter"
                    className="h-9 w-9 cursor-pointer"
                    style={{ filter: "grayscale(1)" }}
                  />
                </a>
              </div>
            </div>

            {/* Security */}
            <div>
              <h3 className="text-base font-semibold text-black mb-4">Security</h3>
              <div className="space-y-2">
                <img
                  src="https://bk8mycasino.com/wp-content/themes/BK8/svg/iovation-logo.svg"
                  alt="iovation"
                  className="h-9 w-auto mb-2"
                  style={{ filter: "grayscale(1)" }}
                />
                <img
                  src="https://bk8mycasino.com/wp-content/themes/BK8/svg/threatmetrix.svg"
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
                  src="https://bk8mycasino.com/wp-content/themes/BK8/svg/18+.svg"
                  alt="18+"
                  className="h-9 w-auto mb-2"
                  style={{ filter: "grayscale(1)" }}
                />
                <img
                  src="https://bk8mycasino.com/wp-content/themes/BK8/svg/gamcare.svg"
                  alt="GamCare"
                  className="h-9 w-auto mb-2"
                  style={{ filter: "grayscale(1)" }}
                />
                <img
                  src="https://bk8mycasino.com/wp-content/themes/BK8/svg/begambleaware.svg"
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
          style={{ backgroundColor: "rgb(0, 0, 0)", color: "rgb(255, 255, 255)" }}
        >
          <p className="text-xs">© 2025 BK8. All rights reserved. 18+</p>
          <button
            onClick={scrollToTop}
            className="w-10 h-9 rounded flex items-center justify-center text-lg font-bold transition-all hover:bg-opacity-30"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
