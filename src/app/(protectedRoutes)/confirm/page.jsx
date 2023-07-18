"use client";
import Map from "@/components/Map";
import UberRides from "@/components/UberRides";
import { useSession } from "next-auth/react";
import useQueryFetch from "../../../hooks/useQueryFetch";
import { useGeneralContext } from "@/store&providers/ContextStore";
const page = ({ searchParams }) => {
  const { data: session } = useSession({
    required: true,
  });
  const { pickup: location, dropoff: destination } = searchParams;

  const {
    locationCoordinations,
    destinationCoordinations,
    distance,
    loadingStatus,
  } = useQueryFetch(location, destination);
  return (
    <div className="flex flex-col w-screen h-[100vh] bg-red-50">
      <div className="flex-1 h-1/2">
        <Map
          locationCoord={locationCoordinations}
          destinationCoord={destinationCoordinations}
        />
      </div>
      <div className="flex-1 h-1/2">
        <UberRides distance={distance} />
      </div>
    </div>
  );
};

export default page;
