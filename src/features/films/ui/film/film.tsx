import { Flex } from "@radix-ui/themes"
import { FilmImage } from "./film-image/film-image"
import { FilmRate } from "./film-rate/film-rate"
import { FilmDescription } from "./film - description/film-description"
import { memo } from "react"
import { useAppSelector, uiSettingsSelector } from "../../../../common/hooks/useAppSelector"
import type { FilmData } from "../../../../app/data/data"
export type Props = {
  film: FilmData
  filmKey: string
}
export const Film = memo(function Film(props: Props) {
  console.log("render")
  const uiSettings = useAppSelector(uiSettingsSelector)

  const param = uiSettings.isMappingMode
    ? ({
        directionParent: "row",
        directionChild: "column",
        height: { initial: "100px", sm: "150px", md: "225px", lg: "225px" },
        width: { initial: "49%", sm: "32%" },
      } as const)
    : ({
        directionParent: "row",
        directionChild: "row",
        height: { initial: "125px", sm: "150px", md: "175px", lg: "175px" },
        width: "100%",
        className: `a `,
      } as const)
  return (
    <Flex
      position={"relative"}
      height={param.height}
      width={param.width}
      minWidth={"180px"}
      direction={param.directionParent}
      gap={"1"}
      p={"0"}
      className={`rounded-lg bg-gradient-to-br
        ${uiSettings.isDarkMode ? "from-[#364153] to-[#52525c] " : "from-[#A78BFA] to-[#C084FC]"}`}
    >
      {/* IMAGE */}
      <Flex className="shadow-2xl " height={"100%"} flexShrink={"0"}>
        <FilmImage image={props.film.imageFilm} />
      </Flex>
      <Flex
        direction={param.directionChild}
        height={"100%"}
        py={"0"}
        gap={"1"}
        width={"100%"}
        justify={"between"}
        className="hover:shadow-2xl"
      >
        <FilmDescription {...props} />
        <FilmRate {...props} />
      </Flex>
    </Flex>
  )
})
