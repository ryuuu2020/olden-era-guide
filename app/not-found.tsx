import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ maxWidth: '600px', margin: '4rem auto', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>
        This page has vanished into the void — much like a scout hero who ran into a pack of Dread Knights.
      </p>
      <a href="/" className="btn-primary" style={{ display: 'inline-block' }}>Return to Home</a>
    </div>
  );
}
