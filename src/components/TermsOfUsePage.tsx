import { AlertTriangle, Calculator, CheckCircle2, FileText, Scale } from 'lucide-react';

export default function TermsOfUsePage() {
  return (
    <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
      <section className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
          <Scale className="w-3.5 h-3.5" />
          Terms of Use
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Terms of Use</h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
          These terms explain how ATOM Staking Calculator & Portfolio Tracker should be used and
          what users should understand before relying on calculator outputs.
        </p>
      </section>

      <section className="glass-card rounded-2xl p-6 sm:p-8 border-amber-500/20">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h2 className="text-lg font-bold text-white mb-2">Educational estimates only</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              The calculator provides estimates based on the numbers entered by the user. It does
              not provide financial guarantees, investment advice, tax advice, or staking recommendations.
            </p>
          </div>
        </div>
      </section>

      <div className="space-y-5">
        <TermSection
          icon={Calculator}
          title="Calculator estimates"
          points={[
            'Reward, ROI, APY-style, and growth projections are mathematical estimates only.',
            'Actual ATOM staking rewards may change because of network conditions, validator performance, inflation parameters, commission changes, and market price volatility.',
            'The site does not guarantee any reward amount, future price, profit, or return on investment.',
          ]}
        />

        <TermSection
          icon={FileText}
          title="User responsibility"
          points={[
            'You are responsible for checking all inputs, including ATOM amount, APR, validator commission, buy price, and current price.',
            'You are responsible for your own staking, validator selection, wallet security, tax reporting, and investment decisions.',
            'Never enter private keys, seed phrases, or wallet passwords into this website.',
          ]}
        />

        <TermSection
          icon={Scale}
          title="No professional advice"
          points={[
            'Nothing on this website should be interpreted as financial, legal, tax, or investment advice.',
            'Users should do their own research and consult qualified professionals before making financial decisions.',
            'Cryptocurrency and staking involve risk, including potential loss of principal.',
          ]}
        />

        <TermSection
          icon={CheckCircle2}
          title="Acceptable use"
          points={[
            'Use the platform for personal research, education, and portfolio planning.',
            'Do not attempt to misuse, reverse engineer, attack, or disrupt the website or its data sources.',
            'Do not rely on this site as the only source of truth for staking or investment decisions.',
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

function TermSection({
  icon: Icon,
  title,
  points,
}: {
  icon: React.ElementType;
  title: string;
  points: string[];
}) {
  return (
    <section className="glass-card rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 text-cyan-400 shrink-0" />
        <h2 className="text-lg font-bold text-white">{title}</h2>
      </div>
      <div className="space-y-3">
        {points.map((point) => (
          <div key={point} className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
            <p className="text-sm text-gray-400 leading-relaxed">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}