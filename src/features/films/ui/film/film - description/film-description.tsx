import { Box, Flex, Separator, Text } from "@radix-ui/themes"
import type { FilmData } from "../../../../../app/data/data"
import { useAppSelector, uiSettingsSelector } from "../../../../../common/hooks/useAppSelector"
// type Props = Pick<FilmData, "name" | "description" | "year" | "genre" | "actors"> & { }
type Props = { film: FilmData; filmKey: string }
const checkLength = (value: string) => (value.length < 100 ? value.padEnd(150, " ") : value)

export function FilmDescription({ ...props }: Props) {
  const { description, genre, year, actors, name } = props.film
  const uiSettings = useAppSelector(uiSettingsSelector)
  const filmDescription = checkLength(description)
  const filmYearANdGenre = `${year}, ${genre.join(", ")}`
  const actor = actors.join(", ")
  const isMappingMode = uiSettings.isMappingMode
    ? ({
        displayAddInfo: `hidden `,
        descriptionTextSize: { initial: "1", sm: "1", md: "1", lg: "1" },
        nameTextSize: { initial: "1", sm: "2", md: "3", lg: "3" },
        descriptionLineClamp: `line-clamp-${"3"}`,
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
    <Flex direction={"column"} className="" pr={"1"}>
      <Flex pt={isMappingMode.namePadding} className="">
        <Text
          weight={"bold"}
          size={isMappingMode.nameTextSize}
          className=" text-ellipsis truncate  line-clamp-1 text-pretty font-mono text-left indent-3"
        >
          {name}
        </Text>
      </Flex>
      <Flex>
        <Text
          align="left"
          size={isMappingMode.descriptionTextSize}
          className={`${isMappingMode.descriptionLineClamp} text-pretty indent-1 line-clamp-1`}
        >
          {filmDescription}
        </Text>
      </Flex>
      <Separator size="4" color="gray" />
      <Box mt={"auto"} className="actor">
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
          {filmYearANdGenre}
        </Text>
      </Box>
    </Flex>
  )
}
