import { Box, Button, Callout, Flex, Heading, Text } from "@radix-ui/themes"
import { Navigate } from "react-router-dom"
import { Path } from "../../../app/router/router"

export function ErrorFallback() {
  const redirectUser = () => <Navigate to={Path.Main} />
  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"
      className="bg-gradient-to-r from-light-2 to-light dark:from-dark dark:to-dark-2 text-dark dark:text-light"
    >
      <Box className="p-6 rounded-2xl shadow-md shadow-dark/20 dark:shadow-light/20 bg-light dark:bg-dark text-center max-w-md">
        <Heading as="h2" size="6" mb="3">
          Что-то пошло не так 😢
        </Heading>
        <Text size="3" mb="4" as="p">
          Возникла непредвиденная ошибка. Попробуйте обновить страницу или вернитесь на главную.
        </Text>

        <Callout.Root color="red" mb="4">
          <Callout.Text>Мы уже работаем над решением!</Callout.Text>
        </Callout.Root>

        <Flex justify="center" gap="3">
          <Button onClick={redirectUser} variant="solid" color="violet">
            На главную
          </Button>
          <Button onClick={() => window.location.reload()} variant="outline">
            Обновить
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}
