import { API_BASE_URL } from "@/config";
import { TPostLoginRequest, TPostRegisterRequest } from "@/types";
import { useMutation } from "@tanstack/react-query";

const useAuthentication = {
  usePostLogin: () => {
    const { mutate, isError, isSuccess, isPending } = useMutation<
      void,
      Error,
      TPostLoginRequest
    >({
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
    return {
      login: mutate,
      isLoginError: isError,
      isLoginSuccess: isSuccess,
      isLoginPending: isPending,
    };
  },
  usePostRegister: ({ userName, email, password }: TPostRegisterRequest) => {
    const { mutate, isError, isSuccess, isPending } = useMutation<
      void,
      Error,
      TPostRegisterRequest
    >({
      mutationFn: async () =>
        await fetch(`${API_BASE_URL}/authentication/register`, {
          method: "POST",
          body: JSON.stringify({ userName, email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => data),
    });
    return {
      register: mutate,
      isRegisterError: isError,
      isRegisterSuccess: isSuccess,
      isRegisterPending: isPending,
    };
  },
};

export default useAuthentication;
