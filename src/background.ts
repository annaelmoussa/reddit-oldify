import { isRedditUrl, oldifyUrl } from './utils';

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = new URL(details.url);
    if (isRedditUrl(url)) {
      return { redirectUrl: oldifyUrl(url).toString() };
    }
  },
  { urls: ['*://www.reddit.com/*', '*://reddit.com/*'] },
  ['blocking']
);
