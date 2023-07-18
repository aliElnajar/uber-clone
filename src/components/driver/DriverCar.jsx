import Image from "next/image";
const DriverCar = ({ carDetailts }) => {
  return (
    <section className=" flex-container p-2 lg:p-4  ">
      <h6 className="text-xl uppercase font-bold">
        Lmn 134
        <br />
        <span className="text-sm lowercase font-semibold ">
          {carDetailts.rideModel}
        </span>
      </h6>
      <Image
        src={carDetailts.img}
        alt="driver-car"
        className="w-[120px] h-[80px] -scale-x-100"
      />
    </section>
  );
};

export default DriverCar;
