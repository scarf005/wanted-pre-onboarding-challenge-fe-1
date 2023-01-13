import { Skeleton } from '@mantine/core'

export const naturals = (size: number) => [...Array(size).keys()]

const randomNatural = (min: number, max: number) =>
  min + Math.floor(Math.random() * (max - min))

export const todoSkeletons = naturals(randomNatural(4, 8)).map((i) => (
  <Skeleton key={i} height={56} />
))
