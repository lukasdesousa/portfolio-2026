import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="flex flex-col gap-10 items-center justify-center mx-auto w-[90%] border-t border-gray-300 pt-10 text-left ">
                <h1 className="text-3xl lg:text-4xl">Sobre mim</h1>
                <p className="lg:w-[90%]">Me chamo Lukas, tenho 21 anos e estou cursando Engenharia de Software, atualmente no 5º período. Sou um desenvolvedor full-stack apaixonado pelo que faço. Amante de tecnologia desde a infância, sempre busco aprender novas tecnologias e melhorar minhas habilidades. Tenho <strong>facilidade de aprender</strong>, <strong>fácil adaptação</strong>, <strong>espirito de liderança</strong>, <strong>vontade de crescer</strong>.</p>
                <h1 className="text-3xl lg:text-4xl">Stack</h1>
                <section className="flex flex-col gap-10 lg:w-[80%]">
                    <section className="flex flex-col">
                        <section className="flex flex-col lg:flex-row items-start gap-5 ">
                        <Image
                        src={'/images/typescript.png'}
                        alt="TypeScript"
                        width={100}
                        height={100}
                        />
                        <section className="flex flex-col gap-3">
                        <h2 className="font-bold">TypeScript</h2>
                        <p className="opacity-50">Tempo de experiência: 1.5 anos</p>
                        <p className="">Tenho amplo conhecimento e experiência com projetos pessoais.</p>
                        <p className="font-bold">Tecnologia utilizada na construção deste portfólio</p>
                        </section>
                        </section>
                    </section>
                    <section className="flex flex-col">
                        <section className="flex flex-col lg:flex-row items-start gap-5 ">
                        <Image
                        src={'/images/nextjs.png'}
                        alt="TypeScript"
                        width={100}
                        height={100}
                        />
                        <section className="flex flex-col gap-3">
                        <h2 className="font-bold">Next Js</h2>
                        <p className="opacity-50">Tempo de experiência: 1.5 anos</p>
                        <p className="">Tenho amplo conhecimento e experiência com projetos pessoais, tanto para front-end quanto para back-end.</p>
                        <p className="font-bold">Tecnologia utilizada na construção deste portfólio</p>
                        </section>
                        </section>
                    </section>
                    <section className="flex flex-col">
                        <section className="flex flex-col lg:flex-row items-start gap-5 ">
                        <Image
                        src={'/images/node.png'}
                        alt="Node Js"
                        width={100}
                        height={100}
                        />
                        <section className="flex flex-col gap-3">
                        <h2 className="font-bold">Node Js</h2>
                        <p className="opacity-50">Tempo de experiência: 1.8 anos</p>
                        <p className="">Tenho experiência com desenvolvimento back-end utilizando Node.js e Express, para construção de APIs.</p>
                        </section>
                        </section>
                    </section>
                    <section className="flex flex-col">
                        <section className="flex flex-col lg:flex-row items-start gap-5 ">
                        <Image
                        src={'/images/styledcomponents.png'}
                        alt="Styled Components"
                        width={100}
                        height={100}
                        />
                        <section className="flex flex-col gap-3">
                        <h2 className="font-bold">Styled Components</h2>
                        <p className="opacity-50">Tempo de experiência: 1.2 anos</p>
                        <p className="">Tenho experiência com desenvolvimento de interfaces modernas e responsivas utilizando Styled Components.</p>
                        </section>
                        </section>
                    </section>
                    <section className="flex flex-col">
                        <section className="flex flex-col lg:flex-row items-start gap-5 ">
                        <Image
                        src={'/images/tailwind.png'}
                        alt="Tailwind CSS"
                        width={100}
                        height={100}
                        />
                        <section className="flex flex-col gap-3">
                        <h2 className="font-bold">Tailwind CSS</h2>
                        <p className="opacity-50">Tempo de experiência: 2 meses</p>
                        <p className="">Estou em constante aprendizado em Tailwind CSS e criando aplicações responsivas.</p>
                        <p className="font-bold">Tecnologia utilizada na construção deste portfólio</p>
                        </section>
                        </section>
                    </section>
                </section>
            </div>
        </>
    )
}