import ky from 'ky'
import { AuthInput, AuthResponse } from 'types'
import { url } from './todos'

export const login = (json: AuthInput) =>
  ky.post(`${url}/users/login`, { json }).json<AuthResponse>()

export const signUp = (json: AuthInput) =>
  ky.post(`${url}/users/create`, { json }).json<AuthResponse>()
