import { MAPBOX_ACCESS_TOKEN } from "@/config";
import { TCoordinates, TGetReverseGeocoding } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useGetReverseGeocoding = ({ longitude, latitude }: TCoordinates) => {
  const { status, error, data, refetch } = useQuery<
    TGetReverseGeocoding,
    Error
  >({
    queryKey: ["reverseGeocoding"],
    queryFn: () =>
      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${MAPBOX_ACCESS_TOKEN}`
      )
        .then((response) => response.json())
        .then((data) => data),
  });

  useEffect(() => {
    refetch();
  }, [longitude, latitude, refetch]);

  return {
    getReverseGeocodingStatus: status,
    getReverseGeocodingError: error,
    getReverseGeocodingData: data,
  };
};

export default useGetReverseGeocoding;
