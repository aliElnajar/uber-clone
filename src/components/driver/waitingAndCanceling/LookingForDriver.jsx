import searchingSvg from "../../../../public/searchingSvg.svg";
import Image from "next/image";
import CancelRideReasons from "./CancelRideReasons";
const FindingDriverProcess = () => {
  return (
    <section className="flex flex-col space-y-4 md:space-y-8 items-center  h-[50vh] pt-4">
      <progress className="progress h-[2vh] w-[80%] mx-auto " />
      <h6 className="font-semibold ">finding you a driver,please wait</h6>
      <Image
        src={searchingSvg}
        alt="searching"
        className="w-[150px] h-[8vh] md:h-[15vh] mb-[5px] md:mb-[20px]"
      />
      <CancelRideReasons>
        <label
          htmlFor="my_modal_6"
          className="btn-custom bg-red-800  text-xl cursor-pointer"
        >
          Cancel request
        </label>
      </CancelRideReasons>
    </section>
  );
};

export default FindingDriverProcess;
