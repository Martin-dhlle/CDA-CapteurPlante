import { useState, useCallback } from "react";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import api from "../utils/axios";
import { defaultErrorMessages } from "../utils/error/apiErrorMessage";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface UseRequestResponse<T> {
  data: T | null;
  error: string | null;
  request: (
    method: HttpMethod,
    param?: string,
    config?: AxiosRequestConfig
  ) => void;
}

/**
 * Custom hook pour envoyer des requêtes à l'API
 * @param apiEndpoint endpoint de l'API
 * @param errorMessagesSet messages d'erreurs à déclarer (faculatif)
 * @returns
 */
const useRequest = <T,>(
  apiEndpoint: string,
  errorMessagesSet: any = defaultErrorMessages
): UseRequestResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  const request = useCallback(
    async (method: HttpMethod, param?: string, config?: AxiosRequestConfig) => {
      try {
        setError(null);
        const response: AxiosResponse<{ message: string; data: T }> = await api(
          {
            method,
            url: `${apiEndpoint}${param ? `/${param}` : ""}`,
            ...config,
          }
        );
        if (response.status === 200) {
          setData(response.data.data);
        }
        if (response.status === 404) {
          setError(errorMessagesSet[404]);
        }
      } catch (e) {
        setError(errorMessagesSet[500]);
      }
    },
    [apiEndpoint, errorMessagesSet]
  );

  return { data, error, request };
};

export default useRequest;
