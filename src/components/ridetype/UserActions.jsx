import BackButton from "../BackButton";
import { signOut } from "next-auth/react";
import Image from "next/image";
import logoutSvg from "../../../public/logoutSvg.svg";
const UserActions = () => {
  return (
    <section className="flex items-center justify-around pb-2">
      <BackButton previous={true} />
      <h6 className=" text-center font-bold p-2 border-b border-gray-200">
        choose a ride
      </h6>
      <div className="tooltip  tooltip-right" data-tip="logout">
        <button onClick={() => signOut()}>
          <Image
            src={logoutSvg}
            alt="logout-svg"
            className="h-7 w-7 rounded-lg inline"
          />
        </button>
      </div>
    </section>
  );
};

export default UserActions;
