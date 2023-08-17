import { useState, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import apiUri from "../config/api/api-uri";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface ApiPaths {
  GET: string;
  POST: string;
  PUT: string;
  DELETE: string;
}

interface UseRequestResponse<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
  request: (method: HttpMethod, config?: AxiosRequestConfig) => void;
}

const useRequest = <T,>(apiPaths: ApiPaths): UseRequestResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const request = useCallback(
    async (method: HttpMethod, config?: AxiosRequestConfig) => {
      try {
        setLoading(true);
        setError(null);
        const response: AxiosResponse<T> = await axios({
          method,
          url: `${apiUri}${apiPaths[method]}`,
          ...config,
        });
        setData(response.data);
      } catch (e) {
        const _error = e as Error;
        setError(_error);
        console.log(_error);
      } finally {
        setLoading(false);
      }
    },
    [apiPaths]
  );

  return { data, error, loading, request };
};

export default useRequest;
