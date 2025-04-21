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
import { useDispatch } from "react-redux"
import { dataSettingsActions } from "../../../../store/data-settings-reducer"
import { useAppSelector, uiSettingsSelector, dataSettingsSelector, authSelector } from "../../../hooks/useAppSelector"

export function DialogSettings() {
  const dispatch = useDispatch()
  const uiSettings = useAppSelector(uiSettingsSelector)
  const dataSettings = useAppSelector(dataSettingsSelector)
  const auth = useAppSelector(authSelector)
  const setChosenRangeRate = (range: number[]) => dispatch(dataSettingsActions.setChosenRangeRate(range))
  const setIsWatchedVisible = (flag: boolean) => dispatch(dataSettingsActions.setIsWatchedVisible(flag))
  const setChosenRangeYears = (range: number[]) => dispatch(dataSettingsActions.setChosenRangeYears(range))
  const setChosenGenres = (genres: string[]) => dispatch(dataSettingsActions.setChosenGenres(genres))

  const [localRate, setLocalRate] = useState<number[]>(dataSettings.chosenRangeRate)
  const [localYears, setLocalYears] = useState<number[]>(dataSettings.chosenRangeYears)
  const [localGenres, setLocalGenres] = useState<string[]>(dataSettings.chosenGenres)
  const [isChecked, setIsChecked] = useState<boolean>(!dataSettings.isWatchedVisible)
  const toggleChecked = () => {
    setIsChecked((prev) => !prev)
  }
  const itemStyle = classNames(
    ` cursor-pointer rounded-md   `,
    uiSettings.isDarkMode ? "hover:bg-light" : "hover:bg-dark"
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
              className={`${itemStyle}`}
              width={"100%"}
              p={"1"}
            >
              <Badge variant={auth.isAuthenticated ? "solid" : "outline"} className="" size={"2"}>
                <Text as="label" size="1">
                  <Text mr={"2"}>Скрыть просмотренное</Text>
                  <Checkbox
                    onCheckedChange={toggleChecked}
                    checked={isChecked}
                    color="gray"
                    disabled={auth.isAuthenticated ? false : true}
                  />
                </Text>
              </Badge>

              <Separator orientation="vertical" color="plum" />
              <DialogGenres
                setLocalGenres={setLocalGenres}
                genresArray={dataSettings.listGenres}
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
                  min={Math.floor(dataSettings.rangeRate[0])}
                  max={Math.ceil(dataSettings.rangeRate[1])}
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
                    setLocalYears(dataSettings.rangeYears)
                  }}
                >
                  Сбросить
                </Button>
              </Flex>
              <Box width={"100%"} p={"1"}>
                <Slider
                  color="tomato"
                  min={Math.floor(dataSettings.rangeYears[0])}
                  max={Math.ceil(dataSettings.rangeYears[1])}
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
            <Button variant="soft" color="gray" onClick={() => setLocalRate(dataSettings.chosenRangeRate)}>
              Отмена
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              color="green"
              onClick={() => {
                setChosenRangeRate(localRate)
                setChosenRangeYears(localYears)
                setIsWatchedVisible(!isChecked)
                setChosenGenres(localGenres)
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
