export const sizeCalc = (variant: string = "padding") => {
  switch (variant) {
    case "regularText":
      return { sm: "1", md: "2", lg: "3" }
    case "headingText":
      return { sm: "2", md: "2", lg: "3" }
    case "padding":
      return { sm: "2", md: "3", lg: "4" }
    default:
      break
  }
}
