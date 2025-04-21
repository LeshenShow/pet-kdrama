import { Flex } from "@radix-ui/themes"

type Props = {
  image: string
  alt?: string
}
export function FilmImage(props: Props) {
  return (
    <Flex className="shadow-2xl " height={"100%"} flexShrink={"0"}>
      <img src={props.image} alt="A house in a forest" className="h-full object-cover rounded-l-lg aspect-[2/3]" />
    </Flex>
  )
}
