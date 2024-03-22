import { API_BASE_URL } from "@/config";

const { fetch: originalFetch } = window;

const fetch = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
): Promise<Response> => {
  let response = await originalFetch(input, init);

  if (response.status === 403) {
    const refreshResponse = await originalFetch(
      `${API_BASE_URL}/authentication/refresh`
    );

    if (refreshResponse.ok) {
      response = await originalFetch(input, init);
    } else {
      if (refreshResponse.status === 403) {
        return refreshResponse;
      }
    }
  }

  return response;
};

export default fetch;
