import { API_BASE_URL } from "@/config";
import { TPostLoginRequest } from "@/types";
import { useMutation } from "@tanstack/react-query";

const usePostLogin = () => {
  const mutation = useMutation<void, Error, TPostLoginRequest>({
    mutationFn: async ({ userName, password }) =>
      await fetch(`${API_BASE_URL}/authentication/login`, {
        method: "POST",
        body: JSON.stringify({ userName, password }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => data),
  });

  return mutation;
};

export default usePostLogin;
