import { mockup } from "../data/data"

export default function handleSortData(value, setData) {

  const copyArray = [...mockup]
  switch (value) {
    case 1:
      setData(
        copyArray.sort(
          (a, b) => a.price - a.discount - (b.price - b.discount)
        )
      )
      break
    case 2:
      setData(
        copyArray.sort(
          (a, b) => b.price - b.discount - (a.price - a.discount)
        )
      )
      break
    case 3:
      setData(copyArray.sort((a, b) => a.name.localeCompare(b.name)))
      break
    case 4:
      setData(copyArray.sort((a, b) => b.name.localeCompare(a.name)))
      break
    default:
      break
  }
}