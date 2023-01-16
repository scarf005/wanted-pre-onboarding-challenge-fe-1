import ky, { Options } from 'ky'
import { HttpMethod } from 'ky/distribution/types/options'
import { tokenRepository } from 'utils'

export const url = import.meta.env.VITE_API_URL
type ReplaceType<T, K extends keyof T, NewType> = {
  [P in keyof T]: P extends K ? NewType : T[P]
}
type StrictMethodOptions = ReplaceType<Options, 'method', HttpMethod>

export const api = () =>
  ky.extend({
    prefixUrl: url,
    headers: {
      Authorization: tokenRepository.value,
    },
  })
