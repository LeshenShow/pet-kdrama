import { Flex, Grid } from "@radix-ui/themes"
import "./App.css"
import { dataSet } from "./app/data/data"
import { Films } from "./features/films/ui/films"
import { Header } from "./common/components/header/header"

export function App() {
  return (
    <Grid
      areas={`
        "header header header"
        "leftBar main rightBar"
        "footer footer footer"
      `}
      // columns=" 10% 1fr 5% "
      // rows="50px 1fr 20px"
      height="100%"
      style={{ gridTemplateColumns: "10% 1fr 5%" }}
      className="
    sm:[grid-template-columns:15%_1fr_10%]
    md:grid-cols-[25%_1fr_15%]
    lg:grid-cols-[30%_1fr_20%]
    bg-blue-100
   sm:bg-blue-300
   md:bg-blue-500
   lg:bg-blue-700"
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

      <Flex gridArea={"leftBar"} className="bg-red-500 md:bg-amber-500">
        Left bar
      </Flex>

      <Flex
        gridArea={"main"}
        wrap={"wrap"}
        gap={"1"}
        align={"center"}
        justify={"center"}
        className="pt-3 p-2"
        // height={"100%"}
        minHeight="100vh"
      >
        <Films films={dataSet} />
      </Flex>

      <Flex gridArea={"rightBar"} className="bg-amber-400">
        Right bar
      </Flex>

      <Flex gridArea={"footer"} justify="center" position={"sticky"} bottom={"0px"} className="bg-amber-400">
        Footer
      </Flex>
    </Grid>
  )
  // return (
  //   <Grid
  //     areas={`
  //       "header header header"
  //       "leftBar main rightBar"
  //       "footer footer footer"
  //     `}
  //     // columns=" 10% 1fr 5% "
  //     // rows="50px 1fr 20px"
  //     height="100%"
  //     style={{ gridTemplateColumns: "0% 1fr 5%" }}
  //     className="
  //   sm:[grid-template-columns:15%_1fr_10%]
  //   md:grid-cols-[30%_1fr_15%]
  //   lg:grid-cols-[100px_1fr_20%]
  //   bg-blue-100
  //  sm:bg-blue-300
  //  md:bg-blue-500
  //  lg:bg-blue-700"
  //   >
  //     {/* <Flex
  //       gridArea={"header"}
  //       overflow-ellipsis
  //       gap={"2"}
  //       align={"center"}
  //       justify={"center"}
  //       className="bg-amber-100"
  //       width={"100%"}
  //       position={"sticky"}
  //       top={"0px"}
  //     >
  //       <Header />
  //     </Flex> */}

  //     <Flex gridArea={"leftBar"} className="bg-red-500 md:bg-amber-500">
  //       Leftbar
  //     </Flex>

  //     <Flex
  //       gridArea={"main"}
  //       wrap={"wrap"}
  //       gap={"2"}
  //       align={"center"}
  //       justify={"center"}
  //       className="pt-3 p-2"
  //       // height={"100%"}
  //       minHeight="100vh"
  //     >
  //       <Films films={dataSet} />
  //     </Flex>

  //     <Flex gridArea={"rightBar"} className="bg-amber-400">
  //       Right bar
  //     </Flex>

  //     {/* <Box gridArea={"footer"} position={"sticky"} bottom={"0px"} className="bg-amber-400">
  //       Footer
  //     </Box> */}
  //   </Grid>
  // )
}
