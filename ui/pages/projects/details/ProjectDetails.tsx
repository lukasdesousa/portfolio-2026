'use client';

import Image from "next/image";
import Header from "@/ui/header/Header";
import { projectsInfo } from "./ProjectsInfo";
import { Tag } from "antd";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProjectsDetails({ projectName }: { projectName: string }) {
    const router = useRouter();

    const projectInfo = projectsInfo.find((project) => project.title.toLowerCase() === projectName.toLowerCase()) || { title: "", description: "", main_image: "", srcs: [], stackSrc: [], date: "", link: "", cards: [], github: "" };

    useEffect(() => {
        if (projectInfo.title === "") {
            router.push('/projects');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projectInfo.title])

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
                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight capitalize">
                                {projectName === "mundocripto" ? "Mundo Cripto" : projectInfo.title}
                            </h1>

                            <p
                                className="text-2xl lg:text-3xl"
                                style={{ fontFamily: "var(--font-fira-code)" }}
                            >
                                {projectInfo.description}
                            </p>

                            {/* CTA */}
                            <div className="mt-6 flex gap-4">
                                {projectInfo && projectInfo.link && projectInfo.title !== "portfolio" && (
                                    <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:scale-105 transition hover:cursor-pointer" disabled={true}>
                                        <Link rel="stylesheet" href={projectInfo.link} target="_blank">
                                            Ver em produção
                                        </Link>
                                    </button>
                                )}

                                <button className="px-6 py-3 border border-black rounded-xl hover:text-black hover:scale-105 transition hover:cursor-pointer">
                                    <Link rel="stylesheet" href={projectInfo.github!} target="_blank">
                                        Github
                                    </Link>
                                </button>
                            </div>
                        </section>

                        {/* IMAGE */}
                        <section className="relative z-10">
                            <div className="relative">
                                {/* Glow atrás da imagem */}
                                <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full"></div>

                                <section className="relative w-75 h-75">
                                    <Image
                                        src={projectInfo.main_image!}
                                        alt="Stack Image"
                                        width={700}
                                        height={700}
                                        className="rounded-2xl relative z-10"
                                    />
                                </section>
                            </div>
                        </section>
                    </section>

                    {/* PROJECTS */}
                    <section className="grid lg:grid-cols-2 px-6 lg:px-30 py-20 border-t border-gray-300 gap-5">
                        <div className="relative group">
                            <div className="
        absolute inset-0 rounded-[28px]
        bg-white/40 blur-xl opacity-60
        group-hover:opacity-80
        transition
    " />

                            <Image
                                src={projectInfo.srcs ? projectInfo.srcs[0] : "/images/nextjs.png"}
                                alt="Project screenshot"
                                width={700}
                                height={700}
                                className="
            relative z-10

            rounded-[28px]
            border border-white/30

            shadow-[0_10px_40px_rgba(0,0,0,0.15)]
            transition-all duration-500 ease-out

            group-hover:scale-[1.02]
            group-hover:shadow-[0_20px_80px_rgba(0,0,0,0.25)]
        "
                            />
                        </div>
                        <section className="flex justify-center gap-10 flex-col">
                            <Tag
                                color="purple"
                                className="
                                                w-fit rounded-full px-3 py-1 text-xs font-medium
                                                border-0 bg-purple-100 text-purple-700
                                            "
                            >
                                OBJETIVO
                            </Tag>
                            <p className="text-gray-600 text-md leading-relaxed">
                                {projectInfo.cards && projectInfo.cards[0]}
                            </p>
                        </section>

                    </section>
                    <section className="grid lg:grid-cols-2 px-6 lg:px-30 py-20 gap-5">
                        <div className="relative group lg:order-2">
                            <div className="
        absolute inset-0 rounded-[28px]
        bg-white/40 blur-xl opacity-60
        group-hover:opacity-80
        transition
    " />

                            <Image
                                src={projectInfo.srcs ? projectInfo.srcs[1] : "/images/nextjs.png"}
                                alt="Project screenshot"
                                width={700}
                                height={700}
                                className="
            relative z-10

            rounded-[28px]
            border border-white/30

            shadow-[0_10px_40px_rgba(0,0,0,0.15)]
            transition-all duration-500 ease-out

            group-hover:scale-[1.02]
            group-hover:shadow-[0_20px_80px_rgba(0,0,0,0.25)]
        "
                            />
                        </div>
                        <section className="flex justify-center gap-10 flex-col lg:order-1">
                            <Tag
                                color="pink"
                                className="
                                                w-fit rounded-full px-3 py-1 text-xs font-medium
                                                border-0 bg-purple-100 text-purple-700
                                            "
                            >
                                DESAFIOS
                            </Tag>
                            <p className="text-gray-600 text-md leading-relaxed">
                                {projectInfo.cards && projectInfo.cards[1]}
                            </p>
                        </section>
                    </section>
                    <section className="grid lg:grid-cols-2 px-6 lg:px-30 py-20 gap-5">
                        <div className="relative group">
                            <div className="
        absolute inset-0 rounded-[28px]
        bg-white/40 blur-xl opacity-60
        group-hover:opacity-80
        transition
    " />

                            <Image
                                src={projectInfo.srcs ? projectInfo.srcs[2] : "/images/nextjs.png"}
                                alt="Project screenshot"
                                width={700}
                                height={700}
                                className="
            relative z-10

            rounded-[28px]
            border border-white/30

            shadow-[0_10px_40px_rgba(0,0,0,0.15)]
            transition-all duration-500 ease-out

            group-hover:scale-[1.02]
            group-hover:shadow-[0_20px_80px_rgba(0,0,0,0.25)]
        "
                            />
                        </div>
                        <section className="flex justify-center gap-10 flex-col">
                            <Tag
                                color="green"
                                className="
                                                w-fit rounded-full px-3 py-1 text-xs font-medium
                                                border-0 bg-purple-100 text-purple-700
                                            "
                            >
                                MEU APRENDIZADO
                            </Tag>
                            <p className="text-gray-600 text-md leading-relaxed">
                                {projectInfo.cards && projectInfo.cards[2]}
                            </p>
                        </section>
                    </section>
                </main>
            </div>
        </>
    );
}