import { Link, Navigate, useLocation, useParams } from "react-router-dom"
import { Box, Button, Flex, Text } from "@radix-ui/themes"
import { dataSelector, uiSettingsSelector, useAppSelector } from "../../hooks/useAppSelector"
import { NavBar } from "../navbar/navbar"
import classNames from "classnames"
import { FilmImage } from "../../../features/films/ui/film/film-image/film-image"
import { Path } from "../../../app/router/router"
import { getMovie } from "../../../app/data/getMovie"

export function FilmPage() {
  const uiSettings = useAppSelector(uiSettingsSelector)
  const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const state = location.state as { filmKey?: string; id?: string }
  // | undefined
  const films = useAppSelector(dataSelector)
  const film = state?.filmKey ? films[state.filmKey] : Object.values(films).find((film) => film.id === id)
  const panelBg = classNames(
    uiSettings.isDarkMode
      ? "bg-dark shadow-light/20 inset-shadow-light/10"
      : "bg-light shadow-dark/20 inset-shadow-dark/10"
  )

  if (!film) {
    return (
      <>
        <Text size="5" color="red">
          Фильм не найден
        </Text>
        <Navigate to={""}>{/* <Button>На главную</Button> */}</Navigate>
      </>
    )
  }

  return (
    <>
      <Flex
        className={` sticky top-0 rounded-b-xl rounded-bl-xl  shadow-md py-1 px-2 duration-300 transition-transform ${panelBg}`}
      >
        <NavBar />
      </Flex>

      <Flex
        px={{ initial: "1%", sm: "5%", md: "10%", lg: "15%" }}
        py="10%"
        direction="column"
        className={`bg-gradient-to-r ${
          uiSettings.isDarkMode ? "  from-dark to-dark-2  text-light" : "from-light-2 to-light text-dark"
        }`}
      >
        <Flex justify="center" width="100%">
          <Box className="w-full max-w-5xl aspect-video overflow-hidden rounded-t-xl shadow-lg">
            <video controls poster={film.imageFilm} className="w-full h-full object-cover">
              <source src={getMovie()} />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Flex>

        <Flex
          direction="column"
          className={`bg-gradient-to-r ${
            uiSettings.isDarkMode ? "from-light-2 to-light text-dark" : "  from-dark to-dark-2  text-light"
          } rounded-b-xl`}
          px="2"
          align={"start"}
        >
          <Text className="font-bold indent-3">{film.name}</Text>
          <Text className="indent-1" align="left">
            {film.description}
          </Text>
          <Text>{film.actors.join(", ")}</Text>
          <Text>{`${film.year} ${film.genre.join(", ")}`}</Text>
        </Flex>
      </Flex>
    </>
  )
}

// <Flex
//   px={{ initial: "1%", sm: "5%", md: "10%", lg: "15%" }}
//   py={"10%"}
//   direction={"column"}
//   gap={"1"}

//   // justify={"center"}
//   // align={"center"}
// >
//   <Flex justify={"center"} width={"100%"}>
//     <Flex
//       // justify={"center"}
//       // align={"center"}
//       // width={"100%"}
//       className="bg-blue-400  max-w-5xl aspect-video relative rounded-xl overflow-hidden shadow-lg"
//       // p={"4"}
//     >
//       <video controls className="absolute top-0 left-0  w-full h-full object-cover" poster={film.imageFilm}>
//         <source src={getMovie()} />
//         Error
//       </video>
//     </Flex>
//   </Flex>

//   <Flex direction={"column"} className="bg-amber-700" px={"2"}>
//     <Flex>
//       <Text className="font-bold indent-3">{film.name}</Text>
//     </Flex>
//     <Flex>
//       <Text className="indent-1 " align={"left"}>
//         {film.description}
//       </Text>
//     </Flex>
//     <Flex>
//       <Text>{film.actors.join(", ")}</Text>
//     </Flex>
//     <Flex>
//       <Text>{`${film.year} ${film.genre.join(", ")}`}</Text>
//     </Flex>
//   </Flex>
// </Flex>
