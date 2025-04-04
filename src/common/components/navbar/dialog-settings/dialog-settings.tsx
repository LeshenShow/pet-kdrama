import { GearIcon } from "@radix-ui/react-icons"
import {
  Badge,
  Box,
  Button,
  Checkbox,
  Dialog,
  Flex,
  IconButton,
  Separator,
  Slider,
  Text,
  Tooltip,
} from "@radix-ui/themes"
import { useState } from "react"
import classNames from "classnames"
import { DialogGenres } from "./dialog-genres/dialog-genres"
import type { Theme } from "../../../../App"
type Props = {
  toggleChosenRangeRate: (chosenRangeRate: number[]) => void
  toggleIsWatchedVisible: (isWatchedVisible: boolean) => void
  toggleChosenRangeYears: (chosenRangeYears: number[]) => void
  toggleChosenGenres: (chosenGenres: string[]) => void
  theme: Theme
}
export function DialogSettings(props: Props) {
  const { rangeRate, chosenRangeRate, rangeYears, chosenRangeYears, chosenGenres } = props.theme
  const [localRate, setLocalRate] = useState<number[]>(chosenRangeRate)
  const [localYears, setLocalYears] = useState<number[]>(chosenRangeYears)
  const [localGenres, setLocalGenres] = useState<string[]>(chosenGenres)
  const [isChecked, setIsChecked] = useState<boolean>(!props.theme.isWatchedVisible)
  const toggleChecked = () => {
    setIsChecked((prev) => !prev)
  }

  const itemStyle = classNames(
    ` cursor-pointer rounded-md   `,
    props.theme.isDarkMode ? "hover:bg-light" : "hover:bg-dark"
  )
  return (
    <Dialog.Root defaultOpen={false}>
      <Tooltip content={"Настройки"}>
        <Dialog.Trigger>
          <IconButton>
            <GearIcon />
          </IconButton>
        </Dialog.Trigger>
      </Tooltip>
      <Dialog.Content className={`select-none `} size={"2"}>
        <Dialog.Title>Настройки</Dialog.Title>
        <Dialog.Description></Dialog.Description>

        <Flex direction={"column"} gap={"1"} className={``}>
          <Badge radius="medium" size={"1"} color="plum">
            <Flex
              direction={"row"}
              align={"center"}
              justify={"between"}
              gap={"1"}
              className={itemStyle}
              width={"100%"}
              p={"1"}
            >
              <Badge variant="solid" className="" size={"2"}>
                <Text as="label" size="1">
                  <Text mr={"2"}>Скрыть просмотренное</Text>
                  <Checkbox onCheckedChange={toggleChecked} checked={isChecked} color="gray" />
                </Text>
              </Badge>

              <Separator orientation="vertical" color="plum" />
              <DialogGenres
                setLocalGenres={setLocalGenres}
                genresArray={props.theme.listGenres}
                localGenres={localGenres}
              />
            </Flex>
          </Badge>
          <Separator orientation="horizontal" size={"4"} />

          <Badge radius="medium" size={"1"}>
            <Flex direction={"column"} align={"center"} gap={"1"} className={itemStyle} width={"100%"} p={"1"}>
              <Flex align={"center"} width={"100%"} gap={"1"}>
                <Text size={"1"} className="">
                  Диапазон рейтинга:
                </Text>
                <Text className="font-mono"> {` ${localRate[0].toFixed(1)}-${localRate[1].toFixed(1)}`}</Text>

                <Button
                  radius="large"
                  size={"1"}
                  ml={"auto"}
                  variant="solid"
                  onClick={() => {
                    setLocalRate([0, 10])
                  }}
                >
                  Сбросить
                </Button>
              </Flex>
              <Box width={"100%"} p={"1"}>
                <Slider
                  min={Math.floor(rangeRate[0])}
                  max={Math.ceil(rangeRate[1])}
                  step={0.1}
                  minStepsBetweenThumbs={1}
                  value={localRate}
                  onValueChange={setLocalRate}
                  radius="small"
                />
              </Box>
            </Flex>
          </Badge>
          <Separator orientation="horizontal" size={"4"} />

          <Badge radius="medium" size={"1"} color="tomato">
            <Flex direction={"column"} align={"center"} gap={"1"} className={itemStyle} width={"100%"} p={"1"}>
              <Flex align={"center"} width={"100%"} gap={"1"}>
                <Text size={"1"} color="tomato">
                  Диапазон годов производства:
                </Text>
                <Text className="font-mono"> {` ${localYears[0]}-${localYears[1]}`}</Text>

                <Button
                  radius="large"
                  size={"1"}
                  ml={"auto"}
                  variant="solid"
                  color="tomato"
                  onClick={() => {
                    setLocalYears(rangeYears)
                  }}
                >
                  Сбросить
                </Button>
              </Flex>
              <Box width={"100%"} p={"1"}>
                <Slider
                  color="tomato"
                  min={Math.floor(rangeYears[0])}
                  max={Math.ceil(rangeYears[1])}
                  step={1}
                  minStepsBetweenThumbs={1}
                  value={localYears}
                  onValueChange={setLocalYears}
                  radius="small"
                />
              </Box>
            </Flex>
          </Badge>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray" onClick={() => setLocalRate(chosenRangeRate)}>
              Отмена
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              color="green"
              onClick={() => {
                props.toggleChosenRangeRate(localRate)
                props.toggleChosenRangeYears(localYears)
                props.toggleIsWatchedVisible(!isChecked)
                props.toggleChosenGenres(localGenres)
              }}
            >
              Принять
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
//const {} = props;
