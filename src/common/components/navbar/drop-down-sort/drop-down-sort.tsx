import { ArrowDownIcon } from "@radix-ui/react-icons"
import { IconButton, Tooltip } from "@radix-ui/themes"
import { DropdownMenu } from "radix-ui"
import classNames from "classnames"
import type { SortMode, Theme } from "../../../../App"

type Props = {
  toggleSortMode: (sortMode: SortMode) => void
  theme: Theme
}
export function DropDownSort(props: Props) {
  const itemClass = classNames(`hover:bg-dark/50 rounded-lg p-1`)

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
          <DropdownMenu.Item
            onClick={() => props.toggleSortMode("imdb")}
            className={`${itemClass} ${props.theme.sortMode === "imdb" && "text-light bg-dark-2"}`}
          >
            {/* <img alt="" src="kinopoisk-logo.png" className="h-[22px]" /> */}
            По рейтингу IMDB
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => props.toggleSortMode("kinopoisk")}
            className={`${itemClass} ${props.theme.sortMode === "kinopoisk" && "text-light bg-dark-2"}`}
          >
            По рейтингу Кинопоиск
          </DropdownMenu.Item>

          <DropdownMenu.Item
            onClick={() => props.toggleSortMode("user")}
            className={`${itemClass} ${props.theme.sortMode === "user" && "text-light bg-dark-2"}`}
          >
            По Вашему рейтингу
          </DropdownMenu.Item>

          <DropdownMenu.Item
            onClick={() => props.toggleSortMode("default")}
            className={`${itemClass} ${props.theme.sortMode === "default" && "text-light bg-dark-2"}`}
          >
            По умолчанию
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-light-2 " />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
//const {} = props;
