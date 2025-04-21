import { Flex } from "@radix-ui/themes"
import { FilmImage } from "./film-image/film-image"
import { FilmRate } from "./film-rate/film-rate"
import { FilmDescription } from "./film - description/film-description"
import { memo, useMemo } from "react"
import { useAppSelector, uiSettingsSelector } from "../../../../common/hooks/useAppSelector"
import { Link } from "react-router-dom"
import { shallowEqual } from "react-redux"
import type { FilmData } from "../../../../app/data/data"
export type Props = {
  filmKey: string
  film: FilmData
}

export const Film = memo(
  function Film(props: Props) {
    console.log("render")
    const uiSettings = useAppSelector(uiSettingsSelector, shallowEqual)
    const param = useMemo(() => {
      return uiSettings.isMappingMode
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
    }, [uiSettings.isMappingMode])
    return (
      <Link
        to={`/film/${props.film.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
        className="contents"
        state={{ filmKey: props.filmKey }}
      >
        <Flex
          height={param.height}
          width={param.width}
          minWidth={"180px"}
          direction={param.directionParent}
          className={`relative rounded-lg bg-gradient-to-br gap-1
        ${uiSettings.isDarkMode ? "from-[#364153] to-[#52525c] " : "from-[#A78BFA] to-[#C084FC]"}`}
        >
          <FilmImage image={props.film.imageFilm} />
          <Flex direction={param.directionChild} justify={"between"} className=" h-full w-full gap-1  hover:shadow-2xl">
            <FilmDescription film={props.film} filmKey={props.filmKey} />
            <FilmRate film={props.film} filmKey={props.filmKey} />
          </Flex>
        </Flex>
      </Link>
    )
  },
  (prevProps, nextProps) => prevProps.filmKey === nextProps.filmKey
)
