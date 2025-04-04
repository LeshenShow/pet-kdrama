import { Box, Flex, Separator, Text } from "@radix-ui/themes"
import type { FilmData } from "../../../../../app/data/data"
import type { Theme } from "../../../../../App"
type Props = Pick<FilmData, "name" | "description" | "year" | "genre" | "actors"> & {
  theme: Theme
}
const checkLength = (value: string) => {
  const check = value.length < 100 ? value.padEnd(150, " ") : value
  return check
}
export function FilmDescription(props: Props) {
  const description = checkLength(props.description)
  const genre = `${props.year}, ${props.genre.join(", ")}`
  const actor = props.actors.join(", ")
  const isMappingMode = props.theme.isMappingMode
    ? ({
        displayAddInfo: `hidden `,
        descriptionTextSize: { initial: "1", sm: "1", md: "1", lg: "1" },
        nameTextSize: { initial: "1", sm: "2", md: "3", lg: "3" },
        descriptionLineClamp: "line-clamp-3",
        namePadding: { sm: "1", md: "1", lg: "1" },
      } as const)
    : ({
        displayAddInfo: `text-ellipsis truncate `,
        descriptionTextSize: { initial: "1", sm: "2", md: "3", lg: "4" },
        nameTextSize: { initial: "3", sm: "3", md: "4", lg: "5" },
        descriptionLineClamp: "line-clamp-3",
        namePadding: { sm: "1", md: "2", lg: "3" },
      } as const)
  return (
    <Flex
      direction={"column"}
      className=""
      pr={"1"}
      // align={"start"}
      // justify={"between"}
      // height={"100%"}
      // width={"100%"}
      // overflow={"hidden"}
    >
      {/* <FilmName name={props.name} isMappingMode={props.theme.isMappingMode} /> */}
      <Flex pl={isMappingMode.namePadding} pt={isMappingMode.namePadding} className="">
        <Text
          weight={"bold"}
          size={isMappingMode.nameTextSize}
          className=" text-ellipsis truncate  line-clamp-1 text-pretty font-mono text-left"
        >
          {props.name}
        </Text>
      </Flex>
      <Box width={"100%"} mb={"auto"}>
        <Text
          align="left"
          size={isMappingMode.descriptionTextSize}
          className={`${isMappingMode.descriptionLineClamp} text-pretty`}
          // sm:text-base           text-xs
        >
          {description}
        </Text>
      </Box>
      <Separator size="4" color="gray" />
      <Box mt={"auto"}>
        <Text
          align="left"
          size={{ initial: "1", sm: "2", md: "2", lg: "3" }}
          className={`line-clamp-1 ${isMappingMode.displayAddInfo} text-pretty`}
        >
          {actor}
        </Text>
      </Box>
      <Box>
        <Text
          align="left"
          size={{ initial: "1", sm: "2", md: "2", lg: "3" }}
          className={`line-clamp-1 ${isMappingMode.displayAddInfo} text-pretty`}
        >
          {genre}
        </Text>
      </Box>
    </Flex>
  )
}
