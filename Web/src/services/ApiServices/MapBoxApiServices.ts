import { API_BASE_URL } from "@/config";
import { TCoordinates, TGetReverseGeocoding } from "@/types";
import fetch from "../FetchInterceptor";

const MapBoxApiService = {
  getReverseGeocoding: async ({
    longitude,
    latitude,
  }: TCoordinates): Promise<TGetReverseGeocoding> =>
    await fetch(
      `${API_BASE_URL}/mapbox/reverse-geocoding?longitude=${longitude}&latitude=${latitude}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => data),
};

export default MapBoxApiService;
