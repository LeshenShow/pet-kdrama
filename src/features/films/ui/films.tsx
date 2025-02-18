import type { FilmData } from "../../../app/data/data"
import { Film } from "./film/film"

type Props = { films: FilmData[] }
export function Films(props: Props) {
  const filmList = props.films.map((f) => <Film film={f} key={f.name} />)
  return <>{filmList}</>
}
