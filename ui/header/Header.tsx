'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Dynamic Island */}
            <header className="fixed top-5 left-1/2 z-50 -translate-x-1/2">
                <div className="flex h-16 w-[90vw] max-w-5xl items-center justify-between rounded-full border border-gray-200 bg-white/90 px-8 shadow-xl backdrop-blur-2xl">

                    <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-green-500" />

                        <h1 className="text-lg font-semibold tracking-tight text-gray-900">
                            <Link
                            href="/">LS</Link>
                        </h1>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            href="https://www.linkedin.com/in/lukasdesouza/"
                            target="_blank"
                            className="text-sm font-medium text-gray-600 transition hover:text-black"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            href="https://github.com/lukasdesousa"
                            target="_blank"
                            className="text-sm font-medium text-gray-600 transition hover:text-black"
                        >
                            GitHub
                        </Link>
                        <Link
                            href="pdf/curriculo-lukas-dev.pdf"
                            className="text-sm font-medium text-gray-600 transition hover:text-black"
                            download
                        >
                            Baixar currículo
                        </Link>
                    </nav>



                    <div className="w-10 flex justify-end">
                        <button
                            onClick={() => setOpen(true)}
                            className="block md:hidden rounded-full p-2 transition hover:bg-gray-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-800"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>

                </div>
            </header>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-all duration-300 ${open
                    ? 'visible opacity-100'
                    : 'invisible opacity-0'
                    }`}
                onClick={() => setOpen(false)}
            />

            {/* Menu lateral */}
            <aside
                className={`fixed right-0 top-0 z-50 h-screen w-80 bg-white shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between border-b p-6">
                    <h2 className="text-xl font-bold">
                        Menu
                    </h2>

                    <button
                        onClick={() => setOpen(false)}
                        className="rounded-full p-2 hover:bg-gray-100"
                    >
                        ✕
                    </button>
                </div>

                <nav className="p-6">
                    <ul className="space-y-4">
                        <li>
                            <Link
                                href="https://www.linkedin.com/in/lukasdesouza/"
                                target="_blank"
                                className="text-lg font-medium text-gray-600 transition hover:text-black"
                            >
                                LinkedIn
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://github.com/lukasdesousa"
                                target="_blank"
                                className="text-lg font-medium text-gray-600 transition hover:text-black"
                            >
                                GitHub
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="pdf/curriculo-lukas-dev.pdf"
                                className="text-lg font-medium text-gray-600 transition hover:text-black"
                                download
                            >
                                Baixar currículo
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}