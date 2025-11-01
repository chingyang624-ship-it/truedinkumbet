import { Users, Smartphone, CreditCard, Lock } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Customer Support',
    description:
      'BK8 Malaysia provides reliable, around-the-clock customer service through live chat, WhatsApp, and email in multiple languages, ensuring quick, polite, and professional responses for a smooth experience.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Customer-Support.png',
  },
  {
    icon: Smartphone,
    title: 'User-Friendly Interface',
    description:
      'BK8 features a user-friendly interface designed for seamless play across both desktop and mobile platforms, ensuring easy navigation and smooth gameplay.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/User-Friendly-Interface.png',
  },
  {
    icon: CreditCard,
    title: 'Multiple Payment Options',
    description:
      'BK8 supports a wide range of payment methods, including local Malaysian bank transfers, e-wallets, and cryptocurrency, allowing users to deposit and withdraw funds with ease through fast transactions.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Multiple-Payment-Options.png',
  },
  {
    icon: Lock,
    title: 'Licensed and Secure',
    description:
      'BK8 Casino Malaysia is fully licensed by a recognized international regulator, ensuring that every game is tested for fairness, every transaction is encrypted, and your data, money, and trust are always protected.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Licensed-and-Secure.png',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose BK8 Malaysia?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <img src={feature.image} alt={feature.title} className="w-20 h-20 mx-auto mb-4 rounded" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
