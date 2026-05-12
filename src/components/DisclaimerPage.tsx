import { AlertTriangle, Shield, FileText, Scale } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-4">
          <AlertTriangle className="w-3.5 h-3.5" />
          Legal Notice
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Disclaimer & Terms of Use
        </h1>
        <p className="text-sm text-gray-400 max-w-lg mx-auto">
          Please read this carefully before using the ATOM Staking Calculator.
        </p>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-8 border-amber-500/20">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <h2 className="text-lg font-bold text-amber-400">Important Notice</h2>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          The ATOM Staking Calculator & Portfolio Tracker ("the Service") is provided for
          informational and educational purposes only. It does not constitute financial advice,
          investment advice, tax advice, or any other kind of professional advice. By using this
          Service, you acknowledge and agree to the terms outlined on this page.
        </p>
      </div>

      <div className="space-y-6">
        <Section
          icon={Scale}
          title="Not Financial Advice"
          content={
            <>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                Nothing on this website should be construed as a recommendation to buy, sell, stake,
                or hold any cryptocurrency. The calculations, projections, and information provided
                are for illustrative purposes only.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Cryptocurrency investments are highly speculative and involve significant risk of
                loss. You should never invest more than you can afford to lose. Always conduct your
                own research (DYOR) and consult with a qualified financial advisor before making any
                investment decisions.
              </p>
            </>
          }
        />

        <Section
          icon={FileText}
          title="Accuracy of Calculations"
          content={
            <>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                While we strive to provide accurate calculations using standard financial formulas,
                the actual staking rewards you receive may differ significantly from the projections
                shown. Factors that can affect actual rewards include but are not limited to:
              </p>
              <ul className="space-y-2">
                {[
                  'Changes in network inflation parameters voted on by governance',
                  'Validator performance, uptime, and commission rate changes',
                  'Slashing events affecting your chosen validator',
                  'Fluctuations in total staked supply across the network',
                  'Protocol upgrades and parameter adjustments',
                  'Market price volatility of ATOM',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-cyan-400 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          }
        />

        <Section
          icon={Shield}
          title="Privacy & Data"
          content={
            <>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                All data entered into this calculator is stored locally in your web browser using
                localStorage. We do not collect, store, transmit, or have access to any of your
                personal information, portfolio data, or calculation inputs.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                Because data is stored locally:
              </p>
              <ul className="space-y-2">
                {[
                  'Clearing your browser data will erase all saved information',
                  'Using incognito/private mode will not persist data between sessions',
                  'Data is not synced across devices or browsers',
                  'We recommend exporting CSV backups regularly from the Settings page',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-cyan-400 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-400 leading-relaxed mt-3">
                Live price data is fetched from the CoinGecko public API. No personal information
                is transmitted during these requests.
              </p>
            </>
          }
        />

        <Section
          icon={AlertTriangle}
          title="Risk Acknowledgment"
          content={
            <>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                By using this Service, you acknowledge the following risks associated with
                cryptocurrency staking:
              </p>
              <ul className="space-y-2">
                {[
                  'Slashing risk: Validators who misbehave can cause a portion of your staked tokens to be permanently destroyed.',
                  'Liquidity risk: The 21-day unbonding period on Cosmos means you cannot access your staked ATOM immediately.',
                  'Smart contract and protocol risk: Bugs or exploits in the Cosmos Hub protocol could result in loss of funds.',
                  'Regulatory risk: Cryptocurrency regulations vary by jurisdiction and may change, potentially affecting your ability to stake or access funds.',
                  'Market risk: The value of ATOM can decrease significantly, potentially resulting in losses even when staking rewards are positive.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-red-400 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          }
        />

        <Section
          icon={FileText}
          title="Third-Party Content & Links"
          content={
            <p className="text-sm text-gray-400 leading-relaxed">
              This Service may display advertisements or links to third-party websites. We do not
              endorse, control, or assume responsibility for any third-party content, products, or
              services. Any interactions with third-party sites are at your own risk.
            </p>
          }
        />

        <Section
          icon={Scale}
          title="Limitation of Liability"
          content={
            <p className="text-sm text-gray-400 leading-relaxed">
              To the maximum extent permitted by applicable law, the creators and operators of this
              Service shall not be liable for any direct, indirect, incidental, special,
              consequential, or punitive damages arising out of or related to your use of the
              Service, including but not limited to losses from staking decisions, investment
              outcomes, or data loss.
            </p>
          }
        />

        <Section
          icon={FileText}
          title="Changes to This Disclaimer"
          content={
            <p className="text-sm text-gray-400 leading-relaxed">
              We reserve the right to modify this disclaimer at any time. Changes will be effective
              immediately upon posting. Your continued use of the Service after changes constitutes
              acceptance of the updated terms.
            </p>
          }
        />
      </div>

      <div className="glass-card rounded-xl p-6 text-center border-amber-500/20">
        <p className="text-sm text-gray-400 mb-1">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="text-xs text-gray-500">
          If you have questions about this disclaimer, please review our{' '}
          <span className="text-cyan-400">FAQ</span> section.
        </p>
      </div>
    </div>
  );
}

function Section({
  icon: Icon,
  title,
  content,
}: {
  icon: React.ElementType;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <section className="glass-card rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 text-cyan-400 shrink-0" />
        <h2 className="text-base font-bold text-white">{title}</h2>
      </div>
      {content}
    </section>
  );
}
