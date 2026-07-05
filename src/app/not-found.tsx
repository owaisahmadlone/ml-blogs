import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-6 py-32">
      <p className="text-sm uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight">
        This page wandered off.
      </h1>
      <p className="mt-4 text-lg text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
      >
        Back home
      </Link>
    </div>
  );
}
