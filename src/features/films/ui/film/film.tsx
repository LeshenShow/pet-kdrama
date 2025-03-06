import { Flex } from "@radix-ui/themes"
import type { FilmData } from "../../../../app/data/data"
import { FilmImage } from "./film-image/film-image"
import { FilmDescription } from "./film - description/film-description"
import { FilmRate } from "./film-rate/film-rate"

type Props = {
  film: FilmData
}
export function Film(props: Props) {
  const pParam = { sm: "2", md: "3", lg: "4" }
  return (
    <Flex
      height={{ initial: "100px", sm: "150px", md: "175px", lg: "200px" }}
      // height={"200px"}
      width={"100%"}
      p={pParam}
      align={"center"}
      justify={"between"}
      className="bg-gray-300 rounded-lg"
    >
      <Flex className="bg-blue-700" height={"100%"} flexShrink={"0"}>
        <FilmImage />
      </Flex>

      <Flex
        direction={"column"}
        align={"start"}
        justify={"between"}
        px={pParam}
        py={pParam}
        className="bg-pink-500"
        height={"100%"}
        width={"100%"}
        overflow={"hidden"}
      >
        <FilmDescription
          actors={props.film.actors}
          description={props.film.description}
          genre={props.film.genre}
          name={props.film.name}
          year={props.film.year}
        />
      </Flex>

      <Flex
        position={"relative"}
        direction={"column"}
        height={"100%"}
        width={"10%"}
        minWidth="max-content"
        gap={"1"}
        pl={pParam}
        pr={pParam}
        pb={"1"}
        align={{ sm: "start", md: "start", lg: "start" }}
        justify={"end"}
        className="bg-green-400 "
        flexShrink={"1"}
      >
        <FilmRate
          rateIMDB={props.film.rateIMDB}
          rateKinopoisk={props.film.rateKinopoisk}
          watchLater={props.film.watchLater}
          yourRate={props.film.yourRate}
        />
      </Flex>
    </Flex>
  )
}
