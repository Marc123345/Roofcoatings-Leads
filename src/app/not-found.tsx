import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">404 — Page Not Found</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Wrong Turn.
        </h1>
        <p className="text-white text-base mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-gold to-yellow-400 text-navy px-6 py-3 rounded-md font-extrabold text-sm uppercase tracking-wider"
          >
            Back to Home
          </Link>
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center bg-white text-navy px-6 py-3 rounded-md font-extrabold text-sm uppercase tracking-wider"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
