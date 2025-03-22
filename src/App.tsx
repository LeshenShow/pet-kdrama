import { Flex, Theme } from "@radix-ui/themes"
import "./App.css"
import { dataSet } from "./app/data/data"
import { Header } from "./common/components/header/header"
import { useEffect, useState } from "react"
import { Film } from "./features/films/ui/film/film"
import classNames from "classnames"
import { Footer } from "./common/components/footer/footer"
import { ScrollToTop } from "./common/components/tooltip/tooltip"

export type Theme = {
  isDarkMode: boolean
  isMappingMode: boolean
}
export function App() {
  const [isPanelVisible, setIsPanelVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setIsPanelVisible(false)
      } else {
        setIsPanelVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  const [theme, setTheme] = useState<Theme>({ isDarkMode: false, isMappingMode: false })
  const toggleDarkMode = () => {
    setTheme((prev) => ({ ...prev, isDarkMode: !prev.isDarkMode }))
  }
  const toggleMappingMode = () => {
    setTheme((prev) => ({ ...prev, isMappingMode: !prev.isMappingMode }))
  }
  const panelBg = classNames(
    `${
      theme.isDarkMode
        ? "bg-dark shadow-light/20 inset-shadow-light/10"
        : "bg-light shadow-dark/20 inset-shadow-dark/10"
    }`,
    ""
  )
  return (
    <Theme accentColor="violet" radius="medium" appearance={theme.isDarkMode ? "light" : "dark"}>
      {/* <ThemePanel /> */}
      <ScrollToTop />
      <Flex
        direction={"column"}
        className={`bg-gradient-to-r
        ${theme.isDarkMode ? "  from-dark to-dark-2  text-light" : "from-light-2 to-light text-dark"}`}
      >
        <Flex
          gap="2"
          align="center"
          justify="between"
          className={`${panelBg}
          ${isPanelVisible ? "translate-y-0" : "-translate-y-full"}
          transition-transform duration-300 rounded-b-xl rounded-bl-xl  shadow-md `}
          top="0"
          position="sticky"
        >
          <Header toggleDarkMode={toggleDarkMode} theme={theme} />
        </Flex>
        <Flex
          direction={theme.isMappingMode ? "row" : "column"}
          wrap="wrap"
          gap="1"
          align="center"
          justify="between"
          minHeight="100vh"
          pt={"2"}
          px={{ initial: "1%", sm: "5%", md: "10%", lg: "15%" }}
          className="shadow-lg"
        >
          {dataSet.map((f) => (
            <Film film={f} key={f.name} theme={theme} />
          ))}
        </Flex>
        <Flex
          justify="center"
          align="center"
          position={"sticky"}
          bottom="0px"
          className={`${panelBg}
           ${isPanelVisible ? "translate-y-full" : "-translate-y-0"}
             transition-transform duration-300 rounded-tr-xl rounded-t-xl inset-shadow-2xs`}
          gap={"3"}
          pt="1"
          pb={"1"}
        >
          <Footer toggleMappingMode={toggleMappingMode} theme={theme} />
        </Flex>
      </Flex>
    </Theme>
  )

  // <Box position={"fixed"} top={"85%"} left={"85%"}>
  // <Tooltip content="Add to library">
  //   <IconButton radius="full" size={"3"}>
  //     <ArrowUpIcon />
  //   </IconButton>
  // </Tooltip>
  // </Box>
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

// ______________
// ;<Theme accentColor="violet" radius="medium" appearance={theme}>
//   {/* <ThemePanel /> */}

//   <Grid
//     areas={`
//     "header header header"
//     ". main ."
//     "footer footer footer"
//     `}
//     columns={{
//       initial: "0 auto 0 ",
//       xs: " 0 auto 0 ",
//       sm: " 10% 1fr 5% ",
//       md: " 15% 1fr 10% ",
//       lg: " 20% 1fr 15% ",
//       xl: " 25% 1fr 20% ",
//     }}
//     rows={{
//       initial: "auto auto 40px ",
//       xs: " auto auto 40px ",
//       sm: " auto auto 0px ",
//     }}
//     className={`bg-gradient-to-r
//     ${
//       theme === "dark"
//         ? "  from-violet-900 to-purple-950 text-zinc-300"
//         : "from-slate-100 to-zinc-300 text-zinc-900"
//     }`}
//   >
//     <ScrollToTop />
//     <Flex
//       gridArea={"main"}
//       wrap={"wrap"}
//       gap={"1"}
//       align={"center"}
//       justify={"center"}
//       className="pt-3 p-2 "
//       minHeight="100vh"
//     >
//       {dataSet.map((f) => (
//         <Film film={f} key={f.name} theme={theme} />
//       ))}
//     </Flex>

//     <Flex
//       gridArea={"header"}
//       overflow-ellipsis
//       gap={"2"}
//       align={"center"}
//       justify={"between"}
//       className={`${panelBg} rounded-b-xl rounded-bl-xl`}
//       height="100%"
//       width={"100%"}
//       top={"0px"}
//       position={"sticky"}
//     >
//       <Header toggleTheme={toggleTheme} theme={theme} />
//     </Flex>
//     <Flex
//       gridArea={"footer"}
//       justify="center"
//       position={"sticky"}
//       bottom="0"
//       className={`${panelBg} rounded-tr-xl rounded-t-xl `}
//       gap={"3"}
//     >
//       <Footer />
//     </Flex>
//     {/* RIGHT */}
//     {/* <Flex gridArea={"rightBar"} className=" overflow-hidden">
//       <Text>Right bar </Text>
//     </Flex> */}
//     {/* LEFT */}
//     {/* <Flex gridArea={"leftBar"} className=" overflow-hidden">
//       <Text>Left bar {theme}</Text>
//     </Flex> */}
//   </Grid>
// </Theme>
