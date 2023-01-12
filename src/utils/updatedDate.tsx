import { Todo } from 'types'

const isUpdated = (createdAt: string, updatedAt: string) =>
  createdAt !== updatedAt

export const updatedDate = ({
  createdAt,
  updatedAt,
}: Pick<Todo, 'createdAt' | 'updatedAt'>) => {
  const postFix = isUpdated(createdAt, updatedAt) ? '수정됨' : '생성됨'
  const parsed = new Date(updatedAt).toLocaleDateString('ko-KR')

  return `${parsed} 에 ${postFix}`
}
