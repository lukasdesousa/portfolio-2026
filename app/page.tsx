'use client';

import About from "@/ui/containers/about/About";
import Picture from "@/ui/containers/picture/Picture";
import Header from "@/ui/header/Header";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const [phraseIndex, setPhraseIndex] = useState(0);

  const description = [
    "Desenvolvedor full-stack",
    "Next.js",
    "React.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Styled Components",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % description.length);
    }, 2500);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <main className="w-full">

          {/* HERO SECTION */}
          <section className="relative flex flex-col lg:flex-row items-center justify-between 
          px-6 lg:px-30 py-20 lg:py-32 gap-4">

            {/* GLOW EFFECT */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>

            {/* TEXT CONTENT */}
            <section className="relative z-10 flex flex-col text-left gap-5 max-w-lg">

              <h1
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                Lukas Souza
              </h1>

              <div className="relative h-8 lg:h-10">
                <AnimatePresence>
                  <motion.p
                    key={phraseIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="absolute left-0 top-0 text-2xl lg:text-3xl whitespace-nowrap"
                  >
                    {description[phraseIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="mt-6 flex gap-4">
                <Link
                  href={'/projects'}
                >
                  <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:scale-105 transition hover:cursor-pointer">
                    Ver Projetos
                  </button>
                </Link>
              </div>
            </section>

            {/* IMAGE */}
            <section className="relative z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full"></div>
                <Picture />
              </div>
            </section>
          </section>


          <section className="px-6 lg:px-30 py-20">
            <About />
          </section>

        </main>
      </div>
    </>
  );
}