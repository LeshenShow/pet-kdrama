import { Box, Flex, Grid } from "@radix-ui/themes"
import "./App.css"
import { dataSet } from "./app/data/data"
import { Films } from "./features/films/ui/films"
import { Header } from "./common/components/header/header"

export function App() {
  return (
    <Grid
      areas={`
  ". header header header ."
  ". leftBar main rightBar ."
  ". footer footer footer ."
`}
      columns="0% 15% 1fr 10% 0%"
      rows="48px auto 20px"
      height="100%"
      className="bg-amber-300"
    >
      <Flex gridArea={"header"} gap={"2"} align={"center"} justify={"center"} className="bg-amber-100" width={"100%"}>
        <Header />
      </Flex>

      <Box gridArea={"leftBar"} className="bg-amber-200">
        Left bar
      </Box>

      <Flex
        gridArea={"main"}
        wrap={"wrap"}
        gap={"1"}
        align={"center"}
        justify={"center"}
        className="films pt-4 p-4"
        height={"100%"}
        minHeight="100vh"
      >
        <Films films={dataSet} />
      </Flex>

      <Box gridArea={"rightBar"} className="bg-amber-400">
        Right bar
      </Box>

      <Box gridArea={"footer"}>Footer</Box>
    </Grid>
  )
}
