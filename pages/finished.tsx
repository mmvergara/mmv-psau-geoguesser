import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavigationIcon from "@mui/icons-material/Navigation";
import BarChartIcon from "@mui/icons-material/BarChart";
import axios from "axios";
import Head from "next/head";

type gameData = {
  name: string;
  score: number;
};
const Finished: React.FC = () => {
  const router = useRouter();
  const id = router.query.id;
  const [gameData, setGameData] = useState<gameData | null>(null);

  useEffect(() => {
    const getScore = async () => {
      if (!router.isReady) return;
      try {
        const {
          data: { data },
        } = await axios.get("/api/get?id=" + id);
        setGameData(data);
      } catch (error) {
        router.push("/");
      }
    };
    getScore();
    console.log("useeffect");
  }, [id, router]);

  return (
    <>
      <Head>
        <title>Guess!</title>
      </Head>
      <main className='h-screen w-screen flex justify-center items-center gap-4 flex-col bg-yellow-200 '>
        <h1 className='text-center text-4xl sm:text-7xl text-psauGreen font-Poppins font-bold tracking-wide'>
          Psau Geoguesser
        </h1>
        <h1 className='text-center text-2xl sm:text-4xl text-psauYellow font-Poppins font-bold tracking-wide'>
          Thank you <span className='text-emerald-800 underline'>{`"${gameData?.name}"` || ""}</span> for playing 🥳
        </h1>
        <h2 className='text-center text-xl sm:text-2xl text-psauGreen font-Poppins font-bold tracking-wide'>
          You scored: <span className='underline '>{gameData ? gameData.score : 0}</span> / 30 | Game ID:{" "}
          <span className='underline '>{id}</span>
        </h2>
        <div
          onClick={() => router.push("/guess")}
          className='cursor-pointer flex px-4 py-4 items-center rounded-full boxShadow text-psauYellow bg-psauGreen hover:scale-105 transition-all'
        >
          <NavigationIcon sx={{ mr: 1 }} />
          <span className='font-Poppins mr-2'>Play Again !</span>
        </div>
        <h2 className='text-center text-xl  sm:text-2xl text-psauGreen font-Poppins font-bold tracking-wide underline'>
          psau-geoguesser.vercel.app
        </h2>
        <div className='flex gap-2 font-Poppins font-semibold'>
          <div
            onClick={() => router.push("/leaderboards")}
            className='cursor-pointer flex px-4 py-4 items-center rounded-full boxShadow text-black bg-gray-200 hover:scale-105 transition-all'
          >
            <BarChartIcon sx={{ mr: 1 }} /> {"Leaderboards"}
          </div>
        </div>
      </main>
    </>
  );
};

export default Finished;
