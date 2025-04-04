import { Avatar, Badge, Box, Flex, IconButton, Text } from "@radix-ui/themes"
import type { FilmData } from "../../../../../app/data/data"
import { BookmarkIcon, BookmarkFilledIcon, HeartFilledIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import type { Theme } from "../../../../../App"
import { RatePortal } from "./rate-portal/rate-portal"
type Props = Pick<FilmData, "rateIMDB" | "rateKinopoisk" | "userRate" | "isWatchLater"> & {
  theme: Theme
  index?: number
}
export function FilmRate(props: Props) {
  const index = (props.index ?? 0) + 1
  const isMappingMode = props.theme.isMappingMode
    ? ({
        direction: "row",
        badgeSize: "1",
        bookAndRateSize: "1",
        paddingRight: "0",
        position: "absolute",
      } as const)
    : ({
        direction: "column",
        badgeSize: "3",
        paddingRight: "1",
        bookAndRateSize: "2",
      } as const)
  const [userFilmNotes, setUserFilmNotes] = useState<UserFilmNotes>({
    isWatchLater: props.isWatchLater,
    userRate: props.userRate,
  })
  const onIsWatchLater = () => setUserFilmNotes((prev) => ({ ...prev, isWatchLater: !prev.isWatchLater }))
  const onUserRate = (userRate: number) => setUserFilmNotes((prev) => ({ ...prev, userRate }))
  return (
    <Flex
      direction={isMappingMode.direction}
      // wrap={"wrap"}
      // height={"100%"}
      gap={{ initial: "1", sm: "1" }}
      p={{ initial: "1", sm: "1" }}
      // pr={isMappingMode.paddingRight}
      // align={"center"}
      // justify={"end"}
      className="rounded-r-lg "
      // flexShrink={"0"}
    >
      {index <= 5 ? (
        <Flex position={"absolute"} bottom={"1"} left={"1"} width={"22px"}>
          <Badge
            size={"1"}
            color="blue"
            variant="surface"
            radius={"full"}
            highContrast
            className="w-full items-center justify-center"
          >
            <Text>{index}</Text>
          </Badge>
        </Flex>
      ) : (
        ""
      )}

      <Flex gap={"1"} position={isMappingMode.position} top={"0"} left={"1"}>
        <IconButton
          onClick={onIsWatchLater}
          variant="solid"
          color={`${userFilmNotes.isWatchLater ? "green" : "violet"}`}
          className=""
          size={isMappingMode.bookAndRateSize}
          radius="medium"
        >
          {userFilmNotes.isWatchLater ? <BookmarkFilledIcon /> : <BookmarkIcon />}
        </IconButton>

        <RatePortal onUserRate={onUserRate} theme={props.theme} userRate={userFilmNotes.userRate} />
      </Flex>

      <Flex
        direction={isMappingMode.direction}
        // ml={"auto"}
        // mr={"1"}
        mt={"auto"}
        position={isMappingMode.position}
        bottom={"0"}
        right={"1"}
        gap={"1"}
        // wrap={"wrap"}
        // justify={"end"}
      >
        <Badge color="violet" variant="solid" size={isMappingMode.badgeSize} className="shadow-lg">
          <Avatar size="1" radius="medium" fallback="Y" src="kinopoisk-logo.png" />
          <Box width={"16px"}>{props.rateKinopoisk.toFixed(1)}</Box>
        </Badge>

        <Badge color="plum" variant="solid" size={isMappingMode.badgeSize} className="shadow-lg">
          <Avatar size="1" src="imdb-logo.png" radius="medium" fallback="I" />
          <Box width={"16px"}>{props.rateIMDB.toFixed(1)}</Box>
        </Badge>
      </Flex>
    </Flex>
  )
}

export type UserFilmNotes = {
  isWatchLater: boolean
  userRate: number
}
