export default function SlotsPaymentSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Safe & Secure Payment Options
        </h2>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            At Truedinkumbet, we support a range of deposit and withdrawal methods
            to make your transactions smooth and secure. From credit cards to bank
            transfers, we've got you covered with AUD-friendly options.
          </p>

          <ul className="space-y-4 text-gray-600">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>Credit & Debit Cards:</strong> Visa and Mastercard accepted
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>Bank Transfers:</strong> Direct deposits to your gaming
                wallet
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>E-wallets:</strong> Fast and convenient digital payments
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>Cryptocurrency:</strong> Bitcoin and other digital currencies
              </span>
            </li>
          </ul>

          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            All transactions are encrypted and secured. Withdrawals are typically
            processed within 24-48 hours, with some methods even faster.
          </p>
        </div>
      </div>
    </section>
  );
}
