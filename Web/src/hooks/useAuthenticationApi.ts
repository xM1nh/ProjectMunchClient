import AuthenticationApiServices from "@/services/ApiServices/AuthenticationApiServices";
import { TPostLoginRequest, TPostRegisterRequest } from "@/types";
import { useMutation } from "@tanstack/react-query";

const useAuthenticationApi = {
  usePostLogin: () => {
    const { mutate, isError, isSuccess, isPending } = useMutation<
      void,
      Error,
      TPostLoginRequest
    >({
      mutationFn: async ({ userName, password }) =>
        AuthenticationApiServices.postLogin({ userName, password }),
    });
    return {
      login: mutate,
      isLoginError: isError,
      isLoginSuccess: isSuccess,
      isLoginPending: isPending,
    };
  },
  usePostRegister: () => {
    const { mutate, isError, isSuccess, isPending } = useMutation<
      void,
      Error,
      TPostRegisterRequest
    >({
      mutationFn: async ({ userName, email, password }) =>
        await AuthenticationApiServices.postRegister({
          userName,
          email,
          password,
        }),
    });
    return {
      register: mutate,
      isRegisterError: isError,
      isRegisterSuccess: isSuccess,
      isRegisterPending: isPending,
    };
  },
};

export default useAuthenticationApi;
