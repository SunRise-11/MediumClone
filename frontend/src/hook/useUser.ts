import useSWR from 'swr';
import { fetcher } from '@/libs/Fetcher';

export function useUser(username: string) {
  const { data, error, isLoading } = useSWR(
    `http://localhost:8080/api/v1/users`,
    (url) => fetcher(url, { username })
  );
  return {
    user: data,
    isLoading,
    isError: error,
  };
}
