import { Flex, Text } from "@radix-ui/themes"

type Props = {
  isMappingMode: boolean
  name: string
}
export function FilmName(props: Props) {
  return (
    <Flex pl={{ sm: "2", md: "3", lg: "4" }} pt={{ sm: "1", md: "2", lg: "3" }} className="">
      <Text
        weight={"bold"}
        size={
          props.isMappingMode
            ? { initial: "1", sm: "2", md: "3", lg: "4" }
            : { initial: "3", sm: "3", md: "4", lg: "5" }
        }
        className="font-mono "
      >
        {props.name}
      </Text>
    </Flex>
  )
}
//const {} = props;
