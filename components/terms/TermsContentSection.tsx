import { useState } from 'react';

interface TermsSection {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

export default function TermsContentSection() {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const termsSections: TermsSection[] = [
    {
      id: 'general',
      title: '1. General',
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            When you use Truedinkumbet's main domain, subdomains, or links connected to Truedinkumbet's social media pages, and software applications that are officially operating under Truedinkumbet and/or owned and registered by Truedinkumbet, you accept that you have understood and agreed to these Terms and Conditions.
          </p>
          <p>
            As a new member of Truedinkumbet, these Terms of Use should be read, understood, and accepted by you before completing your account registration. Truedinkumbet holds the power to modify and/or suspend any part of these Terms and Conditions without giving prior notice to the members.
          </p>
          <p>
            Players have the sole responsibility to read, understand, and accept the related rules and regulations governing the use of Truedinkumbet. These rules include – but are not limited to – General Terms and Conditions, Rules for each Game, and Rules for each Service. Players are advised to read the Game Rules on the Information button that has been made available on Truedinkumbet online casino game settings.
          </p>
          <p>
            Players have a sole responsibility to find out whether they are legally permitted to become a member of and/or participate in the Truedinkumbet casino website and other related products. Truedinkumbet online casino is not accountable for any consequences that players face after breaking local laws regarding membership and/or participation on the gambling site.
          </p>
        </div>
      )
    },
    {
      id: 'membership',
      title: '2. Membership Account',
      content: (
        <div className="space-y-4 text-gray-700">
          <h3 className="font-semibold text-lg">Registration of New Players</h3>
          <p>
            Before a player can play for real money, he/she has to sign-up for a real-money wagering account.
          </p>
          <p>
            All new players are mandated to submit correct details during registration. Also, it is mandatory to submit a valid form of identification. This information is used as part of the Know-Your-Customer Procedures.
          </p>
          <p>
            All new players have to choose their preferred currency during registration. After registration, new players may not change their currency.
          </p>
          <p>
            Truedinkumbet reserves the right to provide different banking options to dispense and receive funds on behalf of the management.
          </p>
          <p>
            On Truedinkumbet, users may have only one account. If an additional account is found with the same person, it shall be subjected to a temporary ban or permanent ban. Truedinkumbet will forfeit any cash balance and pending winnings on any suspended or banned accounts.
          </p>
          <p>
            Users below the age of 18 are refrained from registering on Truedinkumbet. Truedinkumbet reserves the right to verify proof of age from a new Truedinkumbet member through our support team. Also, the support team holds the right to place any account(s), in question, under suspension while performing age verification.
          </p>
          <p>
            Be it on the main domain, sub-domain, or related URLs and software registered, operated, or owned by Truedinkumbet, players from the following countries are restricted from registering or accessing Truedinkumbet online casino products: United States of America, Taiwan, Hong Kong, Singapore, and the Philippines. No verifiable transaction coming and/or going through the countries will be allowed. Also, the accounts shall be placed under suspension with the subsequent investigation if need be.
          </p>
          <p>
            Players have the sole responsibility to determine whether their local laws and authorities permit his/her membership or participation in Truedinkumbet.
          </p>
          <p>
            By signing up on Truedinkumbet you accept the risk of losing the deposited money when you bet with real funds while playing real-money games or bets.
          </p>
          <p>
            No player shall involve in fraudulent activities, including events to defraud Truedinkumbet, fixed matches on Truedinkumbet, and/or any other illegal activities against Truedinkumbet and its members. Unlawful activities may include – but are not limited to – the use of software-assisted tools, such as hardware devices and/or robots that may hamper the products and services of Truedinkumbet.
          </p>

          <h3 className="font-semibold text-lg mt-6">Account Details</h3>
          <p>
            Designated passwords by Truedinkumbet are the responsibilities of each player to secure. As long as a player provides the correct username and password on the login space, every bet placed is considered valid, regardless of the person that put in the details.
          </p>
          <p>
            Whenever a player feels that his/her account security is compromised, he/she is obligated to modify the password.
          </p>
          <p>
            As a new or existing player, all members are advised to refrain from sharing their real-money account with others.
          </p>
          <p>
            Players from restricted countries, including the United States of America, Hong Kong, Singapore, Taiwan, and the Philippines, are disallowed to perform registration, play games, or withdraw winnings on Truedinkumbet.
          </p>
          <p>
            For verification, all players must provide complete and accurate information. Players have the sole responsibility of notifying Truedinkumbet's support team if there is a need to modify personal details.
          </p>
          <p>
            Players have held accountable for any related taxes to their winnings according to their specific local laws.
          </p>

          <h3 className="font-semibold text-lg mt-6">Account Suspensions and Closures</h3>
          <p>
            Truedinkumbet holds the right to put any account under suspension or ban without notifying the affected player. This right involves forfeiture of the current balance and pending winnings in the account, in question, if:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>The player is found to operate more than a single account.</li>
            <li>The player is suspected of defrauding Truedinkumbet's website or relevant software or engaging in any other illegal activities.</li>
            <li>The player is found to have taken advantage of any Truedinkumbet software or system deliberately or intentionally cheat for his/her own good or at the detriment of Truedinkumbet's properties.</li>
          </ul>
          <p className="mt-4">
            Truedinkumbet online casino shall have the right to hold the owner of a suspended account(s) legally responsible for any incurred debts, losses, or expenses. The player, in question, accepts not to hold Truedinkumbet accountable for any similar claims.
          </p>
          <p>
            Truedinkumbet holds the right to ban any accounts temporarily or permanently after being suspected of multiple ownership. This right includes the forfeiture of all wagers, promotions, and winnings associated with the account without prior justification or notification.
          </p>
        </div>
      )
    },
    {
      id: 'deposits-withdrawals',
      title: '3. Deposits and Withdrawals',
      content: (
        <div className="space-y-4 text-gray-700">
          <h3 className="font-semibold text-lg">Deposits</h3>
          <p>
            During the opening of the account with Truedinkumbet, players are expected to choose their preferred currency. The following currencies are acceptable on Truedinkumbet:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Australian Dollar (AUD)</li>
            <li>US Dollar (USD)</li>
            <li>Bitcoin (BTC)</li>
            <li>Ethereum (ETH)</li>
          </ul>
          <p className="mt-4">
            Should a player make a withdrawal request in a case where a deposit has not been made at least once, Truedinkumbet's system will automatically decline it.
          </p>
          <p>
            Unless otherwise granted in a Truedinkumbet promotion, every player's deposits are subjected to 1x turnover. In other words, a player has to turn over his/her deposit amount at least once prior to making a withdrawal request. In a case where the deposit value is not wagered in full prior to submitting a withdrawal request, Truedinkumbet may include charges to run the withdrawal request.
          </p>
          <p>
            A withdrawal fee associated with an incomplete deposit turnover may be collected from relevant bonuses won by the player in question.
          </p>
          <p>
            In a case where no applicable bonuses or winnings exist, Truedinkumbet will deduct the withdrawal fee from the amount requested by the player.
          </p>
          <p>
            Players are allowed to bet only after completing the deposit process. The deposited amount will reflect on the player's casino wallet.
          </p>
          <p>
            Depending on a player's preferred payment platform, bank transfers may attract extra charges. A player agrees that all charges related to deposit transactions will be paid by the player.
          </p>
          <p>
            All deposits are to be used solely for using services and products on Truedinkumbet. Truedinkumbet holds the right to close or suspend any accounts if the Fraud Team detects that the deposit in a player's casino wallet is being used for illegal activities. Once an account is suspended or banned, all associated winnings and bonuses will be forfeited.
          </p>
          <p>
            In a case where a mistake occurred due to transaction errors or an amount credited is beyond the amount deposited, Truedinkumbet reserves the right to deduct the excess amount. If the player has used the difference between the two values, Truedinkumbet holds the power to claim the used amount via the winnings or bonuses earned by the player.
          </p>

          <h3 className="font-semibold text-lg mt-6">Withdrawal</h3>
          <p>
            A player can only withdraw to the registered accounts under the player's Truedinkumbet online casino account.
          </p>
          <p>
            Truedinkumbet will transfer withdrawal requests to only the same account used for depositing funds into the casino account.
          </p>
          <p>
            For withdrawal purposes, players have to submit their login details to access their accounts and choose the withdrawal option on Truedinkumbet. Withdrawal amounts will be removed from the current funds in the player's account when placing the request.
          </p>
          <p>
            Truedinkumbet provides an option that allows players to terminate withdrawal requests should they choose to do so before completing the withdrawal process.
          </p>
          <p>
            Truedinkumbet holds the power to request extra fees from players should Truedinkumbet incur chargeback fees from the payment platform(s).
          </p>
          <p>
            Withdrawal may incur charges, depending on a player's preferred method. Considering that Truedinkumbet doesn't ask for withdrawal fees, all fees related to withdrawals are charged by the bank. Thus, Truedinkumbet advises players to learn about applicable fees from their respective banks or payment platforms.
          </p>
          <p>
            Reports on winnings or losses for tax purposes are to be provided by the players.
          </p>
        </div>
      )
    },
    {
      id: 'promotions',
      title: '4. Casino Promotions',
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            Truedinkumbet's promotions and bonuses are limited to a single player with a specific IP address, bank account, email address, telephone number, and household.
          </p>
          <p>
            Truedinkumbet holds the right to terminate or suspend the provision of promotional offer to any player without prior notice or reason.
          </p>
          <p>
            Only verified accounts and players with at least one deposit can enjoy promotions and bonuses from Truedinkumbet.
          </p>
          <p>
            Players have the sole responsibility to read, comprehend, and agree to the specific Terms and Conditions that apply to the promotional and bonus offers before partaking. Truedinkumbet shall deliver appropriate sanctions should any player breach the Terms and Conditions associated with specific promotion or bonus.
          </p>
        </div>
      )
    },
    {
      id: 'disputes-payout',
      title: '5. Disputes and Payout',
      content: (
        <div className="space-y-4 text-gray-700">
          <h3 className="font-semibold text-lg">Disputes</h3>
          <p>
            Alongside the Game Rules, which are associated with specific products, these Terms and Conditions of Truedinkumbet applies to every bet.
          </p>
          <p>
            Truedinkumbet holds the sole power to put any bet or fixture under cancellation or suspension at any time for whatsoever reason. Furthermore, Truedinkumbet holds the right to place any sports bets or other casino products under a temporary ban without prior notice or reasons.
          </p>
          <p>
            In a case where there is a discrepancy between the winnings and the amount credited to the player's account, Truedinkumbet holds the right to void, recalculate, or modify the bets placed by a player. Any other unpredictable human and/or technical errors shall be treated under the same policy, should there be any. This policy may apply in the following cases:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>When winnings are credited to the wrong player.</li>
            <li>When inaccurate results led to crediting incorrect amounts into a player's account.</li>
            <li>When a player withdraws another player's winnings.</li>
          </ul>
          <p className="mt-4">
            Truedinkumbet holds the right to call an event's planned kick-off time as the match's official "OFF" if an official for an event is absent. If an event has already started and the bet is accepted, it will stand, provided that the outcome is unknown at the time of placing and accepting the bet. However, Truedinkumbet holds the power to cancel a bet and/or any winnings that come out of the game, provided that the outcome is known at the time of placing and accepting the bet.
          </p>
          <p>
            In a case where the Truedinkumbet team believes that a bet was placed after the result is known to the player, Truedinkumbet reserves the right to cancel the live play bets and/or winnings.
          </p>
          <p>
            Truedinkumbet holds the right to place an account under suspension or ban if the Truedinkumbet team believes that the member participates using a coordinated effort to scam Truedinkumbet and its relevant systems. Truedinkumbet shall forfeit the winnings from the bets.
          </p>
          <p>
            Players have sole responsibility to ensure that they place a bet as they deem fit as confirmed bets cannot be terminated.
          </p>
          <p>
            Truedinkumbet's system will only accept and confirm bets placed by a player having sufficient funds. If a player collects illegitimate funds from another account, the stakes will be voided. The same policy applies to funds that have been invalidated because of technical errors or incorrect crediting.
          </p>
          <p>
            Truedinkumbet and the player accept that the system's transaction logs shall be used to settle any dispute that arises, and the decision will be binding and final.
          </p>

          <h3 className="font-semibold text-lg mt-6">Payout</h3>
          <p>
            The number of winnings per day is subject to the rules and regulations of Truedinkumbet. Players can find the rules and regulations in the FAQ section of the website.
          </p>
          <p>
            There is a limit of 180,000 AUD (or the equivalent value, depending on a player's preferred currency) for sports bets payout.
          </p>
        </div>
      )
    },
    {
      id: 'privacy',
      title: '6. Privacy Policy',
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            To facilitate Truedinkumbet's website operations, Truedinkumbet has stated how the player's information is collated and used under the privacy policy.
          </p>
          <p>
            Players hereby acknowledge and agree that Truedinkumbet uses personal information for the purpose of facilitating the operation of the website.
          </p>
          <p>
            Truedinkumbet only applies the player's information to allow the player's involvement in the products and promotions of the website.
          </p>
          <p>
            Players hereby acknowledge and accept that Truedinkumbet can share relevant information with partnered providers for the purpose of payment, game access, and other operations. The sole purpose of sharing personal information is to facilitate the general operation of Truedinkumbet's website and systems. Furthermore, Truedinkumbet may use player's data for the following operations:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Verification of betting transactions</li>
            <li>Verification of payment</li>
            <li>Market research to enhance promotions and bonuses</li>
            <li>Adhere with regulatory demands</li>
            <li>Crosscheck transactions to avoid scams, money laundering, bonus hijacking, cheating, and other questionable betting activities</li>
          </ul>
          <p className="mt-4">
            Truedinkumbet support representatives may reach out to players through the following channels: Email correspondence, SMS, and phone call. For the purpose of security or training, voice calls may be recorded. The recording may be used for dispute resolution or clarification of any inquiry.
          </p>
          <p>
            Players hereby acknowledge and agree that the Truedinkumbet website may use cookies.
          </p>
          <p>
            Truedinkumbet holds the right to modify and update the Privacy Policy without sending prior notifications to players. Any changes made to the Privacy Policy page become effective with immediate effect.
          </p>
          <p>
            Truedinkumbet holds the right to release reports about winnings on the website, which may include a username and the amount won.
          </p>
        </div>
      )
    },
    {
      id: 'betting-rules',
      title: '7. Product Betting Rules',
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            The policy governing the betting procedures for Truedinkumbet online casino products and offerings shall be explained in this section. If any error is found in the betting transactions, Truedinkumbet holds the right to terminate or correct the bets. This policy may be applicable in the following cases:
          </p>

          <h3 className="font-semibold text-lg mt-4">Sports Betting</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>A released report about winnings on the website, including username and amount won.</li>
            <li>Bets that are accepted by Truedinkumbet systems on closed/suspended events or markets.</li>
            <li>Incorrect results and settlements that are already posted.</li>
            <li>Incorrect information relating to bets posted before the commencement of an event such as Live Plays. Truedinkumbet shall immediately correct the errors found in incorrect information, which has been posted.</li>
            <li>Incorrectly accepted late bets by the system as a result of human and/or technical errors. These errors will be settled, according to the following conditions.</li>
          </ul>

          <h3 className="font-semibold text-lg mt-4">Live Casino Betting & Dealers</h3>
          <p>
            Truedinkumbet will not be accountable for any losses, expenses, or damages, directly or indirectly, incurred while using Truedinkumbet's website, its sub-domains, related URLs, and its contents. This may include – but is not limited to – video streaming issues, internet errors, server disruptions, downtimes, and other technical interruptions that may directly affect game performance.
          </p>
          <p>
            If a player experiences sub-optimal connectivity, poor internet connection, and desktop/mobile issues, Truedinkumbet cannot be held accountable.
          </p>
          <p>
            Truedinkumbet will not be held responsible for refunding players; should incorrect results arise due to human or technical errors.
          </p>
          <p>
            A bet shall stand and be subjected to the match result if, after confirming and accepting a bet, players experience any technical failure. The transactions tab are designed to allow players to check the state of their bet, should they choose to do so.
          </p>
          <p>
            All bets shall be voided if the casino system malfunctions automatically.
          </p>

          <h3 className="font-semibold text-lg mt-4">Games with Random Number Generators (RNG)</h3>
          <p>
            Truedinkumbet will not be held accountable if players encounter an error relating to RNG, progressive jackpots, or payout matrixes in a specific game.
          </p>
          <p>
            Should a player experience desktop/mobile malfunction, internet connectivity issues, power interruptions, or application glitches, all confirmed and accepted bets would stand. Should players choose to view their results, they can consult the transaction tabs.
          </p>
          <p>
            All bets shall be voided if the casino system malfunctions automatically.
          </p>
          <p>
            Players are restricted from using third-party programs in Truedinkumbet products involving RNG systems. This policy applies to free games and real money wagers.
          </p>

          <h3 className="font-semibold text-lg mt-4">Lottery Games</h3>
          <p>
            Truedinkumbet is not accountable for any losses, expenses, or damages directly or indirectly incurred while using Truedinkumbet's website, its sub-domains, related URLs, and its contents. This may include – but is not limited to – video streaming issues, internet errors, server disruptions, downtimes, and other technical interruptions that may affect game performance directly.
          </p>
          <p>
            All bets involving inaccurate results, which have been posted, and disputes will be voided.
          </p>
          <p>
            If incorrect information about a posted bet before the start of an event such as live plays emerges, Truedinkumbet will instantly rectify the errors.
          </p>
          <p>
            Should a player experience desktop/mobile malfunction, internet connectivity issues, power interruptions, or application glitches, all confirmed and accepted bets would stand. Should players choose to view their results, they can consult the transaction tabs.
          </p>
          <p>
            If a bet is accepted after an event has started officially, the bet will be considered void.
          </p>
        </div>
      )
    },
    {
      id: 'systems-technology',
      title: '8. Casino Systems and Technology',
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            As shown on the website, Truedinkumbet holds an exclusive right over the brand name, logo, tagline, and casino systems. Any unauthorized use of the brand name, logo, taglines, and casino systems, as shown on the website, will be subjected to legal proceedings.
          </p>
          <p>
            Players may be asked to download Truedinkumbet software or applications to access Truedinkumbet's products and services. A third-party associate of Truedinkumbet may require players to acknowledge and accept their Terms and Conditions before using their products and services. Truedinkumbet will not be held accountable for any and/or all liabilities concerning the use of services/software from any third-party associate. Truedinkumbet encourages all players to choose or not to use the third-party associate's services if their Terms and Conditions are not convenient for you.
          </p>
          <p>
            Only the software that is explicitly provided on Truedinkumbet's website, its subdomains, and related URLs should be used by the players to access and play in Truedinkumbet's systems, products, and services.
          </p>
          <p>
            Players are restricted from modifying, reproducing, or copying the source code, software applications, and other casino content belonging to Truedinkumbet. Truedinkumbet strongly prohibits players from bypassing the website's security systems. This policy applies – but is not limited to – the use of bots.
          </p>
          <p>
            Players accept that Truedinkumbet holds an exclusive right over the software provided on the casino site. Furthermore, every third-party software, which is licensed to Truedinkumbet, is viewed as a proprietary product. Players do not hold any intellectual property rights over the Truedinkumbet and associates' software and systems by using the software and systems.
          </p>
          <p>
            Truedinkumbet does not promise that it's software and systems will meet every player's expectations, including the software licensed to Truedinkumbet by a third party.
          </p>
          <p>
            Truedinkumbet will not be held accountable for any errors in its system, features, and other related software. Truedinkumbet holds the power to remove or suspend any troubling aspects of the systems that affect a player's experience.
          </p>
          <p>
            Truedinkumbet works to provide a 24/7 service to players on its websites, subdomains, and related URLs. Truedinkumbet will continue to work towards making its websites and products available.
          </p>
          <p>
            Truedinkumbet is not responsible for any damage or loss incurred due to viruses, distributed denial-of-service attacks (DDOS), and malfunction in hardware/software that negatively affects the operation of Truedinkumbet.
          </p>
        </div>
      )
    },
    {
      id: 'liability',
      title: '9. Liability',
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            Truedinkumbet is not responsible for any cost, losses, expenses or damages, incidental or otherwise, indirectly or directly, incurred due to the player's use of the website, systems, and related products.
          </p>
          <p>
            Truedinkumbet does not guarantee the accuracy of every piece of information displayed on the website, its subdomains, and other relevant URLs.
          </p>
          <p>
            Players have the sole responsibility of determining the risk of their participation and/or membership in Truedinkumbet.
          </p>
          <p>
            Players hereby accept not holding Truedinkumbet, its management board, staff, partners and associated providers, for any damage, expenses, loss, or other liabilities incurred directly or indirectly from their use of systems and products offered by Truedinkumbet.
          </p>
        </div>
      )
    },
    {
      id: 'account-security',
      title: '10. Members\' Account Security',
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            Truedinkumbet performs under relevant regulations and complies with strict data privacy laws. Truedinkumbet will not share personal data with any unauthorized third party or service provider. High-security encryptions are used to secure any information shared with Truedinkumbet's associates.
          </p>
          <p>
            Truedinkumbet holds the right to provide personal information to authorized and relevant third parties to enable integral services for players' gambling experience.
          </p>
          <p>
            Truedinkumbet holds the power to choose not to provide membership to any and all individuals who are reasonably suspected of having bad intentions towards Truedinkumbet's products, services, and players. This policy also applies to previous members holding a verified record of scamming Truedinkumbet and its associates.
          </p>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
        <p className="text-gray-600 mb-12">Please read these terms carefully before using Truedinkumbet</p>

        <div className="space-y-4">
          {termsSections.map((section) => {
            const isExpanded = expandedSections[section.id] || false;

            return (
              <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <h2 className="text-lg font-semibold text-gray-900 text-left">{section.title}</h2>
                  <span
                    className={`text-gray-600 transition-transform flex-shrink-0 inline-block text-lg`}
                    style={{
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transitionDuration: '200ms',
                    }}
                  >
                    ▼
                  </span>
                </button>
                {isExpanded && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    {typeof section.content === 'string' ? (
                      <p className="text-gray-700 leading-relaxed">{section.content}</p>
                    ) : (
                      section.content
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Last Updated:</strong> {new Date().getFullYear()}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            If you have any questions about these Terms & Conditions, please contact our Customer Service team via Live Chat or email.
          </p>
        </div>
      </div>
    </section>
  );
}
