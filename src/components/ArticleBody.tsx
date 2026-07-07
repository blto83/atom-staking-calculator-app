import { Calculator, TrendingUp, ChartBar as BarChart3, Zap, Circle as HelpCircle, Clock, CircleCheck as CheckCircle2 } from 'lucide-react';
import { ContentBlock, HeadingIcon } from '../types';

const iconMap: Record<HeadingIcon, React.ComponentType<{ className?: string }>> = {
  calculator: Calculator,
  'trending-up': TrendingUp,
  'chart-bar': BarChart3,
  zap: Zap,
  'help-circle': HelpCircle,
  'help-circle-violet': HelpCircle,
  clock: Clock,
  'check-circle': CheckCircle2,
};

interface Props {
  blocks: ContentBlock[];
  onNavigate?: (page: string) => void;
  onArticleClick?: (slug: string) => void;
}

export default function ArticleBody({ blocks, onNavigate, onArticleClick }: Props) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'intro':
            return (
              <p key={index} className="text-base text-slate-600 dark:text-slate-300 italic font-medium leading-relaxed mb-6">
                {block.text}
              </p>
            );

          case 'heading':
            const IconComponent = block.icon ? iconMap[block.icon] : null;
            if (block.level === 2) {
              return (
                <h2 key={index} className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5 mt-8 mb-4">
                  {IconComponent && <IconComponent className={getIconColor(block.icon)} />}
                  {block.text}
                </h2>
              );
            } else {
              return (
                <h3 key={index} className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mt-6 mb-3">
                  {block.text}
                </h3>
              );
            }

          case 'paragraph':
            return <p key={index}>{block.text}</p>;

          case 'formula':
            return (
              <div key={index} className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/30 rounded-xl p-4 my-4 font-mono text-sm text-slate-700 dark:text-slate-300 text-center">
                {block.text}
              </div>
            );

          case 'callout':
            if (block.variant === 'quick-take') {
              return (
                <div key={index} className="bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/30 rounded-xl p-5 my-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500 dark:text-cyan-400 mb-2">{block.label || 'Quick Take'}</p>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">{block.text}</p>
                </div>
              );
            } else if (block.variant === 'quick-take-warning') {
              return (
                <div key={index} className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-5 my-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500 dark:text-amber-400 mb-2">{block.label || 'Quick Take'}</p>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">{block.text}</p>
                </div>
              );
            } else {
              return (
                <div key={index} className="border border-slate-200 dark:border-slate-800/60 rounded-xl p-5 bg-slate-50 dark:bg-slate-900/40 my-8 text-xs sm:text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed">
                  <strong className="text-slate-900 dark:text-white font-bold not-italic">{block.label || 'Disclaimer'}:</strong> {block.text}
                </div>
              );
            }

          case 'example-calculation':
            return (
              <div key={index} className="border border-slate-200 dark:border-slate-800/60 rounded-xl p-5 bg-slate-50 dark:bg-slate-900/40 my-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-4">Example Calculation</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{block.introText}</p>
                <div className="space-y-2">
                  {block.rows.map((row) => (
                    <div key={row.rate} className={`flex items-center justify-between p-3 rounded-lg bg-${row.color}-500/10 border border-${row.color}-500/20`}>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        <span className={`text-${row.color}-600 dark:text-${row.color}-400`}>{row.rate} commission</span> validator
                      </span>
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        Net: <strong className="text-slate-900 dark:text-white">{row.net}</strong>
                      </span>
                    </div>
                  ))}
                </div>
                {block.footnote && (
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-3 italic">{block.footnote}</p>
                )}
              </div>
            );

          case 'table':
            return (
              <div key={index} className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-800/60">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800">
                      {block.headers.map((header, i) => (
                        <th key={i} className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, i) => (
                      <tr key={i} className={`border-b border-slate-100 dark:border-slate-800/40 ${i % 2 === 0 ? 'bg-white dark:bg-transparent' : 'bg-slate-50/50 dark:bg-slate-900/20'}`}>
                        {row.map((cell, j) => (
                          <td key={j} className={`py-3 px-4 text-xs sm:text-sm ${block.highlightColumn === j ? 'font-bold text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300'}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case 'bullet-list':
            return (
              <div key={index} className="space-y-3">
                {block.items.map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-3 rounded-lg bg-slate-100 dark:bg-slate-800/40">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white text-sm">{item.label}.</span>{' '}
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            );

          case 'faq':
            return (
              <div key={index} className="space-y-3 my-6">
                {block.items.map((item, i) => (
                  <div key={i} className="border border-slate-200 dark:border-slate-800/60 rounded-xl p-4 bg-slate-50 dark:bg-slate-900/40">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{item.question}</h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">{item.answer}</p>
                  </div>
                ))}
              </div>
            );

          case 'key-takeaways':
            return (
              <div key={index} className="border border-slate-200 dark:border-slate-800/60 rounded-xl p-5 bg-slate-50 dark:bg-slate-900/40 my-4">
                <ul className="space-y-3">
                  {block.items.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );

          case 'internal-link':
            return (
              <p key={index}>
                {block.prefix}
                <button onClick={() => onArticleClick?.(block.articleSlug)} className="text-cyan-600 dark:text-cyan-400 hover:underline font-bold cursor-pointer">
                  {block.linkText}
                </button>
                {block.suffix}
              </p>
            );

          case 'calculator-cta':
            return (
              <p key={index}>
                {block.prefix}
                <button onClick={() => onNavigate?.('calculator')} className="text-cyan-600 dark:text-cyan-400 hover:underline font-bold cursor-pointer">
                  ATOM Staking Calculator
                </button>
                {block.suffix}
              </p>
            );

          default:
            return null;
        }
      })}
    </>
  );
}

function getIconColor(icon?: HeadingIcon): string {
  switch (icon) {
    case 'calculator':
      return 'w-5 h-5 text-cyan-500 dark:text-cyan-400';
    case 'trending-up':
      return 'w-5 h-5 text-cyan-500 dark:text-cyan-400';
    case 'chart-bar':
      return 'w-5 h-5 text-indigo-500 dark:text-indigo-400';
    case 'zap':
      return 'w-5 h-5 text-amber-500 dark:text-amber-400';
    case 'help-circle':
      return 'w-5 h-5 text-cyan-500 dark:text-cyan-400';
    case 'help-circle-violet':
      return 'w-5 h-5 text-violet-500 dark:text-violet-400';
    case 'clock':
      return 'w-5 h-5 text-indigo-500 dark:text-indigo-400';
    case 'check-circle':
      return 'w-5 h-5 text-emerald-500 dark:text-emerald-400';
    default:
      return 'w-5 h-5 text-cyan-500 dark:text-cyan-400';
  }
}
