import { useCustomSelector, useCustomDispatch } from '@/hooks/redux'
import { setAccessToken } from '@/redux/slices/auth'

const Home: React.FC = () => {
  const { auth } = useCustomSelector((state) => state)

  const dispatch = useCustomDispatch()

  const handleLogin = (): void => {
    dispatch(setAccessToken('43rtfg34t424setertert4343'))
  }

  console.log(auth)
  return (
    <main>
      <h1>🏚️ component</h1>
      <button onClick={handleLogin}>Log</button>
    </main>
  )
}

export default Home
