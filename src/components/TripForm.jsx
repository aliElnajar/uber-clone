import { useState } from "react";
import Link from "next/link";
import BackButton from "./BackButton";
const Form = () => {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <>
      <form className=" flex flex-col mx-auto space-y-10 pt-20 bg-gray-100 h-[100vh]">
        <BackButton />
        <div className="flex flex-col space-y-3 w-[70%] md:w-[30%] mx-auto">
          <input
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            className="input text-zinc-800 w-full max-w-md"
            placeholder="enter your location"
            required
          />
          <input
            onChange={(e) => setDestination(e.target.value)}
            value={destination}
            className="input text-zinc-800 w-full max-w-md"
            placeholder="where to go?"
            required
          />
        </div>
        <button
          type="button"
          disabled={!location & !destination}
          className="btn-custom "
        >
          <Link
            href={{
              pathname: "/confirm/",
              query: {
                pickup: location,
                dropoff: destination,
              },
            }}
          >
            confirm my ride
          </Link>
        </button>
      </form>
    </>
  );
};

export default Form;
