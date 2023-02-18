import { useRouter } from "next/router";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import NavigationIcon from "@mui/icons-material/Navigation";
import BarChartIcon from "@mui/icons-material/BarChart";
import FacebookIcon from "@mui/icons-material/Facebook";
import InfoIcon from "@mui/icons-material/Info";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>PSAU Geoguesser 🌍</title>
      </Head>
      <main className='h-screen w-screen flex justify-center items-center gap-4 flex-col bg-yellow-200 '>
        <h1 className='text-center text-4xl sm:text-7xl text-psauGreen font-Poppins font-bold tracking-wide'>
          PSAU Geoguesser
        </h1>
        <p className='text-center mx-2'>By: Vergara, Mark Matthew BSIT 2-A {"2022-2023"}</p>
        <div
          onClick={() => router.push("/guess")}
          className='cursor-pointer flex px-4 py-4 items-center rounded-full boxShadow text-psauYellow bg-psauGreen hover:scale-105 transition-all'
        >
          <NavigationIcon sx={{ mr: 1 }} />
          <span className='font-Poppins font-bold tracking-wider mr-2'>Start Guessing! </span>
        </div>
        <div className='flex gap-2 font-Poppins font-semibold'>
          <Link
            href='/about'
            className='cursor-pointer flex px-4 py-4 items-center rounded-full boxShadow text-black bg-gray-200 hover:scale-105 transition-all'
          >
            <InfoIcon sx={{ mr: 1 }} /> About
          </Link>
          <div
            onClick={() => router.push("/tutorial")}
            className='cursor-pointer flex px-4 py-4 items-center rounded-full boxShadow text-black bg-gray-200 hover:scale-105 transition-all'
          >
            <QuestionMarkIcon sx={{ mr: 1 }} /> How to Play
          </div>
        </div>
        <div
          onClick={() => router.push("/leaderboards")}
          className='cursor-pointer flex px-4 py-4 items-center rounded-full font-bold boxShadow text-black bg-gray-200 hover:scale-105 transition-all'
        >
          <BarChartIcon sx={{ mr: 1 }} /> {"Leaderboards"}
        </div>
        <div>
          <h5 className='text-emerald-700 font-bold text-center'>Special thanks to</h5>
          <ul className='mt-2 font-semibold'>
            <a
              href='https://www.facebook.com/PSAUCLICKS'
              rel='noopener noreferrer'
              target='_blank'
              className='text-sm sm:text-md hover:underline flex justify-center items-center bg-emerald-700 shadow-lg p-2 rounded-sm text-white'
            >
              <FacebookIcon />
              PSAU CLICK 📸 (For Providing Images)
            </a>
          </ul>
        </div>
        <div className='text-center max-w-[300px]'>
          and to my friends and to all people who tested this app before it was released. You know who you are 💘
        </div>
      </main>
    </>
  );
}
