import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">llm toys</h1>
      <Link
        href="/hellsite"
        className="text-blue-500 hover:text-blue-700 underline"
      >
        Go to Hellsite
      </Link>
    </div>
  );
}
