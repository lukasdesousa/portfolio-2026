'use client';

import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { message } from "antd";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<"right" | "bottom">("right");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setPlacement("right");
            } else {
                setPlacement("bottom");
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <header className="m-1 p-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <h1 className="text-4xl font-bold">LS</h1>
                </Link>

                <MenuOutlined
                    onClick={() => setOpen(true)}
                    className="text-2xl cursor-pointer"
                />
            </header>

            <Drawer
                placement={placement}
                closable={false}
                onClose={() => setOpen(false)}
                open={open}
            >
                <h1 className="text-center pb-5 text-gray-600 text-2xl font-bold">
                    Outros
                </h1>

                <div className="border-t-2 border-gray-200">
                    <ul className="flex flex-col gap-6 py-8">
                        <li>
                            <Link
                                href="/pdf/curriculo-lukas-dev.pdf"
                                download
                            >
                                <h1 className="hover:text-blue-400 transition hover:cursor-pointer text-gray-600 text-2xl font-bold">
                                    Baixar currículo
                                </h1>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.linkedin.com/in/lukasdesouza"
                                target="_blank"
                            >
                                <h1 className="hover:text-blue-400 transition hover:cursor-pointer text-gray-600 text-2xl font-bold">
                                    LinkedIn
                                </h1>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://wa.me/5588997063343"
                                target="_blank"
                            >
                                <h1 className="hover:text-green-600 transition hover:cursor-pointer text-gray-600 text-2xl font-bold">
                                    WhatsApp
                                </h1>
                            </Link>
                        </li>
                        <li>
                            <h1
                                onClick={() => {
                                    navigator.clipboard.writeText("s.lukas.dev@gmail.com");
                                    message.success("E-mail copiado para a área de transferência!");
                                }}
                                className="hover:text-red-700 transition hover:cursor-pointer text-gray-600 text-2xl font-bold"
                            >
                                E-mail
                            </h1>
                        </li>
                    </ul>
                </div>
            </Drawer>
        </>
    );
}