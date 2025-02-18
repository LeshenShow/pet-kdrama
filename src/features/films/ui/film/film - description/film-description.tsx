import { Flex, Text } from "@radix-ui/themes"
import type { FilmData } from "../../../../../app/data/data"
type Props = Pick<FilmData, "name" | "description" | "year" | "genre" | "actors">
const checkLength = (value: string) => {
  const check = value.length < 100 ? value.padEnd(150, "V") : value
  return check
}
export function FilmDescription(props: Props) {
  const description = checkLength(props.description)
  return (
    <>
      <Text className="text-lg font-bold">{props.name}</Text>

      <Text align="left" wrap={"wrap"} className="line-clamp-2 overflow-hidden text-ellipsis">
        {description}
      </Text>

      <Text>
        {props.year} {props.genre}
      </Text>

      <Text>{props.actors}</Text>
    </>
  )
}
