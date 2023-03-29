// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { User } from '@/lib/user'
import { type IncomingMessage, type ServerResponse } from 'http'
import {
  getIronSession,
  IronSession,
  type IronSessionOptions
} from 'iron-session'

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: 'iron-session/flowable',
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
}

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  interface IronSessionData {
    user?: User
  }
}

export function getSession(
  req: Request,
  res?: Response
): Promise<readonly [IronSession, Response]>
export function getSession(
  req: IncomingMessage,
  res?: ServerResponse
): Promise<readonly [IronSession, ServerResponse]>
export async function getSession(
  req: IncomingMessage | Request,
  res: Response | ServerResponse | undefined = new Response()
) {
  return [await getIronSession(req, res, sessionOptions), res] as const
}
