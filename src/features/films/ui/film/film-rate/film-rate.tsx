import { Avatar, Badge, Flex, Text } from "@radix-ui/themes"
import type { FilmData } from "../../../../../app/data/data"
type Props = Pick<FilmData, "rateIMDB" | "rateKinopoisk" | "yourRate" | "watchLater">
export function FilmRate(props: Props) {
  return (
    <>
      <Flex>
        <Avatar
          size="1"
          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
          radius="medium"
          fallback="Y"
        />
        <Badge color="orange" variant="outline" size="2">
          <Text>{props.rateKinopoisk}</Text>
        </Badge>
      </Flex>

      <Flex>
        <Avatar
          size="1"
          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
          radius="medium"
          fallback="I"
        />
        <Badge color="green" variant="outline" size="2">
          <Text>{props.rateIMDB}</Text>
        </Badge>
      </Flex>
      <Flex>
        <Avatar
          size="1"
          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
          radius="medium"
          fallback="I"
        />
        <Badge color="green" variant="outline" size="2">
          <Text>{props.yourRate}</Text>
        </Badge>
      </Flex>
      <Avatar
        size="1"
        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
        radius="medium"
        fallback="I"
      />
    </>
  )
}
