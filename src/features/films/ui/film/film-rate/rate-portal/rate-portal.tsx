import { StarIcon } from "@radix-ui/react-icons"
import { Flex, IconButton, Text } from "@radix-ui/themes"
import type { Theme } from "../../../../../../App"
import { useState } from "react"
import { DropdownMenu } from "radix-ui"
type Props = {
  onUserRate: (userRate: number) => void
  userRate: number
  theme: Theme
}
export function RatePortal(props: Props) {
  // const [hover, setHover] = useState<number | null>(null)
  const renderRatingButtons = () =>
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rate) => (
      <DropdownMenu.Item
        key={rate}
        // onMouseEnter={() => setHover(rate)}
        // onMouseLeave={() => setHover(null)}
        onClick={() => {
          props.onUserRate(rate)
        }}
        className="cursor-pointer"
      >
        <Flex
          justify="center"
          direction="column"
          align="center"
          className={`rounded-xl ${props.theme.isDarkMode ? "hover:bg-dark-2" : "hover:bg-light-2"}`}
        >
          {/* {rate <= (hover ?? props.userRate) ? (
            // {rate <= (hover ?? props.userRate) ? (
            // (hover ?? rate <= hover : rate <= props.userRate)
            <StarFilledIcon height="30px" width="30px" />
          ) : (
            <StarIcon height="30px" width="30px" />
          )} */}

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
          size={props.theme.isMappingMode ? "1" : "2"}
        >
          {props.userRate ? (
            <Flex className={`text-sm font-medium text-white " `}>{props.userRate}</Flex>
          ) : (
            <StarIcon />
          )}
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={0} alignOffset={-100}>
          <Flex
            justify={"center"}
            align={"center"}
            className={`p-2 rounded-xl  shadow-lg
              ${props.theme.isDarkMode ? "bg-dark/90 text-light" : "bg-light/90 text-dark"}`}
          >
            <Flex onClick={(event) => event.stopPropagation()}>{renderRatingButtons()}</Flex>
          </Flex>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
//     <Popover.Root>
//       <Popover.Trigger asChild>
//         <Button variant="soft">Оценить</Button>
//       </Popover.Trigger>
//       <Popover.Portal>
//         <Popover.Content
//           align="center"
//           sideOffset={5}
//           className={`p-4 rounded-lg shadow-lg ${
//             props.theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
//           }`}
//         >
//           <Flex gap="2">
//             {renderRatingButtons()}
//             <IconButton
//               onClick={() => {
//                 props.onUserRate(0)
//               }}
//               variant="soft"
//               color={props.theme === "light" ? "orange" : "blue"}
//               className="cursor-pointer"
//             >
//               <Cross1Icon height="30px" width="30px" />
//             </IconButton>
//           </Flex>
//         </Popover.Content>
//       </Popover.Portal>
//     </Popover.Root>
//   )
// }

// ;<Portal>
//   <Flex
//     position="fixed"
//     inset="0"
//     justify="center"
//     align="center"
//     className={`${props.theme === "dark" ? "bg-[rgba(46,16,101,0.7)]" : "bg-[rgba(215,213,224,0.7)]"}`}
//     onClick={() => props.onSetIsRateModalOpen(false)}
//   >
//     <Flex gap="2" onClick={(event) => event.stopPropagation()}>
//       {renderRatingButtons()}
//       <IconButton
//         onClick={() => {
//           props.onUserRate(0)
//           //   setHover(0)
//         }}
//         variant="soft"
//         color={props.theme === "light" ? "orange" : "blue"}
//         className="cursor-pointer"
//       >
//         <Cross1Icon height="30px" width="30px" />
//       </IconButton>
//     </Flex>
//   </Flex>
// </Portal>
