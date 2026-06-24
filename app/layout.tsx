import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ET6778V62K" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ET6778V62K');
            `,
          }}
        />
        <meta name="google-site-verification" content="google4cd6cdf221ea7b0b.html" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
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
      <a href="/" style={{ fontFamily: "'Cinzel', serif", fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-accent)', textDecoration: 'none' }}>
        ⚔️ Olden Era Guide
      </a>
      <nav style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
        <a href="/factions">Factions</a>
        <a href="/heroes">Heroes</a>
        <a href="/tier-list">Tier List</a>
        <a href="/beginners-guide">Beginner Guide</a>
        <a href="/combat">Combat</a>
        <a href="/tips">Tips</a>
        <a href="/news">News</a>
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
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Site</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="/about" style={{ color: 'var(--color-text-muted)' }}>About</a>
              <a href="/privacy" style={{ color: 'var(--color-text-muted)' }}>Privacy Policy</a>
              <a href="/terms" style={{ color: 'var(--color-text-muted)' }}>Terms of Use</a>
              <a href="/faq" style={{ color: 'var(--color-text-muted)' }}>FAQ</a>
            </div>
          </div>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', textAlign: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
          Olden Era Guide is a fan-made resource. Not affiliated with Ubisoft or Unfrozen Studio.
        </p>
      </div>
    </footer>
  );
}
