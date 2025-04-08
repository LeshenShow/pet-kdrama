import { StarIcon } from "@radix-ui/react-icons"
import { Flex, IconButton, Text } from "@radix-ui/themes"
import { DropdownMenu } from "radix-ui"
import { useAppSelector, uiSettingsSelector } from "../../../../../../common/hooks/useAppSelector"
type Props = {
  onUserRate: (userRate: number) => void
  userRate: number
}
export function RatePortal(props: Props) {
  const uiSettings = useAppSelector(uiSettingsSelector)
  const renderRatingButtons = () =>
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rate) => (
      <DropdownMenu.Item
        key={rate}
        onClick={() => {
          props.onUserRate(rate)
        }}
        className="cursor-pointer"
      >
        <Flex
          justify="center"
          direction="column"
          align="center"
          className={`rounded-xl ${uiSettings.isDarkMode ? "hover:bg-dark-2" : "hover:bg-light-2"}`}
        >
          <StarIcon width={"30px"} height={"30px"} />
          <Text>{rate}</Text>
        </Flex>
      </DropdownMenu.Item>
    ))

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="" asChild>
        <IconButton
          color={`${props.userRate ? "green" : "violet"}`}
          variant="solid"
          className=""
          size={uiSettings.isMappingMode ? "1" : "2"}
        >
          {props.userRate ? (
            <Flex className={`text-sm font-medium text-white " `}>{props.userRate}</Flex>
          ) : (
            <StarIcon />
          )}
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="center" sideOffset={0} alignOffset={200}>
          <Flex
            justify={"center"}
            align={"center"}
            className={`p-2 rounded-xl  shadow-lg
              ${uiSettings.isDarkMode ? "bg-dark/90 text-light" : "bg-light/90 text-dark"}`}
          >
            <Flex onClick={(event) => event.stopPropagation()}>{renderRatingButtons()}</Flex>
          </Flex>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
