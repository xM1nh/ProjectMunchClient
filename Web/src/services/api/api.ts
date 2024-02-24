import useGetReverseGeocodingApi from "@/hooks/useGetReverseGeocoding";
import { TCoordinates } from "@/types";

export class MapboxApi {
  public static GetReverseGeocoding({ longitude, latitude }: TCoordinates) {
    const {
      getReverseGeocoding,
      isLoading: getReverseGeocodingLoading,
      error: getReverseGeocodingError,
      data: getReverseGeocodingData,
      // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useGetReverseGeocodingApi({ longitude, latitude });

    return {
      getReverseGeocoding,
      getReverseGeocodingData,
      getReverseGeocodingError,
      getReverseGeocodingLoading,
    };
  }
}
