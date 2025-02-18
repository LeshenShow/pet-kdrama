import { Flex, Grid } from "@radix-ui/themes"
import type { FilmData } from "../../../../app/data/data"
import { FilmImage } from "./film-image/film-image"
import { FilmDescription } from "./film - description/film-description"
import { FilmRate } from "./film-rate/film-rate"

type Props = {
  film: FilmData
}
export function Film(props: Props) {
  return (
    <Flex
      height={"200px"}
      width={"100%"}
      align={"center"}
      justify={"between"}
      p={"4"}
      className="bg-gray-300 rounded-lg "
    >
      <Flex className="bg-blue-500" height={"100%"} align={"center"}>
        <FilmImage />
      </Flex>
      <Flex
        direction={"column"}
        align={"start"}
        gap={"1"}
        pl={"4"}
        className="bg-blue-400"
        height={"100%"}
        width={"100%"}
        // className="p-4 w-full min-h-[180px] max-w-lg bg-gray-200 rounded-lg shadow-md"
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
        direction={"column"}
        gap={"2"}
        pl={"2"}
        className="bg-blue-200"
        height={"100%"}
        align={"center"}
        justify={"end"}
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
