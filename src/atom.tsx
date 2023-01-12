import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const tokenAtom = atomWithStorage('token', '')
export const isLoggedInAtom = atom((get) => get(tokenAtom) !== '')
