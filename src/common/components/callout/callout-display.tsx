import { Flex } from "@radix-ui/themes"
import { InfoCircledIcon } from "@radix-ui/react-icons"
import { Callout } from "@radix-ui/themes"
import classNames from "classnames"

export function CalloutDisplay({ closing }: { closing: boolean }) {
  return (
    <Flex
      className={classNames(
        "fixed bottom-7 bg-light-2/100 rounded-xl transition-all duration-300",
        closing ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
      )}
    >
      <Callout.Root variant="soft">
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text color="gray">Ничего не нашлось</Callout.Text>
      </Callout.Root>
    </Flex>
  )
}
