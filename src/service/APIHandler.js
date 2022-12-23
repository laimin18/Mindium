export default async function APIHandler(url, options = {}) {
  // future: Handle several urls => Ref: https://gist.github.com/bschwartz757/5d1ff425767fdc6baedb4e5d5a5135c8

  // if without giving options object, setting timeout to default 6s
  const { timeout = 60000 } = options;
  // Ref: https://developer.mozilla.org/en-US/docs/Web/API/AbortController
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(url, {
    ...options,
    // connect this fetch request to the above controller
    signal: controller.signal,
  });
  clearTimeout(id);
  return response;
}
