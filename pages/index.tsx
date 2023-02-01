import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <main className="h-screen 2xl:mx-[200px]">
        <div className="relative w-[500px] h-[500px] overflow-hidden grid place-items-center group">
          <Image
            src="/family.jpg"
            alt="sunlife"
            fill
            className="object-cover object-center scale-125 hover:scale-100 duration-700 transition-all group-hover:blur-[1px]"
          />

          <Image
            src="/sunlife/logo.svg"
            alt="sunlife logo"
            className="z-1 absolute object-cover pointer-events-none opacity-0 duration-700 group-hover:-translate-y-44 group-hover:opacity-100 transition-all"
            width={450}
            height={150}
          />
        </div>
      </main>
    </Layout>
  );
}
