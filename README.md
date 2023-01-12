# wanted-pre-onboarding-challenge-fe-1

원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제

## 사용 기술

- 가벼운가?
- 사용하기 편리한가?
- 타입스크립트로 작성되었나?
- 최근 유지보수되고 있나?

### 컴포넌트 UI: [mantine][mantine]

```tsx
<TextInput value={value} onChange={e => setValue(event.currentTarget.value)} />
```

- 필수 컴포넌트 기능 (`Grid`, `Table`, `Input` 등등)
- 폼 라이브러리

### 상태 관리: [jotai][jotai]

```ts
const nameAtom = atom('renk')
const capital = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
const capitalAtom = atom(get => capital(get(nameAtom)))

const App = () => <h2>Hello, {useAtomValue(capitalAtom)}!</h2>
```

- recoil보다 간결한 문법
- 반응형 상태를 쉽게 관리할 수 있음

### HTTP 요청: [ky][ky]

```ts
export const createTodo = (json: TodoInput) =>
  ky.post(`${url}/todos`, { ...options, json }).json<TodoResponse>()
```

- `XHRRequest (axios)`가 아닌 `fetch` 사용
- 유지보수가 빠름: [하루 안에 답변](https://github.com/sindresorhus/ky/issues/481#issue-1526642037)

### 비동기 상태 관리: [react query][react query]

- 쿼리 상태 관리, 변경, 갱신을 쉽게 할 수 있음

### 라우팅: [react-router-dom(v6)][react-router-dom(v6)]

- [공식 문서](https://reactrouter.com/en/main)가 잘 정리되어 있음

### 코드 스타일 및 린터: [rome][rome]

- 빠름
- 스타일과 코딩 컨벤션을 [단일 파일](rome.json)에서 관리 가능

[ky]: https://github.com/sindresorhus/ky
[jotai]: https://jotai.org
[react query]: https://tanstack.com/query/latest/docs/react/overview
[react-router-dom(v6)]: https://github.com/remix-run/react-router
[mantine]: https://mantine.dev
[rome]: https://rome.tools/
