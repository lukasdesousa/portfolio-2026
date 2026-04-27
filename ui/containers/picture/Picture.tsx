import Image from "next/image";

export default function Picture() {
    return (
        <>
            <section className="relative w-75 h-75">
                <Image
                    src="/images/profile.png"
                    alt="Profile Picture"
                    width={300}
                    height={300}
                    className="rounded-full relative z-10"
                />
            </section>
        </>
    )
}