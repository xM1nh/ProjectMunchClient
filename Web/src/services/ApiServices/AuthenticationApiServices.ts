import { TPostLoginRequest, TPostRegisterRequest } from "@/types";
import fetch from "../FetchInterceptor";
import { API_BASE_URL } from "@/config";

const AuthenticationApiServices = {
  postLogin: async (payload: TPostLoginRequest): Promise<void> =>
    await fetch(`${API_BASE_URL}/authentication/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => data),
  postRegister: async (payload: TPostRegisterRequest): Promise<void> =>
    await fetch(`${API_BASE_URL}/authentication/register`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => data),
};

export default AuthenticationApiServices;
