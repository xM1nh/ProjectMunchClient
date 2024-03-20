import { TCoordinates, TGetReverseGeocoding } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useGetReverseGeocoding = ({ longitude, latitude }: TCoordinates) => {
  const { status, error, data, refetch } = useQuery<
    TGetReverseGeocoding,
    Error
  >({
    queryKey: [
      `/mapbox/reverse-geocoding?longitude=${longitude}&latitude=${latitude}`,
    ],
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
