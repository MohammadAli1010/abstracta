import { Pizza } from "lucide-react";
import { MotionDiv, MotionH3 } from "../common/motion-wrapper";
import { SummaryViewer } from "../summaries/summary-viewer";

const DEMO_SUMMARY = `⚡ Next.js: The Full-Stack React Framework That Scales
🎯 Next.js makes building fast, scalable web apps with React easy and production-ready.
• 📌 It combines the best of server and client rendering, routing, and performance in one sleek package.

# Document Details
• 📑 Type: Technical Guide
• 👥 For: Web developers, software engineers, tech startups

# Key Highlights
• 🚀 Built-in routing and API routes for seamless full-stack development
• ⭐ Supports server-side rendering (SSR), static site generation (SSG), and hybrid modes
• 💫 Optimized performance with image optimization, incremental static regeneration, and more

# Why It Matters
• 💡 Next.js simplifies complex app architectures. Whether you're building a blog, SaaS platform, or e-commerce site, it provides scalable tools and exceptional performance without configuration headaches.

# Main Points
• 🎯 Zero-config setup lets you start coding right away
• 💪 API routes turn your frontend into a backend in minutes
• 🔥 Vercel integration makes deploying your app lightning-fast

# Pro Tips
• ⭐ Use getStaticProps and getServerSideProps smartly to balance speed and freshness
• 💎 Leverage middleware for authentication and request preprocessing
• 🌟 Optimize images using the built-in next/image component to boost Core Web Vitals

# Key Terms to Know
• 📚 SSR (Server-Side Rendering): Generates pages on each request for dynamic data
• 🔍 ISR (Incremental Static Regeneration): Updates static pages after deployment without rebuilding the whole site

# Bottom Line
• 💫 Next.js is your go-to framework for building modern, performant React apps—fast, flexible, and built for scale.`;

export default function DemoSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-2xl w-full px-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs border border-gray-500/20 mb-4">
            <Pizza className="w-6 h-6 text-red-500"></Pizza>
          </div>
          <div className="text-center mb-16">
            <MotionH3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6"
            >
              Watch how Abstracta transforms{" "}
              <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
                this Next.js course PDF
              </span>{" "}
              into an easy-to-read summary!
            </MotionH3>
          </div>
        </div>

        <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
          {/* Summary Viewer */}
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl mx-auto px-4"
          >
            <SummaryViewer summary={DEMO_SUMMARY} />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
