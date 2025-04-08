import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Button, Dialog, Flex, IconButton, TextField, Tooltip } from "@radix-ui/themes"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { dataSettingsActions } from "../../../../../store/data-settings-reducer"
import { useAppSelector, dataSettingsSelector } from "../../../../hooks/useAppSelector"

export function DialogSearch() {
  const dispatch = useDispatch()
  const dataSettings = useAppSelector(dataSettingsSelector)
  const setSearchText = (text: string) => dispatch(dataSettingsActions.setSearchText(text))
  const [draftSearch, setDraftSearch] = useState<string>("")

  return (
    <Dialog.Root defaultOpen={false}>
      <Tooltip content={"Поиск"}>
        <Dialog.Trigger>
          <IconButton size="2" variant="solid" color={dataSettings.searchText.length > 0 ? "red" : "violet"}>
            <MagnifyingGlassIcon />
          </IconButton>
        </Dialog.Trigger>
      </Tooltip>
      <Dialog.Content className={`select-none `} size={"3"}>
        <Dialog.Title>Поиск</Dialog.Title>
        <Dialog.Description></Dialog.Description>

        <TextField.Root
          placeholder="Введите название дорамы"
          value={draftSearch}
          onChange={(e) => {
            setDraftSearch(e.target.value)
          }}
        >
          <TextField.Slot>
            <MagnifyingGlassIcon />
          </TextField.Slot>
        </TextField.Root>

        <Flex justify={"end"} align={"center"} mt={"4"} gap={"3"}>
          <Button variant="soft" color={"orange"} onClick={() => setDraftSearch("")}>
            Сбросить
          </Button>
          <Dialog.Close>
            <Button
              onClick={() => {
                setSearchText(draftSearch.toLowerCase())
              }}
              color="green"
            >
              Найти
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}

