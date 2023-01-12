import { localStorageRepository } from './localStorageValue'

export const tokenRepository = localStorageRepository('token', '')
export const isSignedIn = () => tokenRepository.value.length > 0
