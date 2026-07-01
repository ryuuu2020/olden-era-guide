import type { Metadata } from "next";
import Script from "next/script";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";
import Link from "next/link";
import SchemaMarkup from '@/shared/SchemaMarkup';


const GA_ID = "G-ET6778V62K";

export const metadata: Metadata = {
  title: {
    default: "Olden Era Guide — Heroes of Might & Magic Strategy Wiki",
    template: "%s | Olden Era Guide",
  },
    metadataBase: new URL("https://oldenera.gguidehub.com"),
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
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Open+Sans:wght@400;500;600;700&display=swap"
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
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Olden Era Guide",
  "description": "The ultimate Olden Era strategy guide and wiki. Master exploration, combat, and faction building.",
  "url": "https://olden-era-guide-tau.vercel.app"
}`,
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
    <header className="site-header">
      <Link href="/" className="site-header-logo">
        ⚔️ Olden Era Guide
      </Link>
      <nav className="site-header-nav">
        <Link href="/factions">Factions</Link>
        <Link href="/heroes">Heroes</Link>
        <Link href="/tier-list">Tier List</Link>
        <Link href="/beginners-guide">Beginner Guide</Link>
        <Link href="/combat">Combat</Link>
        <Link href="/tips">Tips</Link>
        <Link href="/news">News</Link>
        <ThemeToggle />
        <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer" className="site-header-support">
          ❤️ Support Us
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="grid-cards" style={{ marginBottom: '2rem' }}>
          <div>
            <h3 className="site-footer-heading">More Game Guides</h3>
            <div className="site-footer-links">
              <a href="https://menace-guide.vercel.app" target="_blank" rel="noopener noreferrer">
                MENACE Guide
              </a>
              <a href="https://dispatch-guide-sigma.vercel.app" target="_blank" rel="noopener noreferrer">
                Dispatch Guide
              </a>
              <a href="https://town-to-city-guide.vercel.app" target="_blank" rel="noopener noreferrer">
                Town to City Guide
              </a>
            </div>
          </div>
          <div>
            <h3 className="site-footer-heading">Site</h3>
            <div className="site-footer-links">
              <Link href="/about">About</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
              <Link href="/faq">FAQ</Link>
            </div>
          </div>
        </div>
        {/* E-E-A-T: Sources & Last Updated */}
        <div>
          <h3 className="site-footer-heading">Sources</h3>
          <p className="site-footer-text">
            <strong>Sources:</strong> All guides are based on the <a href="https://store.steampowered.com/app/3105440/Olden_Era/" target="_blank" rel="noopener noreferrer" className="site-footer-link">Steam patch notes</a>, community testing, and gameplay experience.
          </p>
          <p className="site-footer-text">Last updated: June 2026</p>
        </div>
        <p className="site-footer-text">
          Olden Era Guide is a fan-made resource. Not affiliated with Ubisoft or Unfrozen Studio.
        </p>
        <div className="site-footer-support">
          <h4 className="site-footer-support-heading">
            Support This Guide
          </h4>
          <div className="site-footer-support-links">
            <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer">
              ❤️ Support Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
