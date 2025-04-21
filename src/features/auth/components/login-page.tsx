// LoginPage.tsx
import { useDispatch } from "react-redux"
import { useState } from "react"
import { authActions } from "../model/auth-reducer"
import { Button, Callout, Flex, TextField, Theme } from "@radix-ui/themes"
import { Navigate } from "react-router-dom"
import { useAppSelector, authSelector } from "../../../common/hooks/useAppSelector"
import { Path } from "../../../app/router/router"
export function LoginPage() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const navigate = useNavigate()
  const auth = useAppSelector(authSelector)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      setError("Заполните все поля")
      return
    }
    if (password !== "123") {
      setError("Неверный пароль")
      return
    }
    setError("")
    dispatch(authActions.login({ email }))
    setIsLoggedIn(true)
  }
  if (isLoggedIn) {
    return <Navigate to={Path.Main} />
  }
  return (
    <>
      <Theme>
        {auth.isAuthenticated ? (
          <Navigate to={Path.Main} />
        ) : (
          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap="3" maxWidth="300px" mx="auto">
              <TextField.Root
                placeholder="Email 'lalala@gus.kz'"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <TextField.Root
                placeholder="Пароль '123'"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              {error && (
                <Callout.Root color="red">
                  <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
              )}
              <Button type="submit" variant="solid">
                Войти
              </Button>
            </Flex>
          </form>
        )}
      </Theme>
    </>
  )
}
