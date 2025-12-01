export default function TermsContentSection() {
  const sections = [
    {
      title: "1. General Terms",
      content:
        "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.",
    },
    {
      title: "2. User Responsibilities",
      content:
        "Users are responsible for maintaining the confidentiality of their account information and password.",
    },
    {
      title: "3. Intellectual Property",
      content:
        "All content on this website is protected by copyright and other intellectual property laws.",
    },
    {
      title: "4. Limitation of Liability",
      content:
        "In no event shall Truedinkumbet be liable for any indirect, incidental, special, consequential or punitive damages.",
    },
    {
      title: "5. Governing Law",
      content:
        "These terms and conditions are governed by the laws of the Philippines and are subject to arbitration.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {section.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg border-l-4 border-orange-500">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Responsible Gaming
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Truedinkumbet is committed to promoting responsible gaming. If you
            experience gambling-related problems, please seek help from
            appropriate support organizations.
          </p>
        </div>
      </div>
    </section>
  );
}
