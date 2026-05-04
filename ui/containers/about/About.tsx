import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col gap-10 items-center justify-center mx-auto w-[90%] border-t border-gray-300 pt-10 text-left">
            
            <h1 className="text-3xl lg:text-4xl">Sobre mim</h1>

            <p className="lg:w-[90%]">
                Me chamo Lukas, tenho 21 anos e estou cursando Engenharia de Software, atualmente no 5º período.
                Sou um desenvolvedor full-stack apaixonado pelo que faço. Amante de tecnologia desde a infância,
                sempre busco aprender novas tecnologias e melhorar minhas habilidades. Tenho
                <strong> facilidade de aprender</strong>, <strong> fácil adaptação</strong>,
                <strong> espírito de liderança</strong>, <strong> vontade de crescer</strong>.
            </p>

            <h1 className="text-3xl lg:text-4xl">Stack</h1>

            <section className="flex flex-col gap-16 lg:w-full">

                <section className="flex flex-col lg:self-start">
                    <div className="flex flex-col lg:flex-row items-start gap-5">
                        <Image src="/images/typescript.png" alt="TypeScript" width={100} height={100} />
                        <div className="border border-gray-300 hidden lg:block h-30"></div>
                        <div className="flex flex-col gap-3">
                            <h2 className="font-bold">TypeScript</h2>
                            <p className="opacity-50">Tempo de experiência: 1.5 anos</p>
                            <p>Tenho amplo conhecimento e experiência com projetos pessoais.</p>
                            <p className="font-bold">Tecnologia utilizada neste portfólio</p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col lg:self-end ">
                    <div className="flex flex-col lg:flex-row items-start gap-5">
                        <Image src="/images/nextjs.png" alt="Next.js" width={100} height={100} />
                        <div className="border border-gray-300 hidden lg:block h-30"></div>
                        <div className="flex flex-col gap-3">
                            <h2 className="font-bold">Next.js</h2>
                            <p className="opacity-50">Tempo de experiência: 1.5 anos</p>
                            <p>Experiência com projetos front-end e back-end.</p>
                            <p className="font-bold">Tecnologia utilizada neste portfólio</p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col lg:self-start">
                    <div className="flex flex-col lg:flex-row items-start gap-5">
                        <Image src="/images/node.png" alt="Node.js" width={100} height={100} />
                        <div className="border border-gray-300 hidden lg:block h-30"></div>
                        <div className="flex flex-col gap-3">
                            <h2 className="font-bold">Node.js</h2>
                            <p className="opacity-50">Tempo de experiência: 1.8 anos</p>
                            <p>Desenvolvimento de APIs com Node.js e Express.</p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col lg:self-end">
                    <div className="flex flex-col lg:flex-row items-start gap-5">
                        <Image src="/images/styledcomponents.png" alt="Styled Components" width={100} height={100} />
                        <div className="border border-gray-300 hidden lg:block h-30"></div>
                        <div className="flex flex-col gap-3">
                            <h2 className="font-bold">Styled Components</h2>
                            <p className="opacity-50">Tempo de experiência: 1.2 anos</p>
                            <p>Interfaces modernas e responsivas.</p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col lg:self-start">
                    <div className="flex flex-col lg:flex-row items-start gap-5">
                        <Image src="/images/tailwind.png" alt="Tailwind CSS" width={100} height={100} />
                        <div className="border border-gray-300 hidden lg:block h-30"></div>
                        <div className="flex flex-col gap-3">
                            <h2 className="font-bold">Tailwind CSS</h2>
                            <p className="opacity-50">Tempo de experiência: 2 meses</p>
                            <p>Aprendendo e criando aplicações responsivas.</p>
                            <p className="font-bold">Tecnologia utilizada neste portfólio</p>
                        </div>
                    </div>
                </section>

            </section>
        </div>
    );
}