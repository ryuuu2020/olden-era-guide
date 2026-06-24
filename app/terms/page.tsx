import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Olden Era Guide — conditions for using this fan-made Heroes of Might and Magic: Olden Era resource.",
};

export default function TermsPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Terms of Use</h1>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
        Last updated: June 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        By accessing and using Olden Era Guide (olden-era-guide-tau.vercel.app), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please discontinue use of this website. These terms apply to all visitors and users of the site.
      </p>

      <h2>2. Nature of the Website</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Olden Era Guide is an independent, fan-made resource dedicated to Heroes of Might and Magic: Olden Era. We are not affiliated with, endorsed by, sponsored by, or connected to Ubisoft Entertainment, Unfrozen Studio, or Hooded Horse in any capacity. This website is a community project created by fans for fans. All content is provided free of charge and for informational and entertainment purposes only.
      </p>

      <h2>3. Content Disclaimer</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
        All content on this website — including but not limited to strategy guides, tier lists, hero rankings, faction analyses, combat tips, and news articles — is created by fans and represents the opinions and research of the authors. While we strive for accuracy, game mechanics and balance may change with patches and updates. We make no guarantees about the completeness, accuracy, or timeliness of any information presented.
      </p>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Game-related data such as unit stats, hero abilities, spell descriptions, and building costs are based on publicly available information, community research, and in-game observation. This data may not always reflect the latest version of the game.
      </p>

      <h2>4. Intellectual Property</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
        Heroes of Might and Magic, Olden Era, and all related game assets, character names, faction names, artwork, lore, and trademarks are the intellectual property of their respective owners — primarily Ubisoft Entertainment, Unfrozen Studio, and Hooded Horse. This website uses these names and references solely for the purpose of identification, commentary, and community discussion, which we believe constitutes fair use.
      </p>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        The original written content, analysis, guides, tier lists, and website design created by Olden Era Guide contributors are our own work. You may reference and share our content with proper attribution and a link back to the original page. You may not reproduce our content in bulk for commercial purposes without permission.
      </p>

      <h2>5. No Warranties</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        This website is provided on an as-is and as-available basis. We make no warranties, express or implied, regarding the operation of the site or the information, content, or materials included. We do not warrant that the site will be uninterrupted, error-free, or free from harmful components. Your use of the site is at your own risk.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Under no circumstances shall Olden Era Guide or its contributors be liable for any direct, indirect, incidental, consequential, or special damages resulting from the use or inability to use this website or reliance on its content. This includes any losses or damages arising from gameplay decisions made based on our guides or information.
      </p>

      <h2>7. External Links</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Our website may contain links to external websites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for them. The inclusion of any external link does not imply our endorsement of the linked site.
      </p>

      <h2>8. Changes to Terms</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        We reserve the right to modify these Terms of Use at any time. Changes will be posted on this page with an updated date. Your continued use of the website after any modifications constitutes acceptance of the revised terms. We encourage you to review this page periodically.
      </p>

      <h2>9. Governing Law</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        These terms are governed by applicable laws. Any disputes shall be resolved in accordance with those laws. Since this is a fan-operated community resource without a formal legal entity, we encourage informal resolution of any concerns through community channels.
      </p>
    </div>
  );
}
