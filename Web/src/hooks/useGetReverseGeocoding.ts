import { TCoordinates, TGetReverseGeocoding } from "@/types";
import { useFetch } from "./useFetch";

const useGetReverseGeocodingApi = ({ longitude, latitude }: TCoordinates) => {
  const { commonFetch, isLoading, data, error } = useFetch<
    null,
    TGetReverseGeocoding
  >({
    url: "",
    method: "GET",
  });

  const getReverseGeocoding = () => commonFetch({});

  return { getReverseGeocoding, isLoading, data, error };
};

export default useGetReverseGeocodingApi;
