import { Avatar, Box, Flex, IconButton } from "@radix-ui/themes"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import type { Theme } from "../../../App"
type Props = {
  toggleDarkMode: () => void
  theme: Theme
}
export function Header(props: Props) {
  return (
    <>
      <Box pr={"auto"} display={props.theme.isDarkMode ? "none" : "block"}>
        <img src={"logo-light.png"} alt="" className={"h-12 rounded-bl-xl"} />
      </Box>
      <Box pr={"auto"} display={!props.theme.isDarkMode ? "none" : "block"}>
        <img src={"logo-dark.png"} alt="" className={"h-12 rounded-bl-xl"} />
      </Box>

      <Flex align={"center"} justify={"center"} gap={"2"} pr={"4"}>
        <Avatar
          size={"2"}
          fallback="A"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        />
        <IconButton onClick={props.toggleDarkMode} variant="solid">
          {props.theme.isDarkMode ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </Flex>
    </>
  )
}
//const {} = props;
