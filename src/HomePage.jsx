import { Mail, Sparkles, BookOpen, Users, FileText, Linkedin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header with contact button and email */}
      <header className="p-8 shadow-md bg-gradient-to-br from-gray-50 via-indigo-100 to-gray-50 flex flex-col items-center">
        <button
          onClick={() => (window.location.href = "mailto:artur@willonski.com")}
          className="mb-2 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Contact Artur
        </button>
        <p className="text-sm text-gray-700">artur@willonski.com</p>
      </header>

      {/* Main content */}
      <main className="p-8 space-y-16">
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold">Willonski Lab</h1>
          <p className="mt-4 text-lg text-gray-700">
            A way to maintain human-centered adoption of AI.
          </p>
        </section>

        {/* Introduction */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 flex items-center space-x-2">
            <Sparkles className="text-indigo-600" />
            <span>Introduction</span>
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Emotional tension, impulsive decisions, or conflict avoidance... (rest of content)
          </p>
        </section>

        {/* Frustrations & Benefits */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 flex items-center space-x-2">
            <BookOpen className="text-indigo-600" />
            <span>Frustrations & Benefits</span>
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Traditional assessments... (rest of content)
          </p>
        </section>

        {/* Learnability Matching */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 flex items-center space-x-2">
            <Users className="text-indigo-600" />
            <span>Learnability Matching</span>
          </h2>
          <img
            src="/assets/whitepaper.pdf"
            alt="Learnability Matching"
            className="rounded-lg shadow-lg w-full"
          />
          <p className="mt-4 text-gray-800 leading-relaxed">
            Our system creates... (rest of content)
          </p>
        </section>

        {/* Job Cases */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 flex items-center space-x-2">
            <Mail className="text-indigo-600" />
            <span>Job Cases: Theodor & Maria</span>
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Theodor... (rest of content)
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="p-6 border-t text-center space-y-4">
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/company/101670950/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a href="/assets/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
            <FileText className="w-5 h-5" />
            <span>White Paper</span>
          </a>
        </div>
        <div className="text-gray-500">willonski 2025</div>
      </footer>
