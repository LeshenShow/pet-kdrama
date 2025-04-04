type Props = { image: string }
export function FilmImage(props: Props) {
  return (
    <>
      <img
        src={props.image}
        alt="A house in a forest"
        className="h-full object-cover rounded-l-lg aspect-[2/3]"
        // width={"100%"}

        // style={{
        //   borderRadius: "var(--radius-2)",
        // }}
      />
    </>
  )
}
