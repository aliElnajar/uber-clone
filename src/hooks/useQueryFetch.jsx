import {
  gettingCoordinations,
  gettingDistance,
} from "../utils/apicallingFunctions";
import { useQuery, useQueries } from "@tanstack/react-query";
const useQueryFetch = (location, destination) => {
  const [
    { data: locationCoordinations, isLoading: locLoading },
    { data: destinationCoordinations, isLoading: destLoading },
  ] = useQueries({
    queries: [
      {
        queryKey: ["locationCoord"],
        queryFn: () => gettingCoordinations(location),
      },
      {
        queryKey: ["destinationCoord"],
        queryFn: () => gettingCoordinations(destination),
      },
    ],
  });

  const { data: distance, isLoading: distanceLoading } = useQuery({
    queryKey: ["distance"],
    enabled: !!locationCoordinations && !!destinationCoordinations,
    queryFn: () =>
      gettingDistance(locationCoordinations, destinationCoordinations),
  });

  return {
    locationCoordinations,
    distance,
    destinationCoordinations,
    loadingStatus: locLoading || destLoading || distanceLoading,
  };
};

export default useQueryFetch;
