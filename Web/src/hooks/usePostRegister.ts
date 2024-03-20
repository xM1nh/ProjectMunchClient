import { TPostRegisterRequest } from "@/types";
import { useMutation } from "@tanstack/react-query";

const usePostRegister = ({
  userName,
  email,
  password,
}: TPostRegisterRequest) => {
  const { status, error, data } = useMutation<
    void,
    Error,
    TPostRegisterRequest
  >({
    mutationFn: async () =>
      await fetch("/register", {
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
    postRegisterStatus: status,
    postRegisterError: error,
    postRegisterData: data,
  };
};

export default usePostRegister;
