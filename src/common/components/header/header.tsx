import { Avatar, Box, Flex, IconButton } from "@radix-ui/themes"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Switch } from "@radix-ui/themes"
import logoza from "../../images/logoza.ru.png"
export function Header() {
  return (
    <>
      <Box pr={"9"}>
        <img src={logoza} alt="" className={"h-12"} />
      </Box>

      <Flex align={"center"} justify={"center"} pl={"9"}>
        <Avatar
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
        <IconButton size="3" variant="soft">
          <MagnifyingGlassIcon width="22" height="22" />
        </IconButton>
        <Switch />
      </Flex>
    </>
  )
}
//const {} = props;
