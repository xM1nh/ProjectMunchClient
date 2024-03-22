import MapBoxApiService from "@/services/ApiServices/MapBoxApiServices";
import { TCoordinates, TGetReverseGeocoding } from "@/types";
import { useQuery } from "@tanstack/react-query";

const useGetReverseGeocoding = (coordinates: TCoordinates) => {
  const { status, error, data } = useQuery<TGetReverseGeocoding, Error>({
    queryKey: [`reverseGeocoding`, coordinates],
    queryFn: async () =>
      await MapBoxApiService.getReverseGeocoding(coordinates),
  });

  return {
    getReverseGeocodingStatus: status,
    getReverseGeocodingError: error,
    getReverseGeocodingData: data,
  };
};

export default useGetReverseGeocoding;
