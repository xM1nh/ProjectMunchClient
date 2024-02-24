import { useState } from "react";

const DEFAULT_FETCH_OPTIONS = {};

type UseFetchProps = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
};

type CommonFetch<T> = {
  input?: { [index: string]: T };
  fetchOptions?: RequestInit;
};

export function useFetch<TInput, TOuput>({ url, method }: UseFetchProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TOuput | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const commonFetch = async ({
    input,
    fetchOptions = {},
  }: CommonFetch<TInput>) => {
    setIsLoading(true);

    const response = await fetch(url, {
      method,
      ...DEFAULT_FETCH_OPTIONS,
      ...fetchOptions,
      body: JSON.stringify(input),
    });

    try {
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        setError(new Error(`${response.status}: ${response.statusText}`));
      }
    } catch (e) {
      setError(new Error(`${e}`));
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, commonFetch, data, error };
}
