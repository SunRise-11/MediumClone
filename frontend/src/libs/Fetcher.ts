export const fetcher = (url: string, options?: any) =>
  fetch(url, { ...options, body: JSON.stringify({ key: value }) }).then((res) =>
    res.json()
  );
