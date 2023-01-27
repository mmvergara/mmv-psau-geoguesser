import Link from "next/link";

const Finished: React.FC = () => {
  return (
    <Link href={"/guess"} className='text-3xl'>
      Play again
    </Link>
  );
};

export default Finished;
