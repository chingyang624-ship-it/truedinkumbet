export default function ResponsibleGamingSignsSection() {
  const signs = [
    'Borrowing or selling jewels and personal items for gambling',
    'Stealing and/or selling things not yours',
    'Finding it difficult to resist gambling',
    'Constantly thinking about gambling',
    'Spending more than you can ever win',
    'Thinking that you can repay loans by gambling and winning',
    'Assuming that gambling online for long can help in winning big',
    'Getting yourself isolated from family and social circle',
    'Reducing interaction with others',
    'Feeling guilty about the irresponsible attitude towards family or work',
  ];

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <h2 className="text-2xl font-bold mb-2">
              <b className="font-black">Signs of Problem Gambling</b>
            </h2>

            <p className="leading-relaxed mb-6">
              As a proud member of Responsible Gambling, our company has strong policies on how to help
              people gamble with care. These are the signs of problem gambling we offer help in:
            </p>

            <ul className="list-disc list-inside space-y-2">
              {signs.map((sign, index) => (
                <li key={index} className="text-left leading-relaxed">
                  {sign}
                </li>
              ))}
            </ul>

            <p className="leading-relaxed mt-6">
              If you have or see anyone with these behavioral changes, do not hesitate to contact us. These
              are a few among the other problems as posted by the Responsible Gambling Council.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
