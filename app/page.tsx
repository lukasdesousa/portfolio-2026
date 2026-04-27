'use client';

import About from "@/ui/containers/about/About";
import Picture from "@/ui/containers/picture/Picture";
import Header from "@/ui/header/Header";
import Link from "next/link";

export default function Home() {
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
            <section className="relative z-10 flex flex-col text-left gap-4 max-w-xl">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Lukas Souza
              </h1>

              <p
                className="text-2xl lg:text-3xl"
                style={{ fontFamily: "var(--font-fira-code)" }}
              >
                Desenvolvedor full-stack
              </p>

              {/* CTA */}
              <div className="mt-6 flex gap-4">
                <Link
                  href={'/projects'}
                >
                  <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:scale-105 transition hover:cursor-pointer">
                    Ver Projetos
                  </button>
                </Link>

                <button className="px-6 py-3 border border-black rounded-xl hover:text-black hover:scale-105 transition hover:cursor-pointer">
                  Contato
                </button>
              </div>
            </section>

            {/* IMAGE */}
            <section className="relative z-10">
              <div className="relative">
                {/* Glow atrás da imagem */}
                <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full"></div>

                <Picture />
              </div>
            </section>
          </section>

          {/* ABOUT */}
          <section className="px-6 lg:px-30 py-20">
            <About />
          </section>

        </main>
      </div>
    </>
  );
}