import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Olden Era Guide — learn about how we handle data and use Google Analytics.",
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Privacy Policy</h1>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
        Last updated: June 2026
      </p>

      <h2>1. Introduction</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Welcome to Olden Era Guide (olden-era-guide-tau.vercel.app). Your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to your data when you visit our website.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>2.1 Automatically Collected Data</h3>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
        We use Google Analytics, a web analytics service provided by Google LLC. Google Analytics uses cookies to collect standard internet log information and visitor behavior patterns. The information collected includes:
      </p>
      <ul style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
        <li>Pages visited and time spent on each page</li>
        <li>Referring websites and search terms</li>
        <li>Browser type, operating system, and device information</li>
        <li>Geographic location (country and city level)</li>
        <li>Screen resolution and language preferences</li>
      </ul>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        All data collected by Google Analytics is anonymized. We do not collect personally identifiable information such as your name, email address, or IP address in its raw form. Google Analytics truncates IP addresses before storage.
      </p>

      <h3>2.2 Data We Do Not Collect</h3>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        We do not operate any user registration system, comment sections, contact forms, newsletter subscriptions, or e-commerce functionality. Therefore, we do not collect any personal information such as names, email addresses, billing information, or account credentials.
      </p>

      <h2>3. How We Use Information</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
        The analytics data we collect helps us understand:
      </p>
      <ul style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
        <li>Which guides and pages are most useful to our visitors</li>
        <li>How users navigate through our website</li>
        <li>What devices and browsers to optimize for</li>
        <li>Which regions our audience comes from</li>
      </ul>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        This information allows us to improve the quality of our guides and ensure the website performs well for all visitors. We do not use any data for advertising, profiling, or automated decision-making.
      </p>

      <h2>4. Cookies</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Google Analytics sets first-party cookies on your browser to track visitor behavior. These cookies do not store personally identifiable information. You can disable cookies entirely through your browser settings, though this may affect how some websites function. You can also opt out of Google Analytics specifically by installing the Google Analytics Opt-out Browser Add-on available at tools.google.com/dlpage/gaoptout.
      </p>

      <h2>5. Data Sharing and Third Parties</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        We do not sell, trade, or share your data with any third parties other than Google Analytics for the purposes described above. Google processes data according to their own privacy policy, which you can find at policies.google.com/privacy. Our website may contain links to external sites such as Ubisoft, Unfrozen Studio, Hooded Horse, or other community resources. We are not responsible for the privacy practices of those external sites.
      </p>

      <h2>6. Children's Privacy</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Our website is not directed at children under 13 years of age, and we do not knowingly collect information from children. If you believe a child has provided personal information through our site, please contact us so we can take appropriate action.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        We may update this Privacy Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated date. We encourage you to review this page periodically.
      </p>

      <h2>8. Contact</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Since this is a fan-made resource without a formal legal entity, if you have questions or concerns about this Privacy Policy, please refer to the site's hosting platform policies or reach out through any available community channels associated with the site. This site is hosted on Vercel platform.
      </p>
    </div>
  );
}
