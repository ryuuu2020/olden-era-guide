import type { Metadata } from "next";
import Script from "next/script";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";
import Link from "next/link";

const GA_ID = "G-ET6778V62K";

export const metadata: Metadata = {
  title: {
    default: "Olden Era Guide — Heroes of Might & Magic Strategy Wiki",
    template: "%s | Olden Era Guide",
  },
  description:
    "Complete Heroes of Might and Magic: Olden Era guide. Faction tier lists, hero builds, unit stats, combat tactics, and beginner tips for all 6 factions.",
  keywords: [
    "Olden Era guide",
    "Heroes of Might and Magic Olden Era",
    "HoMM Olden Era wiki",
    "Olden Era factions",
    "Olden Era tier list",
    "Olden Era beginner guide",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="google4cd6cdf221ea7b0b.html" />
        <Script strategy="lazyOnload" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925824244664340" crossOrigin="anonymous" />
        {/* Anti-flicker: apply dark mode before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('olden-era-theme');
                  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* GA4 */}
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <Script
          strategy="lazyOnload"
          id="ga-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          }}
        />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header style={{
      background: 'var(--color-bg-card)',
      borderBottom: '2px solid var(--color-accent)',
      padding: '0.75rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '0.5rem',
    }}>
      <Link href="/" style={{ fontFamily: "'Cinzel', serif", fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-accent)', textDecoration: 'none' }}>
        ⚔️ Olden Era Guide
      </Link>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
        <Link href="/factions">Factions</Link>
        <Link href="/heroes">Heroes</Link>
        <Link href="/tier-list">Tier List</Link>
        <Link href="/beginners-guide">Beginner Guide</Link>
        <Link href="/combat">Combat</Link>
        <Link href="/tips">Tips</Link>
        <Link href="/news">News</Link>
        <ThemeToggle />
        <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none', marginLeft: '0.5rem' }}>
          ❤️ Support Us
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{
      background: 'var(--color-bg-card)',
      borderTop: '2px solid var(--color-border)',
      padding: '2rem',
      marginTop: '3rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid-cards" style={{ marginBottom: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>More Game Guides</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="https://menace-guide.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)' }}>
                MENACE Guide
              </a>
              <a href="https://dispatch-guide-sigma.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)' }}>
                Dispatch Guide
              </a>
              <a href="https://town-to-city-guide.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)' }}>
                Town to City Guide
              </a>
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Site</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/about" style={{ color: 'var(--color-text-muted)' }}>About</Link>
              <Link href="/privacy" style={{ color: 'var(--color-text-muted)' }}>Privacy Policy</Link>
              <Link href="/terms" style={{ color: 'var(--color-text-muted)' }}>Terms of Use</Link>
              <Link href="/faq" style={{ color: 'var(--color-text-muted)' }}>FAQ</Link>
            </div>
          </div>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', textAlign: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
          Olden Era Guide is a fan-made resource. Not affiliated with Ubisoft or Unfrozen Studio.
        </p>
        <div style={{ borderTop: '1px solid var(--color-border)', marginTop: '1rem', paddingTop: '1rem' }}>
          <h4 style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Support This Guide
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.8rem' }}>
            <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
              ❤️ Support Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
