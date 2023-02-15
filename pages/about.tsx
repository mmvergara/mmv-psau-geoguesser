import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface AboutPageProps {}
const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <>
      <Head>
        <title>Guess!</title>
      </Head>
      <main className='h-screen w-screen flex justify-center items-center gap-4 flex-col bg-yellow-200 '>
        <h1 className='text-center text-4xl sm:text-7xl text-psauGreen font-Poppins font-bold tracking-wide'>
          Psau Geoguesser
        </h1>
        <div className='text-psauGreen text-center'>
          Geo gussing game that {"test's"} how well you know PSAU. made using React, Supabase{" "}
        </div>
        <h1 className='text-center text-2xl sm:text-5xl text-psauYellow font-Poppins font-bold tracking-wide'></h1>
        <a
          href='https://www.facebook.com/mark.jesusmanabat/'
          className='text-center text-xl sm:text-2xl bg-psauGreen p-2 px-4 text-psauYellow rounded-sm tracking-wide'
        >
          Lead Dev: <span className='underline'>Vergara, Mark Matthew BSIT 2-A</span>
        </a>
        <Image alt='modal' src='/developer.png' width={150} height={150} className='w-auto h-auto' />

        <a
          href='https://www.facebook.com/mark.jesusmanabat/'
          className='text-center text-xl sm:text-2xl bg-psauGreen p-2 px-4 text-psauYellow rounded-sm tracking-wide'
        >
          Credits to: <span className='underline'>PSAU CLICKS</span>
        </a>
        <Image alt='modal' src='/pitik.png' width={150} height={150} className='w-auto h-auto' />
        <div>for providing images</div>
        <div className='flex gap-2 font-Poppins font-semibold'>
          <Link
            href='/'
            className='cursor-pointer flex px-4 py-4 items-center rounded-full boxShadow text-black bg-gray-200 hover:scale-105 transition-all'
          >
            🏠 Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
