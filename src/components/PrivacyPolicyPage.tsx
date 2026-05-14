import { Database, EyeOff, Lock, Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
      <section className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
          <Shield className="w-3.5 h-3.5" />
          Privacy Policy
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
          ATOM Staking Calculator & Portfolio Tracker is designed to be useful without accounts,
          wallet connections, or direct collection of sensitive wallet data.
        </p>
      </section>

      <section className="glass-card rounded-2xl p-6 sm:p-8 border-cyan-500/20">
        <div className="flex items-start gap-3">
          <Lock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <h2 className="text-lg font-bold text-white mb-2">Privacy-first design</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              The calculator does not require login, signup, wallet connection, seed phrase,
              private key, or exchange account details. You manually enter values for calculations,
              and the app is intended for informational and educational use.
            </p>
          </div>
        </div>
      </section>

      <div className="space-y-5">
        <PolicySection
          icon={Database}
          title="Information stored locally"
          paragraphs={[
            'Portfolio values, reward entries, transactions, settings, and cached live price data are stored in your browser using localStorage.',
            'This local data stays on the device and browser where it was entered. It is not synced across devices by this website.',
            'If you clear browser data, use private browsing, or switch devices, your locally stored records may no longer be available.',
          ]}
        />

        <PolicySection
          icon={EyeOff}
          title="Sensitive wallet data"
          paragraphs={[
            'This site does not ask for wallet seed phrases, private keys, wallet passwords, or exchange login credentials.',
            'The calculator does not need a wallet connection to work. You should never enter private keys or seed phrases into this or any calculator website.',
          ]}
        />

        <PolicySection
          icon={Shield}
          title="Third-party services"
          paragraphs={[
            'Live ATOM price data is requested from CoinGecko so the calculator can display market prices. These requests are used for price display only.',
            'The website may include advertising placements in the future. Third-party ad networks may use their own cookies or tracking technologies subject to their policies.',
          ]}
        />

        <PolicySection
          icon={Lock}
          title="Your responsibility"
          paragraphs={[
            'Because data is stored locally in your browser, you are responsible for saving backups if you need long-term records.',
            'Use the CSV export features for transactions and rewards if you want a copy outside your browser.',
          ]}
        />
      </div>

      <section className="glass-card rounded-xl p-5 text-center">
        <p className="text-xs text-gray-500">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </section>
    </div>
  );
}

function PolicySection({
  icon: Icon,
  title,
  paragraphs,
}: {
  icon: React.ElementType;
  title: string;
  paragraphs: string[];
}) {
  return (
    <section className="glass-card rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 text-cyan-400 shrink-0" />
        <h2 className="text-lg font-bold text-white">{title}</h2>
      </div>
      <div className="space-y-3">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-sm text-gray-400 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}