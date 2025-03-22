import { Avatar, Badge, Box, Flex, IconButton } from "@radix-ui/themes"
import type { FilmData } from "../../../../../app/data/data"
import { BookmarkIcon, BookmarkFilledIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import type { Theme } from "../../../../../App"
import { RatePortal } from "./rate-portal/rate-portal"
import { Direction } from "radix-ui"

type Props = Pick<FilmData, "rateIMDB" | "rateKinopoisk" | "userRate" | "isWatchLater"> & { theme: Theme }
export function FilmRate(props: Props) {
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
      <Flex gap={"1"} position={isMappingMode.position} top={"0"} left={"1"}>
        <IconButton
          onClick={onIsWatchLater}
          variant="solid"
          color={`${userFilmNotes.isWatchLater ? "green" : "violet"}`}
          className=""
          size={isMappingMode.bookAndRateSize}
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
        <Badge color="orange" variant="surface" size={isMappingMode.badgeSize} className="shadow-lg">
          <Avatar
            size="1"
            radius="medium"
            fallback="Y"
            src="https://kinopoisk-ru.clstorage.net/1mMD67145/87daaaGoC/ZuXiKv7sF4cI8aQ2pL7WkcSZmDdgUVVUUSFlcb7DVJHFXiSmIta5GHLlrhZSNUN1eOXcJpv9bT_c5IEpVlEfA2vkyiKn2BfaUeDpOuzPppWZtfVmHEQEbX0JeEW_uhmADY6EGpZqOfSaVD7uMiVPeXD1-SeejBA6lImYQM6hSsKCkf-j54AHP1QRSMbRIlopEa3Mo4BpKYnhken0UufIHFWmPDoOJmUYukSiFsIlRs3k5RWTYnjgbnnRRCCSUFpmImEX42cMGxu0qbheTeKG5U3lPJ98SWFRNRFRlF6H7FTZmoiSMsbdEOr4Uoam3XZV4Jmd0x4UiPr9KcxApkzaHqa983_HAAvPrLEkKskS_jkRJTgj9A0RLTGFPezec3zguVIISnq6FYyKgIJCRrkKzYB13c_mYHDygRU0ANIAngqaIXcn1zjLUyR5aBqtWoK9TTUgbzyFCRn9ccVE2nN4JH0qBCL6qtXoKsSqDlrlos2Y7Wm_FngI8nkFMMSmnNp6ch13T-_os-8gDSzWQaJKLUmRwLuw9en9_RFdPF5bhGTZTqja9hJBtIZMFpbKVZYpTNlpR8YU_Mb1_WRwWph-VnodY8tLlA9TtD2oauUCAsVtDdQHHMVxfSVRyQQ2u5iMFSrYjq72lfyCAA7CftU-2TTNUaf2kOxy-QnUIO5oesKmARv7W-QDD-jp_HpJ1q61XbW4F_R5WSXFXaHsVnPYIKmmqEY-JpnYhsA-cq7tcp0UBX17tmCUeiWJhNiavBJK_iFHC198l2vsnThGrabuGUFxXHdM3Z1hdSVthC4fkFiZokiaMk7tWDYYqmqGnUJFWAkRK-6MgGrpJeTEFlgaxl7t5_MjCPu3yJUsok2asi3VMWDbaP354cl5ISjaU2jUdeYIekqOLZiG8LJi0jk2IdAdZUtC6GgeNb349GLUhla6FRcfHwBXU-xlABo94kZJXe2YW8zZUQWtHRkMaktEKFFKPL7GomX4buTCsipNqgFYdQGfVtCIov3VzNiSnC7CDqH3l0doTx8INXCy9W5uRZkBpKO8AY35rd1paBIHROhhwoQaNrZVIH6olmr6PaIB6AmNJ3rsUM4Z9RhYUtDq3qLxb9OXWHeP0IW89jHOwgWVBTy_0OEB9a15OZzCbxiIlUYwXra6XVS6fL6a1mG-nQDJaftCeLAy0YVswC6ICuoyPbP3F7CfT0yFPF65ggItPXmwe-SZlZE5PeUYBhtoGM2-jC52Dm3oVvTO9ip1JtWM1eWj-mTgwqH5aKx-1BaaDrn7_1PYq0-QdQCW_QImqWn15OeUdV0VDd2VCLpX9KDdNgSKThJNrKaI3toGvTYdGB3dfw5gmHKpmXB8Nux6dlKB8__bhA_zuKmA6vlmauGdDVQP7FV15UVZZeC2N3Bw4fZkIqpeZViCkI5uSm0m9bxdBU_OEIxeIZUMXBJ0auaqPf9_d2gnxwCVPKo5KkbhlYVMp0TNGQUtUUUAOmughCnGnNr2hs0g9mCu4npp3uV4VdFDHmRQyoU5ADyCWIIOrq2za89IW9dcBWxC_R761UX5pA8I5VkhefEZZGqTJKT9lqhaKtoVrIrcQubG1dKlUGFpg1LQKJb9abBYJnQado5F61cjEDeTXI3gPtHKQkVNbdxTgAVluaG1KZTOi1CUTe6wKpKi0XCKoDLCRjU-dQz1ZQvWLGQeffEYkKocxsKK9Q_7C2z3n4DFZEqNqvqVOancjwyBIfGBfdEcJnN46GlGHD4yGpE4CoimQnK9Mhnw3cWDBoQIuhHh4NiqaH5i8mm7p2_8v8-0PXxWqQruNTE1GP_gjYlV5SGptBYPROShXqimBsaxKIJcip4KWcIRlH2BsxrwYDr18XSMOugiXm6Fa3_j7NeHnGHAUjGaquFpPdB_yCEdma392TxaDwwQJUogBqo2xWSmzKKWskVakTT9nZ86hIw2mW1oLOJwkgqOHUt7z-TfD1StuEp1DiLZVY2g__wBnfXJtaGk1tvQJBUSJJJ-dmGQ5vCW-n6h8nlsMSkjwqAIpl3xmPQOVF4WXnWn-8_A15sYLYhySQqiZV39tKts6aGVATnBDNrrYBBtMtwuks5lfKos-r6mVdbJWE1hU-Jk4F79uQCIjgDqChKhP1tbOLf3xJWUasVKLhU9FUSP9HWBkU3J4cjKN_jYwX5cqnai4ZSeQKo-ImGqhQD5JbPK6AxGNRFYOGbIEjKmoYvn_xg_f4AlkKIBvl6lncG0G3zdDQnFoUlosk9wgDX6xII2mr0w_oiiAtLxHg3QRfnDDiyA7qGdEByqCB5uUh0rh_PY21ccnWyycTbeTVH9yH9MaXWpoaG9LAYX1HDBbsC6hv5l_DZsIvJOJa5ZZBmlt_bo1K4NWdQ4ftD2GiKZn1v7zEtjUAGYbslW7h0NkRSrZHV55WEl7eTq68zMJXqk-kay2QhmmIIKsh0-eRQRCdPucHiesRlIqA7oZvLmKX8n78CPl6ilAPphNjplPUnwu-hxSW1h3VVA0lMkGJk2WFYmfq0Mfhim9v6pFoHQ2ZmDDhQgPmnpHPBykHrWcsGzE_c4I1vEiRhmQRJWKZ2Z0JcwEfGxAYXhSD6f1ETtXlQOAkpNoNoQcnZWdYaVkGX1h4rQLO7dpUQQekDuHnKFb3NjtNuXSGlEprnmegUNJeC3TGl9nbUhmTCSm8joVaIQmjYiJZTmFBKWCj2KJcSF3Vu--BCeGfWQzNaQWv5i_Uvf23ibYyBlHHIJzkqlBR1s2_wZgXnVlfmUqtsU8NlehH6qAqXgItTSssKxKpWEnQErvuAcfqF5_PSSeJIO_q27D0sIg_MQcSR6NY42TY1loBfAHSVh3bkVKGrLxHSZPlQugi6NKFrgNo7WZSoRiHlVV4IYYPp50dy0nkhu-nYJy-t7hL_nNLWM0nmiIr2hwWSXcAmV9W0NwRjCv4xMdV7g_nrKJXy2FJ4aBp2ejZSNJSPmUIBqeX38"
          />
          <Box width={"16px"}>{props.rateKinopoisk}</Box>
        </Badge>

        <Badge color="amber" variant="surface" size={isMappingMode.badgeSize} className="shadow-lg">
          <Avatar
            size="1"
            src="https://img.icons8.com/?size=100&id=ynZgIfwNyrxg&format=png&color=000000"
            radius="medium"
            fallback="I"
          />
          <Box width={"16px"}>{props.rateIMDB}</Box>
        </Badge>
      </Flex>
    </Flex>
  )
}

export type UserFilmNotes = {
  isWatchLater: boolean
  userRate: number
}
