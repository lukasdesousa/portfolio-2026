'use client';

import Image from "next/image";
import { Button, Tag } from "antd";
import Link from "next/link";

type Props = {
    src: string;
    title: string;
    date: string;
    description: string;
    stackSrc: string[];
}

export default function Card({ title, description, stackSrc, src, date }: Props) {
    return (
        <section
            className="
                group m-auto w-[90%]
                flex flex-col justify-between

                min-h-130 sm:min-h-140 lg:min-h-150

                rounded-2xl p-6 gap-4

                bg-white/70 backdrop-blur-xl
                border border-white/40

                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                transition-all duration-300 ease-out

                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            "
        >
            {/* IMAGE */}
            <div className="overflow-hidden rounded-xl">
                <Image
                    className="
                        w-full rounded-xl
                        transition-transform duration-500 ease-out
                        group-hover:scale-105
                    "
                    width={300}
                    height={300}
                    quality={100}
                    alt="Capa do projeto"
                    src={src || "/images/project-placeholder.png"}
                />
            </div>

            {/* DATE */}
            <Tag
                color="purple"
                className="
                    w-fit rounded-full px-3 py-1 text-xs font-medium
                    border-0 bg-purple-100 text-purple-700
                "
            >
                {date}
            </Tag>

            {/* TITLE */}
            <h2 className="font-semibold text-lg tracking-tight">
                {title}
            </h2>

            {/* DESCRIPTION (SEM CLAMP 🚨) */}
            <p className="text-gray-600 text-sm leading-relaxed">
                {description}
            </p>

            {/* BOTTOM */}
            <div className="mt-auto pt-4">
                {/* STACK */}
                <div className="flex flex-wrap gap-3 mb-4 opacity-80">
                    {stackSrc.map((item, index) => (
                        <Image
                            key={index}
                            src={item}
                            alt="Tech Icon"
                            width={24}
                            height={24}
                        />
                    ))}
                </div>

                {/* BUTTON */}
                <Link
                    href={`/projects/${title.toLowerCase().replace(/\s+/g, '')}`}
                >
                    <Button
                        type="default"
                        size="large"
                        className="
                            w-full rounded-xl border-gray-200
                            hover:border-gray-300
                            hover:bg-gray-50
                            transition
                        "
                    >
                        Ver Projeto
                    </Button>
                </Link>
            </div>
        </section>
    );
}