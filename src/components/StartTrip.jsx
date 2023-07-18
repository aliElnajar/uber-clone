import { signOut } from "next-auth/react";
import Link from "next/link";
const StartTrip = () => {
  return (
    <div className="border-t border-gray-100 flex items-center flex-col bg-slate-50 h-[100%]">
      <h1 className="text-5xl font-bold p-4 mb-4">uber</h1>
      <Link href="/whereto" className="btn-custom">
        Start a new trip
      </Link>
      <button className="btn-custom bg-red-700 mt-2" onClick={() => signOut()}>
        logout
      </button>
    </div>
  );
};

export default StartTrip;
