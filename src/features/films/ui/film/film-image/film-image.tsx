import { Avatar, Flex } from "@radix-ui/themes"

export function FilmImage() {
  return (
    <>
      <Avatar
        size="8"
        src={
          "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
        }
        radius="small"
        fallback="T"
      />
    </>
  )
}
