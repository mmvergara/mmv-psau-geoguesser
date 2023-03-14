import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";

const Leaderboards: React.FC = () => {
  const router = useRouter();
  const [leaderboards, setLeaderboards] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  useEffect(() => {
    const getLeaderboards = async () => {
      try {
        const { data } = await axios.get("/api/getAll");
        setLeaderboards(data.data.sort((a: any, b: any) => b.score - a.score));
      } catch (error) {
        console.log(error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getLeaderboards();
  }, []);
  console.log(leaderboards[0]);

  return (
    <main className='h-[100vh] overflow-y-auto flex pt-8 items-center gap-4 flex-col bg-yellow-200 px-2'>
      <Head>
        <title>Leaderboards 🏆</title>
      </Head>
      <h1 className='text-center text-4xl sm:text-7xl text-psauGreen font-Poppins font-bold tracking-wide'>
        Leaderboards 🏆
      </h1>
      <div className='text-center'>
        Leaderboards are based on Game ID which you will receive after completing the game.
      </div>
      <button
        type='button'
        onClick={() => router.push("/")}
        className='mt-4 bg-psauGreen p-2 text-white font-semibold drop-shadow-xl rounded-md hover:scale-105 transition-all'
      >
        Home 🏠
      </button>
      {!isLoading ? (
        leaderboards.map((leaderboard, i) => {
          return (
            <div key={leaderboard.id} className='flex w-[100%] justify-center items-start '>
              <div className='mt-2 bg-psauGreen text-white font-semibold p-4 max-w-[400px] w-[100%] flex justify-between border-t-4 border-psauYellow flex-wrap'>
                <div>
                  {i + 1} - {leaderboard.name || leaderboard.id}
                </div>{" "}
                <div>Score : {leaderboard.score} / 30</div>
                <div className='w-[100%] font-thin opacity-50'>Game ID: {leaderboard.id}</div>
              </div>
            </div>
          );
        })
      ) : (
        <div className='font-bold'>Loading...</div>
      )}
      {hasError && <div className='font-bold'>Something went wrong</div>}
    </main>
  );
};

export default Leaderboards;
