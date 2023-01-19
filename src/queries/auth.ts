import { paths } from '../routes/paths'
import { useMutation } from '@tanstack/react-query'
import { login, signUp } from 'api'
import { queryClient } from 'queryClient'
import { useNavigate } from 'react-router-dom'
import { tokenRepository } from 'utils'

export const useLoginMutation = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: login,
    onSuccess: (value) => {
      tokenRepository.value = value.token
      queryClient.invalidateQueries(['todos'])
      navigate(paths.root)
    },
  })
}
export const useSignUpMutation = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: signUp,
    onSuccess: (value) => {
      tokenRepository.value = value.token
      queryClient.invalidateQueries(['todos'])
      navigate(paths.root)
    },
  })
}
