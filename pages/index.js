import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Regime Of Hustlers</title>
        <meta
          name="description"
          content="India's first ever community for Young Hustlers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-black h-screen text-white flex flex-col gap-14 justify-center items-center px-8">
        <h2 className="uppercase text-xl font-extralight tracking-[10px]">
          Lorem Ipsum
        </h2>
        <img
          className="w-full max-w-5xl"
          src="assets/logos/RegimeOfHustlersLogo.png"
        />
        <div className="uppercase md:tracking-[6px] bg-gradient-to-r from-purple-900 to-fuchsia-900 py-4 px-8 rounded-full cursor-pointer">
          Underconstruction
        </div>
        <div className="hidden md:block tracking-wider text-yellow-300 mt-10">
          ------------------------------ #start ------------------------------
        </div>
      </header>
    </div>
  );
}
