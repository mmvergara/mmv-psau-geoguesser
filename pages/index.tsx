import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import NavigationIcon from "@mui/icons-material/Navigation";
import InfoIcon from "@mui/icons-material/Info";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <main className='h-screen w-screen flex justify-center items-center gap-4 flex-col bg-yellow-200 '>
      <h1 className='text-center text-4xl sm:text-7xl text-psauGreen font-Poppins font-bold tracking-wide'>
        Psau Geoguesser
      </h1>
      <p className='text-center mx-2'>By: Vergara, Mark Matthew BSIT 2-A {"2022-2023"}</p>
      <div
        onClick={() => router.push("/guess")}
        className='cursor-pointer flex px-4 py-4 items-center rounded-full boxShadow text-psauYellow bg-psauGreen hover:scale-105 transition-all'
      >
        <NavigationIcon sx={{ mr: 1 }} />
        <span className='font-Poppins mr-2'>Start Guessing! (beta)</span>
      </div>
      <div className='flex gap-2 font-Poppins font-semibold'>
        <div className='cursor-pointer flex px-4 py-4 items-center rounded-full boxShadow text-black bg-gray-200 hover:scale-105 transition-all'>
          <InfoIcon sx={{ mr: 1 }} /> About
        </div>
        <div className='cursor-pointer flex px-4 py-4 items-center rounded-full boxShadow text-black bg-gray-200 hover:scale-105 transition-all'>
          <QuestionMarkIcon sx={{ mr: 1 }} /> How to Play
        </div>
      </div>
    </main>
  );
}
