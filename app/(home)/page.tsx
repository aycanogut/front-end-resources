import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-fd-muted-foreground">
        You can open{' '}
        <Link
          href="/resources"
          className="font-semibold text-fd-foreground underline"
        >
          /resources
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  );
}
