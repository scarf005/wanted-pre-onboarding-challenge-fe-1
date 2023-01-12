import { Group, Skeleton } from '@mantine/core'

export const naturals = (size: number) => [...Array(size).keys()]

const TodoSkeleton = () => (
  <Group>
    <Skeleton width={80} height={10} />
    <Skeleton width={80} height={6} />
  </Group>
)
const todoSkeletons = naturals(5).map((i) => <TodoSkeleton key={i} />)
