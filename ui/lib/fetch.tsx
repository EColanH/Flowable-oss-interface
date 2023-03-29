import { CustomError } from '@/lib/error'
import { User, decrypt } from '@/lib/user'

type methods = 'POST' | 'PUT' | 'GET' | 'DELETE'

export async function backendRequestServer(
  url: string,
  method: string,
  user: User,
  body?: any
): Promise<any> {
  const password = decrypt(user.password, user.key, user.iv)
  const requestOptions: RequestInit = {
    method: method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Basic ' + Buffer.from(`${user.id}:${password}`).toString('base64')
    }
  }
  if (body !== null && method !== 'GET' && method !== 'DELETE') {
    requestOptions.body = JSON.stringify(body)
  }

  let newUrl = url
  if (url.includes('?')) {
    const splitUrl = url.split('?')
    const queryUrl = encodeURI(`?${splitUrl[1]}`).toString()
    newUrl = `${splitUrl[0]}${queryUrl}`
  }
  const response = await fetch(newUrl, requestOptions)
  if (response.ok) {
    return await response.json()
  } else {
    const data = await response.json()
    throw new CustomError({
      message: data.message,
      response,
      data
    })
  }
}

export async function backendRequestClient(
  url: string,
  method: methods,
  json: boolean,
  body?: any
): Promise<any> {
  const requestOptions: RequestInit = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  if (body !== null && method !== 'GET' && method !== 'DELETE') {
    requestOptions.body = JSON.stringify(body)
  }
  const response = await fetch(`/api/backend${url}`, requestOptions)
  if (response.ok) {
    if (json) {
      return await response.json()
    } else {
      return response
    }
  } else {
    throw new CustomError({
      message: response.statusText,
      response,
      data: {
        message: response.statusText
      }
    })
  }
}

export async function backendRequestClientLogin(body: any): Promise<any> {
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }

  const response = await fetch(`/api/backend/login`, requestOptions)

  const data = await response.json()

  if (response.ok) {
    return data
  } else {
    throw new CustomError({
      message: data.message,
      response,
      data
    })
  }
}
