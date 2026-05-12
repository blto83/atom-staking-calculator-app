import { Calculator, BookOpen, HelpCircle, AlertTriangle, Settings } from 'lucide-react';

interface Props {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: Props) {
  return (
    <footer className="border-t border-gray-800/50 bg-gray-950/80 backdrop-blur-sm mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-sm font-bold">
                ⚛️
              </div>
              <span className="text-sm font-bold text-white">ATOM Staking Calculator</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              The most accurate free ATOM staking calculator on the web. Calculate rewards,
              track your portfolio, and project compound growth — all in your browser.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Tools</h4>
            <ul className="space-y-2">
              {[
                { label: 'Dashboard', page: 'dashboard', icon: Calculator },
                { label: 'Calculator', page: 'calculator', icon: Calculator },
                { label: 'Growth Projection', page: 'growth', icon: Calculator },
                { label: 'Reward Tracker', page: 'rewards', icon: Calculator },
                { label: 'Transaction Log', page: 'transactions', icon: Calculator },
              ].map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-xs text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: 'What is ATOM Staking?', page: 'education', icon: BookOpen },
                { label: 'FAQ', page: 'faq', icon: HelpCircle },
                { label: 'Disclaimer', page: 'disclaimer', icon: AlertTriangle },
                { label: 'Settings', page: 'settings', icon: Settings },
              ].map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-xs text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('disclaimer')}
                  className="text-xs text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('disclaimer')}
                  className="text-xs text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('disclaimer')}
                  className="text-xs text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
            <p className="text-[10px] text-gray-600 mt-4 leading-relaxed">
              This site is for informational purposes only. Not financial advice.
              Cryptocurrency investments carry risk of loss.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-gray-600">
            © {new Date().getFullYear()} ATOM Staking Calculator. All rights reserved.
          </p>
          <p className="text-[10px] text-gray-600">
            Data sourced from CoinGecko. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
