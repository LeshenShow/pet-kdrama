import { Box, Flex, Grid } from "@radix-ui/themes"
import "./App.css"
import { dataSet } from "./app/data/data"
import { Films } from "./features/films/ui/films"
import { Header } from "./common/components/header/header"

export function App() {
  return (
    <Grid
      areas={`
  " header header header "
  " leftBar main rightBar "
  " footer footer footer "
`}
      columns=" 10% 1fr 5% "
      rows="50px 1fr 20px"
      height="100%"
      className="bg-amber-900"
      // minWidth={"700px"}
    >
      <Flex
        gridArea={"header"}
        overflow-ellipsis
        gap={"2"}
        align={"center"}
        justify={"center"}
        className="bg-amber-100"
        width={"100%"}
        position={"sticky"}
        top={"0px"}
      >
        <Header />
      </Flex>

      <Box gridArea={"leftBar"} className="bg-amber-200 ">
        Left bar
      </Box>

      <Flex
        gridArea={"main"}
        wrap={"wrap"}
        gap={"2"}
        align={"center"}
        justify={"center"}
        className="films pt-3 p-2"
        // height={"100%"}
        minHeight="100vh"
      >
        <Films films={dataSet} />
      </Flex>

      <Box gridArea={"rightBar"} className="bg-amber-400">
        Right bar
      </Box>

      <Box gridArea={"footer"} position={"sticky"} bottom={"0px"} className="bg-amber-400">
        Footer
      </Box>
    </Grid>
  )
}
