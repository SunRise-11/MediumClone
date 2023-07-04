import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/libs/Fetcher';

export function useSearch(
  query: string,
  currentPage: number,
  pageSize: number
) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  try {
    setIsLoading(true);
    const res = getData(
      `http://localhost:8080/api/v1/posts/search?query=${query}&currentPage=${currentPage}&currentSize=${pageSize}`
    );

    setData(res);
  } catch (error) {
    setIsError(true);
    setIsLoading(false);
  } finally {
    setIsLoading(false);
  }
  return {
    data,
    isLoading,
    isError,
  };
}

const getData = async (url: string) => {
  return await fetch(url).then((res) => res.json());
};
