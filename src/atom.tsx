import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const tokenAtom = atomWithStorage('token', '')
