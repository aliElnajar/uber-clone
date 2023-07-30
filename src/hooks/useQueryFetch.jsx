import {
  gettingCoordinations,
  gettingDistance,
} from "../utils/apicallingFunctions";
import { useQuery, useQueries } from "@tanstack/react-query";
const useQueryFetch = (location, destination) => {
  const [
    { data: locationCoordinations, isLoading: locLoading, isError: locError },
    {
      data: destinationCoordinations,
      isLoading: destLoading,
      isError: destError,
    },
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

  const {
    data: distance,
    isLoading: distanceLoading,
    isError: distanceError,
  } = useQuery({
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
    errorStatus: distanceError||destError||locError,
  };
};

export default useQueryFetch;
