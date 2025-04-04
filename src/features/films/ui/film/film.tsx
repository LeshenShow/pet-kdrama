import { Flex } from "@radix-ui/themes"
import type { FilmData } from "../../../../app/data/data"
import { FilmImage } from "./film-image/film-image"
import { FilmRate } from "./film-rate/film-rate"
import { FilmDescription } from "./film - description/film-description"
import type { Theme } from "../../../../App"

export function Film(props: Props) {
  const param = props.theme.isMappingMode
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
      // align={"start"}
      // justify={"start"}
      className={`rounded-lg bg-gradient-to-br
        ${props.theme.isDarkMode ? "from-[#364153] to-[#52525c] " : "from-[#A78BFA] to-[#C084FC]"}`}
      // w-10/21
    >
      {/* IMAGE */}
      <Flex className="shadow-2xl " height={"100%"} flexShrink={"0"}>
        <FilmImage image={props.film.imageFilm} />
      </Flex>
      <Flex
        direction={param.directionChild}
        height={"100%"}
        // px={"1"}
        py={"0"}
        gap={"1"}
        width={"100%"}
        justify={"between"}
        className="hover:shadow-2xl"
      >
        {/* DESCRIPTION */}
        <FilmDescription
          actors={props.film.actors}
          description={props.film.description}
          genre={props.film.genre}
          name={props.film.name}
          year={props.film.year}
          theme={props.theme}
        />
        {/* RATE */}
        <FilmRate
          rateIMDB={props.film.rateIMDB}
          rateKinopoisk={props.film.rateKinopoisk}
          isWatchLater={props.film.isWatchLater}
          userRate={props.film.userRate}
          theme={props.theme}
          index={props.index}
        />
      </Flex>
    </Flex>
  )
}
type Props = {
  film: FilmData
  theme: Theme
  index?: number
}


// return (
//   <Flex
//     height={param.height}
//     width={param.width}
//     direction={param.direction}
//     p={"0"}
//     align={"center"}
//     justify={"between"}
//     className={`rounded-lg bg-gradient-to-br
//         ${props.theme.isDarkMode ? "from-[#364153] to-[#52525c] " : "from-[#A78BFA] to-[#C084FC]"}`}
//     // w-10/21
//   >
//     {/* IMAGE */}
//     <Flex className="shadow-2xl " height={"100%"} flexShrink={"0"}>
//       <FilmImage image={props.film.imageFilm} />
//     </Flex>

//     {/* DESCRIPTION */}
//     {props.theme.isMappingMode ? (
//       <Flex direction={"column"}>
//         <FilmName name={props.film.name} isMappingMode={props.theme.isMappingMode} />
//         <FilmRate
//           rateIMDB={props.film.rateIMDB}
//           rateKinopoisk={props.film.rateKinopoisk}
//           isWatchLater={props.film.isWatchLater}
//           userRate={props.film.userRate}
//           theme={props.theme}
//         />
//       </Flex>
//     ) : (
//       <Flex
//         direction={"column"}
//         align={"start"}
//         justify={"between"}
//         px={"1"}
//         py={"1"}
//         height={"100%"}
//         width={"100%"}
//         overflow={"hidden"}
//       >
//         <FilmDescription
//           actors={props.film.actors}
//           description={props.film.description}
//           genre={props.film.genre}
//           name={props.film.name}
//           year={props.film.year}
//           theme={props.theme}
//         />
//       </Flex>
//     )}

//     {/* RATE */}
//     <Flex
//       direction={"column"}
//       height={"100%"}
//       gap={{ initial: "1", sm: "1" }}
//       pb={{ initial: "1", sm: "1" }}
//       pr={{ initial: "1", sm: "1" }}
//       align={"center"}
//       justify={"end"}
//       className="rounded-r-lg "
//       flexShrink={"1"}
//     >
//       <FilmRate
//         rateIMDB={props.film.rateIMDB}
//         rateKinopoisk={props.film.rateKinopoisk}
//         isWatchLater={props.film.isWatchLater}
//         userRate={props.film.userRate}
//         theme={props.theme}
//       />
//     </Flex>
//   </Flex>
// )