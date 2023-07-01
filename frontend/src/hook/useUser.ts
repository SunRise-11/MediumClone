import useSWR from 'swr';
import { fetcher } from '@/libs/Fetcher';

export function useUser(username: string) {
  const { data, error, isLoading } = useSWR(
    `http://localhost:8080/api/v1/users/${username}`,
    fetcher
  );
  return {
    user: data,
    isLoading,
    isError: error,
  };
}
