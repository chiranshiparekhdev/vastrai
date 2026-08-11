import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">VastrAI</h1>

        <p className="mt-4 text-lg text-gray-600">
          AI-powered fashion commerce for Indian ethnic-wear retailers.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Multi-tenant platform · RAG · LLMs · Generative AI
        </p>
      </div>
    </main>
  );
}
