export const truncate = (s: string, length = 10) =>
  s.length <= length ? s : `${s.slice(0, length)}...`
