import { Button } from "@mui/material";
import Link from "next/link";
import NavigationIcon from "@mui/icons-material/Navigation";
import { useRouter } from "next/router";

const Finished: React.FC = () => {
  const router = useRouter();
  const score = router.query.score || "0";

  return (
    <main className='h-screen w-screen flex justify-center items-center gap-4 flex-col bg-yellow-200 '>
      <h1 className='text-center text-4xl sm:text-7xl text-psauGreen font-Poppins font-bold tracking-wide'>
        Psau Geoguesser
      </h1>{" "}
      <h1 className='text-center text-2xl sm:text-5xl text-psauGreen font-Poppins font-bold tracking-wide'>
        Thank you for playing 🥳
      </h1>
      <h2 className='text-center text-xl sm:text-2xl text-psauGreen font-Poppins font-bold tracking-wide'>
        {" "}
        You scored: <span className='underline'>{score}</span> / 50
      </h2>
      <div
        onClick={() => router.push("/guess")}
        className='cursor-pointer flex px-4 py-4 items-center rounded-full boxShadow text-psauYellow bg-psauGreen hover:scale-105 transition-all'
      >
        <NavigationIcon sx={{ mr: 1 }} />
        <span className='font-Poppins mr-2'>Play Again !</span>
      </div>
    </main>
  );
};

export default Finished;
