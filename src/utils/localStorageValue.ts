type Repository<T> = {
  value: T
  remove(): void
}

export const localStorageRepository = <T>(
  key: string,
  initialValue: T,
): Repository<T> => ({
  get value() {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  },
  set value(value: T) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  remove() {
    window.localStorage.removeItem(key)
  },
})
