import { styled } from './styles'

const Button = styled('button', {
  borderRadius: '$md',
  backgroundColor: '$ignite500',
  fontFamily: 'sans-serif',
  padding: '$4',
})

export function App() {
  return <Button>Hello World</Button>
}
