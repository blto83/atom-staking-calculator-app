import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found | ATOM Staking Calculator';
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => {
      meta.remove();
    };
  }, []);

  return (
    <div className="max-w-xl mx-auto text-center py-20">
      <p className="text-6xl font-bold text-cyan-400 mb-4">404</p>
      <h1 className="text-2xl font-bold text-white mb-3">Page not found</h1>
      <p className="text-gray-400 mb-8 leading-relaxed">
        The page you are looking for does not exist or may have moved.
      </p>
      <div className="flex items-center justify-center gap-4">
        <a
          href="/"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl px-5 py-2.5 text-sm transition-colors no-underline"
        >
          Go Home
        </a>
        <a
          href="/learn"
          className="border border-gray-700 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 font-semibold rounded-xl px-5 py-2.5 text-sm transition-colors no-underline"
        >
          Browse Guides
        </a>
      </div>
    </div>
  );
}
