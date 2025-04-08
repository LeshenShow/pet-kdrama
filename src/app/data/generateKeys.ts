import { v4 } from "uuid"
import type { FilmData } from "./data"

export const generateKeys = (array: FilmData[]) => {
  const newData: { [key: string]: FilmData } = {}
  array.forEach((element) => {
    const key: string = v4()
    newData[key] = element
  })
  return newData
}
