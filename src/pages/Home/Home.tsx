import { useCustomSelector, useCustomDispatch } from '@/hooks/redux'
import { login } from '@/redux/slices/auth'

const Home: React.FC = () => {
  const { auth } = useCustomSelector((state) => state)

  const dispatch = useCustomDispatch()

  const handleLogin = (): void => {
    void dispatch(
      login({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      })
    )
  }

  console.log(auth)
  return (
    <main>
      <h1>🏚️ component</h1>
      {auth.isLoading && 'loading...'}
      <button onClick={handleLogin}>Login button</button>
    </main>
  )
}

export default Home
