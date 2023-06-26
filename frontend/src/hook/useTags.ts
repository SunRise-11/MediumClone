import useSWR from 'swr';
import { fetcher } from '@/libs/Fetcher';

export function useTags() {
  const { data, error, isLoading } = useSWR(
    `http://localhost:8080/api/v1/tags`,
    fetcher
  );
  return {
    tags: data,
    isLoading,
    isError: error,
  };
}
