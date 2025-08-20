import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center shadow-sm bg-white/70 backdrop-blur-md sticky top-0">
        <h1 className="text-2xl font-bold text-gray-900">PyCray</h1>
        <nav>
          <Link
            href="/events"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Events
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden">
        {/* Subtle background circle */}
        <div className="absolute w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10 top-20 left-1/2 -translate-x-1/2"></div>

        <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Mini Event Manager
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          A lightweight event management tool built with{" "}
          <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">TypeScript</span>,{" "}
          <span className="font-semibold">TailwindCSS</span>, and{" "}
          <span className="font-semibold">Turborepo</span>.
          Add, view, edit and delete events — all on the client side.
        </p>

        <Link
          href="/events"
          className="mt-8 w-full sm:w-auto text-center px-8 py-4 bg-blue-600 text-white text-lg rounded-xl font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition"
        >
          🚀 Get Started
        </Link>

      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <div className="text-4xl">📅</div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">Event Management</h3>
            <p className="mt-2 text-gray-600">
              Add events with a clean form, view instantly, and delete with one click.
            </p>
          </div>
          <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <div className="text-4xl">⚡</div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">Fast Setup</h3>
            <p className="mt-2 text-gray-600">
              Clone the template, run <code className="bg-gray-100 px-1 rounded">pnpm dev</code>, and you’re live.
            </p>
          </div>
          <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <div className="text-4xl">🛠️</div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">Modern Stack</h3>
            <p className="mt-2 text-gray-600">
              Built with Next.js App Router, TypeScript, TailwindCSS, and React Hook Form.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 border-t">
        &copy; {new Date().getFullYear()} PyCray Technology 
      </footer>
    </main>
  );
}
