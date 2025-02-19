import { Box, Heading, Text } from "@radix-ui/themes"
import type { FilmData } from "../../../../../app/data/data"
import classNames from "classnames"
import { sizeCalc } from "../../../../../common/utils/sizeParams"
type Props = Pick<FilmData, "name" | "description" | "year" | "genre" | "actors">
const checkLength = (value: string) => {
  const check = value.length < 100 ? value.padEnd(150, " ") : value
  return check
}
export function FilmDescription(props: Props) {
  const description = checkLength(props.description)
  const className = classNames("line-clamp-2  text-ellipsis truncate")
  // const genre = props.genre.map((g) => (
  //   <Text size="2" className=" ">
  //     {g}
  //   </Text>
  // ))
  const genre = `${props.year}, ${props.genre.join(", ")}`
  const actor = props.actors.join(", ")

  return (
    <>
      <Box pl={sizeCalc("padding")}>
        <Heading weight="medium" className="">
          {props.name}
        </Heading>
      </Box>
      <Box width={"100%"}>
        <Text align="left" wrap={"pretty"} size="2" className={className}>
          {description}
        </Text>
      </Box>

      <Box>
        <Text size="2" align="left" wrap={"pretty"} className={className}>
          {genre}
        </Text>
      </Box>
      <Box>
        <Text size="2" align="left" wrap={"pretty"} className={className}>
          {actor}
        </Text>
      </Box>
    </>
  )
}
