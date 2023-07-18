import searchingSvg from "../../../public/searchingSvg.svg";
import Image from "next/image";
import { useGeneralContext } from "../../store&providers/ContextStore";

const FindingDriverProcess = () => {
  const { confirmingRideHandler } = useGeneralContext();
  return (
    <section className="flex flex-col space-y-4 md:space-y-8 items-center  h-[50vh] pt-4">
      <progress className="progress h-[2vh] w-[80%] mx-auto " />
      <h6 className="font-semibold ">finding you a driver,please wait</h6>
      <Image
        src={searchingSvg}
        alt="searching"
        className="w-[150px] h-[8vh] md:h-[15vh] mb-[5px] md:mb-[20px]"
      />
      <button
        className="btn-custom bg-red-800"
        onClick={() => confirmingRideHandler(false)}
      >
        cancel request
      </button>
    </section>
  );
};

export default FindingDriverProcess;
