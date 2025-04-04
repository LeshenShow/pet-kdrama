import { Button, Dialog, Flex, Text, Tooltip } from "@radix-ui/themes"
import { useState } from "react"

type Props = {
  setLocalGenres: (genres: string[]) => void
  genresArray: string[]
  localGenres: string[]
}
export function DialogGenres(props: Props) {
  const [selectedGenres, setSelectedGenres] = useState<string[]>(props.localGenres)
  const toggleGenres = (genre: string) => {
    setSelectedGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]))
  }
  const renderGenres = props.genresArray.map((g) => (
    <Button
      size={"2"}
      variant={selectedGenres.includes(g) ? "solid" : "soft"}
      key={g}
      onClick={() => {
        toggleGenres(g)
      }}
    >
      {g}
    </Button>
  ))
  return (
    <Dialog.Root defaultOpen={false}>
      <Tooltip content={"Выбор жанров"}>
        <Dialog.Trigger>
          <Button size={"1"} color="plum">
            <Text>Выбор жанров</Text>
          </Button>
        </Dialog.Trigger>
      </Tooltip>
      <Dialog.Content className={`select-none `} size={"3"}>
        <Dialog.Title>Жанры</Dialog.Title>
        <Dialog.Description></Dialog.Description>
        <Flex wrap={"wrap"} gap={"1"} justify={"center"}>
          {renderGenres}
        </Flex>
        <Flex justify={"end"} align={"center"} mt={"4"} gap={"3"}>
          <Button variant="soft" color={"orange"} onClick={() => setSelectedGenres([])}>
            Сбросить
          </Button>
          <Dialog.Close>
            <Button
              onClick={() => {
                props.setLocalGenres(selectedGenres)
              }}
              color="green"
            >
              Подтвердить
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
//const {} = props;
