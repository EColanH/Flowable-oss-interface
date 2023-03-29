export function mergeHeaders(...headersList: (HeadersInit | undefined)[]) {
  const mergedHeaders = new Headers()
  for (const headers of headersList) {
    const headersObj =
      headers instanceof Headers ? headers : new Headers(headers)
    for (const [key, value] of headersObj.entries()) {
      mergedHeaders.append(key, value)
    }
  }
  return mergedHeaders
}

export function createResponse(
  originalResponse: Response,
  bodyString: string,
  options?: ResponseInit
) {
  return new Response(bodyString, {
    status: options?.status ?? originalResponse.status,
    statusText: options?.statusText ?? originalResponse.statusText,
    headers: mergeHeaders(options?.headers, originalResponse.headers)
  })
}
