import { useState } from 'react';
import { Link2, Check, Mail } from 'lucide-react';
import { SITE_URL } from '../data/articles';

interface Props {
  slug: string;
  title: string;
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.26 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function ShareButtons({ slug, title }: Props) {
  const [copied, setCopied] = useState(false);

  const canonicalUrl = `${SITE_URL}/learn/${slug}`;
  const encodedUrl = encodeURIComponent(canonicalUrl);
  const encodedTitle = encodeURIComponent(title);

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const mailtoUrl = `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(canonicalUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for environments without clipboard API
      const el = document.createElement('textarea');
      el.value = canonicalUrl;
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="border-t border-gray-800/60 pt-8 mt-8">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
        Share this article
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {/* Copy Link */}
        <button
          onClick={handleCopy}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 cursor-pointer ${
            copied
              ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
              : 'bg-gray-800/50 border-gray-700/60 text-gray-300 hover:bg-gray-800 hover:border-cyan-500/40 hover:text-cyan-400'
          }`}
          aria-label="Copy article link"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Link2 className="w-4 h-4" />
              Copy link
            </>
          )}
        </button>

        {/* X / Twitter */}
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border bg-gray-800/50 border-gray-700/60 text-gray-300 hover:bg-gray-800 hover:border-gray-500/60 hover:text-white transition-all duration-200"
          aria-label="Share on X (Twitter)"
        >
          <XIcon />
          X
        </a>

        {/* LinkedIn */}
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border bg-gray-800/50 border-gray-700/60 text-gray-300 hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50 hover:text-[#0ea5e9] transition-all duration-200"
          aria-label="Share on LinkedIn"
        >
          <LinkedInIcon />
          LinkedIn
        </a>

        {/* Facebook */}
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border bg-gray-800/50 border-gray-700/60 text-gray-300 hover:bg-[#1877f2]/15 hover:border-[#1877f2]/40 hover:text-[#1877f2] transition-all duration-200"
          aria-label="Share on Facebook"
        >
          <FacebookIcon />
          Facebook
        </a>

        {/* Email */}
        <a
          href={mailtoUrl}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border bg-gray-800/50 border-gray-700/60 text-gray-300 hover:bg-gray-800 hover:border-gray-600/60 hover:text-gray-200 transition-all duration-200"
          aria-label="Share via email"
        >
          <Mail className="w-4 h-4" />
          Email
        </a>
      </div>
    </div>
  );
}
