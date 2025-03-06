import { Box, Text } from "@radix-ui/themes"
import type { FilmData } from "../../../../../app/data/data"
import classNames from "classnames"
import { sizeCalc } from "../../../../../common/utils/sizeParams"
type Props = Pick<FilmData, "name" | "description" | "year" | "genre" | "actors">
const checkLength = (value: string) => {
  const check = value.length < 100 ? value.padEnd(150, " ") : value
  return check
}
export function ZFilmDescription(props: Props) {
  const description = checkLength(props.description)
  const className = classNames("line-clamp-2  text-ellipsis truncate md:text-base ")
  const genre = `${props.year}, ${props.genre.join(", ")}`
  const actor = props.actors.join(", ")

  return (
    <>
      <Box pl={sizeCalc("padding")}>
        <Text weight="medium" className="bg-amber-500 md:text-lg text-base">
          {props.name}
        </Text>
      </Box>
      <Box width={"100%"}>
        <Text align="left" wrap={"pretty"} className={className}>
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
