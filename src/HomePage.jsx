import { Mail, Sparkles, BookOpen, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans relative">
      <header className="p-6 shadow-md bg-gradient-to-r from-orange-50 to-orange-100">
        <h1 className="text-4xl font-extrabold text-orange-600">NECP – Naming Emotions Collaborative Prompting</h1>
        <p className="text-xl mt-2 text-gray-700">An emotionally aware learning system</p>
        <p className="text-md text-gray-600">Your mood is important!</p>
      </header>

      <main className="p-6 space-y-20">
        <section className="max-w-5xl mx-auto">
          <div className="mb-6">
            <p className="text-lg text-gray-800 mb-4">We believe emotional states matter—especially in how we learn and grow at work. Most systems ignore this. <strong>We don't.</strong></p>
            <p className="text-lg text-gray-800 mb-4">⚖️ <strong>bad day =/= bad assessment</strong></p>
            <p className="text-base text-gray-700 mb-6">
              NECP is a research-based chatbot that invites users to name their emotions before self-assessments—reducing bias, building awareness,
              and protecting learning from being hijacked by difficult days.
            </p>
            <p className="text-lg text-gray-800 mb-4">🧭 <strong>find out: what is your learnability profile?</strong></p>
            <p className="text-base text-gray-700 mb-6">
              Our chatbot creates individual learnability profiles based on emotional patterns and reflection. These profiles help people understand how they learn—and
              connect with others who learn in complementary ways.
            </p>
            <p className="text-lg text-gray-800 mb-4">🌱 <strong>non-judgemental assessment process</strong></p>
            <p className="text-base text-gray-700 mb-6">
              NECP fosters fair, inclusive, emotionally aware learning environments. No scoring. No ranking. Just a space to grow, reflect, and learn with others.
            </p>
            <p className="text-lg text-gray-800 mb-2">🔍 <strong>Currently seeking:</strong></p>
            <ul className="list-disc list-inside text-base text-gray-700">
              <li>1 Institutional Partner to co-develop the chatbot and validate the research</li>
              <li>1 Aligned Co-Creator to help build and shape this into something real and impactful</li>
            </ul>
          </div>
        </section>

        <section className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 mb-2">
            <Sparkles className="text-orange-500" />
            <h2 className="text-3xl font-semibold">What is NECP?</h2>
          </div>
          <p className="text-lg text-gray-800">
            NECP is a framework that links emotion awareness to adaptive learning. It tracks how you feel during assessments, matches you with complementary learners, and uses emotional feedback to improve learning environments.
          </p>
        </section>

        <section className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 mb-2">
            <BookOpen className="text-orange-500" />
            <h2 className="text-3xl font-semibold">Learnability Matching</h2>
          </div>
          <img src="public/learnability-chart.png" alt="Learnability Matching Pattern" className="rounded-xl shadow-md w-full" />
          <p className="text-base text-gray-700 mt-4">
            This diagram shows how learners in different states (Good, Neutral, Bad).
          </p>
        </section>

        <section className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 mb-2">
            <Users className="text-orange-500" />
            <h2 className="text-3xl font-semibold">Human-Centered AI Assessment</h2>
          </div>
          <p className="text-lg text-gray-800 mb-4">
            Meet Theodor and Maria — two colleagues navigating a new AI tool. While Theodor is overwhelmed, Maria excels. Through the NECP chatbot and recurring peer sessions, they both discover a better way to learn and adapt together.
          </p>
          <img src="/case-study-image.png" alt="Theodor and Maria Job Case" className="rounded-xl shadow-md w-full" />
        </section>

        <section className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 mb-2">
            <BookOpen className="text-orange-500" />
            <h2 className="text-3xl font-semibold">10 Elements of Learnability</h2>
          </div>
          <img src="/ten-elements.png" alt="10 Elements Diagram" className="rounded-xl shadow-md w-full" />
          <p className="text-base text-gray-700 mt-4">
            Each element tracks a specific behavior or engagement pattern contributing to learnability, updated over time using adaptive scoring.
          </p>
        </section>

        <section className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 mb-2">
            <Users className="text-orange-500" />
            <h2 className="text-3xl font-semibold">Join the Pilot</h2>
          </div>
          <p className="text-base text-gray-800 mb-4">
            Are you ready to assess skills without judgment? Join our pilot and help validate NECP in real learning environments.
          </p>
          <a href="mailto:artur@willonski.com" className="inline-flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>
        </section>

        <section className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 mb-2">
            <Sparkles className="text-orange-500" />
            <h2 className="text-3xl font-semibold">Blog / Updates</h2>
          </div>
          <p className="text-base italic text-gray-600">Visit our research journal for reflections, updates, and emerging data.</p>
        </section>
      </main>

      <footer className="p-6 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} NECP Research. All rights reserved.
      </footer>

      <a href="https://blog.willonski.com" target="_blank" rel="noopener noreferrer"
         className="fixed bottom-6 right-6 bg-orange-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-700">
        Visit Blog 📝
      </a>
    </div>
  );
}
