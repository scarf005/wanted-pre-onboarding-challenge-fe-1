import { Button, Center, Stack, Title } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { paths } from 'routes/paths'

export const NavigateHomeButton = () => {
  const navigate = useNavigate()
  return <Button onClick={() => navigate(paths.root)}>홈으로 돌아가기</Button>
}

type Props = {
  text?: string
  button?: JSX.Element
}
export const NotFound = ({
  text = '존재하지 않는 페이지입니다.',
  button = <NavigateHomeButton />,
}: Props) => {
  return (
    <Center sx={{ height: '100%' }}>
      <Stack align='center'>
        <Title>{text}</Title>
        {button}
      </Stack>
    </Center>
  )
}
