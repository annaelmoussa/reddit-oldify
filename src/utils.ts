export function isRedditUrl(url: URL): boolean {
  return url.hostname === 'www.reddit.com' || url.hostname === 'reddit.com';
}

export function oldifyUrl(url: URL): URL {
  const oldUrl = new URL(url.toString());
  oldUrl.hostname = 'old.reddit.com';
  return oldUrl;
}
