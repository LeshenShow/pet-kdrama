import { ArrowDownIcon } from "@radix-ui/react-icons"
import { IconButton, Tooltip } from "@radix-ui/themes"
import { DropdownMenu } from "radix-ui"
import classNames from "classnames"
import { useDispatch } from "react-redux"
import { type SortMode } from "../../../../store/ui-settings-reducer"
import { uiSettingsActions } from "../../../../store/ui-settings-reducer"
import { useAppSelector, uiSettingsSelector, authSelector } from "../../../hooks/useAppSelector"

export function DropDownSort() {
  const dispatch = useDispatch()
  const uiSettings = useAppSelector(uiSettingsSelector)
  const itemClass = classNames(`hover:bg-dark/50 rounded-lg p-1`)
  const setSortMode = (sortMode: SortMode) => dispatch(uiSettingsActions.setSortMode(sortMode))
  const onSetSortMode = (value: SortMode) => value !== uiSettings.sortMode && setSortMode(value)
  const auth = useAppSelector(authSelector)
  const sortOptions: { label: string; value: SortMode; isAuth?: boolean }[] = [
    { label: "По рейтингу IMDB", value: "imdb" },
    { label: "По рейтингу КиноПоиск", value: "kinopoisk" },
    { label: "По Вашему рейтингу", value: "user", isAuth: auth.isAuthenticated ? false : true },
    { label: "По умолчанию", value: "default" },
  ]
  const dropDownItem = sortOptions.map(({ label, value, isAuth }) => {
    const isDisabled = isAuth && !auth.isAuthenticated
    return (
      <DropdownMenu.Item
        key={value}
        onClick={() => !isDisabled && onSetSortMode(value)}
        disabled={isDisabled}
        className={classNames(
          itemClass,
          uiSettings.sortMode === value && "text-light bg-dark-2",
          isDisabled && "bg-gray-300 hover:bg-gray-300 text-gray-500"
        )}
        // color="gray"
      >
        {label}
        {/* {isActive && <CheckIcon className="ml-auto" />} */}
      </DropdownMenu.Item>
    )
  })
  return (
    <DropdownMenu.Root>
      <Tooltip content={"Сортировка"}>
        <DropdownMenu.Trigger asChild>
          <IconButton>
            <ArrowDownIcon />
          </IconButton>
        </DropdownMenu.Trigger>
      </Tooltip>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-light-2 text-dark cursor-pointer  p-1 rounded-lg flex flex-col ">
          {/* <DropdownMenu.Item
            onClick={() => setSortMode("imdb")}
            className={`${itemClass} ${uiSettings.sortMode === "imdb" && "text-light bg-dark-2"}`}
          >
            По рейтингу IMDB
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => setSortMode("kinopoisk")}
            className={`${itemClass} ${uiSettings.sortMode === "kinopoisk" && "text-light bg-dark-2"}`}
          >
            По рейтингу Кинопоиск
          </DropdownMenu.Item>

          <DropdownMenu.Item
            onClick={() => setSortMode("user")}
            className={`${itemClass} ${uiSettings.sortMode === "user" && "text-light bg-dark-2"}`}
          >
            По Вашему рейтингу
          </DropdownMenu.Item>

          <DropdownMenu.Item
            onClick={() => setSortMode("default")}
            className={`${itemClass} ${uiSettings.sortMode === "default" && "text-light bg-dark-2"}`}
          >
            По умолчанию
          </DropdownMenu.Item> */}
          {dropDownItem}
          <DropdownMenu.Arrow className="fill-light-2" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
