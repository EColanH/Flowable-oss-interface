import crypto from 'crypto'
import { getSession } from '@/lib/session'
import { NextRequest } from 'next/server'

export class User {
  public isLoggedIn: boolean
  public id: string
  public firstName: string
  public lastName: string
  public displayName: string
  public email: string
  public password: string
  public key: string
  public iv: string

  constructor(
    isLoggedIn: boolean,
    id: string,
    firstName: string,
    lastName: string,
    displayName: string,
    email: string,
    password: string
  ) {
    this.isLoggedIn = isLoggedIn
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.displayName = displayName
    this.email = email
    const { encryptedPassword, key, iv } = encrypt(password)
    this.password = encryptedPassword
    this.key = key
    this.iv = iv
  }
}

function encrypt(password: string) {
  const key = crypto.randomBytes(32)
  const iv = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv(
    process.env.CRYPTO_KEY as string,
    key,
    iv
  )
  let encryptedPassword = cipher.update(password, 'utf8', 'hex')
  encryptedPassword += cipher.final('hex')
  return {
    encryptedPassword,
    key: key.toString('hex'),
    iv: iv.toString('hex')
  }
}

export function decrypt(encryptedPassword: string, key: string, iv: string) {
  const decipher = crypto.createDecipheriv(
    process.env.CRYPTO_KEY as string,
    Buffer.from(key, 'hex'),
    Buffer.from(iv, 'hex')
  )
  let decryptedPassword = decipher.update(encryptedPassword, 'hex', 'utf8')
  decryptedPassword += decipher.final('utf8')
  return decryptedPassword
}

export function encode(id: string, password: string) {
  const code = Buffer.from(`${id}:${password}`).toString('base64')
  return `Basic ${code}`
}

export async function getBasicAuth(req: NextRequest) {
  const [session] = await getSession(req)
  const { id, password, key, iv } = session.user as User
  const pass = decrypt(password, key, iv)
  const headers = new Headers()
  headers.set('Content-Type', 'application/json')
  headers.set('Authorization', encode(id, pass))
  return headers
}
