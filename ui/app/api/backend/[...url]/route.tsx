import { NextRequest, NextResponse } from 'next/server'
import { getBasicAuth } from '@/lib/user'

function buildUrl(url: string[]) {
  const fetchURl = url.join('/')
  return `${process.env.BACKEND_URL}/${fetchURl}`
}

export async function GET(
  req: NextRequest,
  {
    params
  }: {
    params: {
      url: string[]
    }
  }
) {
  const header = await getBasicAuth(req)

  const requestInit: RequestInit = {
    method: 'GET',
    credentials: 'include',
    headers: header
  }

  const response = await fetch(buildUrl(params.url), requestInit)

  const bodyResponse = await response.json()

  if (bodyResponse.status) {
    return new NextResponse(bodyResponse.error, {
      status: bodyResponse.status,
      headers: response.headers
    })
  }

  return NextResponse.json(bodyResponse, {
    status: response.status,
    headers: response.headers
  })
}

export async function POST(
  req: NextRequest,
  {
    params
  }: {
    params: {
      url: string[]
    }
  }
) {
  const header = await getBasicAuth(req)

  const requestInit: RequestInit = {
    method: 'POST',
    credentials: 'include',
    headers: header,
    body: JSON.stringify(await req.json())
  }

  const response = await fetch(buildUrl(params.url), requestInit)

  try {
    const bodyResponse = await response.json()
    if (bodyResponse.status) {
      return new NextResponse(bodyResponse.error, {
        status: bodyResponse.status,
        headers: response.headers
      })
    }

    return NextResponse.json(bodyResponse, {
      status: response.status,
      headers: response.headers
    })
  } catch (error) {
    return NextResponse.json(response, {
      status: response.status,
      headers: response.headers
    })
  }
}

export async function PUT(
  req: NextRequest,
  {
    params
  }: {
    params: {
      url: string[]
    }
  }
) {
  const header = await getBasicAuth(req)

  const requestInit: RequestInit = {
    method: 'PUT',
    credentials: 'include',
    headers: header,
    body: JSON.stringify(await req.json())
  }

  const response = await fetch(buildUrl(params.url), requestInit)

  if (response.status === 204) {
    return NextResponse.json(
      { response: 'Successful' },
      {
        status: 200,
        headers: response.headers
      }
    )
  } else {
    return NextResponse.json(
      { Error: response.statusText },
      {
        status: response.status,
        headers: response.headers
      }
    )
  }
}

export async function DELETE(
  req: NextRequest,
  {
    params
  }: {
    params: {
      url: string[]
    }
  }
) {
  const header = await getBasicAuth(req)

  const requestInit: RequestInit = {
    method: 'DELETE',
    credentials: 'include',
    headers: header
  }

  const response = await fetch(buildUrl(params.url), requestInit)

  if (response.status === 204) {
    return NextResponse.json(
      { response: 'Deleted' },
      {
        status: 200,
        headers: response.headers
      }
    )
  } else {
    return NextResponse.json(
      { Error: response.statusText },
      {
        status: response.status,
        headers: response.headers
      }
    )
  }
}
