import Image from "next/image";
import Header from "@/ui/header/Header";
import Card from "../../components/card/Card";
import { projectsArray } from "./ProjectsArray";

export default function Projects() {
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
                                Projetos
                            </h1>

                            <p
                                className="text-2xl lg:text-3xl"
                                style={{ fontFamily: "var(--font-fira-code)" }}
                            >
                                Minha jornada como desenvolvedor
                            </p>
                        </section>

                        {/* IMAGE */}
                        <section className="relative z-10">
                            <div className="relative">
                                {/* Glow atrás da imagem */}
                                <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full"></div>

                                <section className="relative w-75 h-75">
                                    <Image
                                        src="/images/stack.png"
                                        alt="Stack Image"
                                        width={700}
                                        height={700}
                                        className="rounded-full relative z-10"
                                    />
                                </section>
                            </div>
                        </section>
                    </section>

                    {/* PROJECTS */}
                    <section className="grid lg:grid-cols-2 px-6 lg:px-30 py-20 border-t border-gray-300 gap-4">
                        {projectsArray.map((project, index) => (
                            <Card
                                key={index} 
                                title={project.title}
                                date={project.date}
                                description={project.description}
                                stackSrc={project.stackSrc}
                                src={project.src}
                            />
                        ))}
                    </section>

                </main>
            </div>
        </>
    );
}