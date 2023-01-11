import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { AuthInput } from 'types'

export const tokenAtom = atomWithStorage('token', '')
