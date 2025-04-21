import { Avatar, Badge, Box, Flex } from "@radix-ui/themes"
import type { FilmData } from "../../../../../app/data/data"
import { BookmarkIcon, BookmarkFilledIcon } from "@radix-ui/react-icons"
import { RatePortal } from "./rate-portal/rate-portal"
import { useAppSelector, uiSettingsSelector, authSelector } from "../../../../../common/hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { dataActions } from "../../../../../store/data-reducer"
import { IconTooltipButton } from "../../icon-button/icon-button"
type Props = { film: FilmData; filmKey: string }
export function FilmRate(props: Props) {
  const uiSettings = useAppSelector(uiSettingsSelector)
  const dispatch = useDispatch()
  const auth = useAppSelector(authSelector)
  const isMappingMode = uiSettings.isMappingMode
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
  // const [userFilmNotes, setUserFilmNotes] = useState<UserFilmNotes>({
  //   isWatchLater: props.isWatchLater,
  //   userRate: props.userRate,
  // })
  const onIsWatchLater = () => dispatch(dataActions.toggleIsWatchLater({ id: props.filmKey }))
  const onUserRate = (userRate: number) => dispatch(dataActions.setUserRate({ userRate, id: props.filmKey }))
  return (
    <Flex
      direction={isMappingMode.direction}
      gap={{ initial: "1", sm: "1" }}
      p={{ initial: "1", sm: "1" }}
      className="rounded-r-lg "
    >
      <Flex gap={"1"} position={isMappingMode.position} top={"0"} left={"1"}>
        {/* <IconButton
          content="В закладки"
          onClick={onIsWatchLater}
          variant="solid"
          color={`${props.film.isWatchLater ? "green" : "violet"}`}
          className=""
          size={isMappingMode.bookAndRateSize}
          radius="medium"
        >
          {props.film.isWatchLater ? <BookmarkFilledIcon /> : <BookmarkIcon />}
        </IconButton> */}
        <IconTooltipButton
          content={"В закладки"}
          onClick={onIsWatchLater}
          stopPropagation
          iconToggle={{
            on: <BookmarkFilledIcon />,
            off: <BookmarkIcon />,
          }}
          color={`${props.film.isWatchLater ? "green" : "violet"}`}
          size={isMappingMode.bookAndRateSize}
          disabled={!auth.isAuthenticated}
        />
        {/* <IconButton onClick={handleOnClick}>
          <BookmarkFilledIcon />
        </IconButton> */}
        <RatePortal onUserRate={onUserRate} userRate={props.film.userRate} disabled={!auth.isAuthenticated} />
      </Flex>

      <Flex
        direction={isMappingMode.direction}
        mt={"auto"}
        position={isMappingMode.position}
        bottom={"0"}
        right={"1"}
        gap={"1"}
      >
        <Badge color="violet" variant="solid" size={isMappingMode.badgeSize} className="shadow-lg">
          <Avatar size="1" radius="medium" fallback="Y" src="kinopoisk-logo.png" />
          <Box width={"16px"}>{props.film.rateKinopoisk.toFixed(1)}</Box>
        </Badge>

        <Badge color="plum" variant="solid" size={isMappingMode.badgeSize} className="shadow-lg">
          <Avatar size="1" src="imdb-logo.png" radius="medium" fallback="I" />
          <Box width={"16px"}>{props.film.rateIMDB.toFixed(1)}</Box>
        </Badge>
      </Flex>
    </Flex>
  )
}

// export type UserFilmNotes = {
//   isWatchLater: boolean
//   userRate: number
// }

/* {index <= 5 ? (
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
      )} */
