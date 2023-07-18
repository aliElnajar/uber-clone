import { useSearchParams } from "next/navigation";

const TripDiagram = () => {
  const params = useSearchParams();
  const location = params.get("pickup");
  const destination = params.get("dropoff");
  return (
    <section className=" flex items-center space-x-5 overflow-hidden">
      <h6 className="tracking-wider font-bold text-lg">your trip </h6>
      <ul className="steps steps-horizontal md:steps-vertical">
        <li
          data-content="●"
          className="step step-neutral text-sm uppercase font-bold"
        >
          {location}
        </li>
        <li
          data-content="To"
          className="step step-neutral text-sm uppercase font-bold"
        >
          {destination}{" "}
        </li>
      </ul>
    </section>
  );
};

export default TripDiagram;
