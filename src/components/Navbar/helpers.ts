import { Paths } from 'src/constants'
import { glowingColors } from 'src/styles/palette'

export const getGlowingColor = (
  location: string,
  setGlowingColor: (a: string) => void,
) => {
  if (location === Paths.HOME) return setGlowingColor(glowingColors.blue)

  if (location === Paths.PROJECTS) return setGlowingColor(glowingColors.orange)

  if (location === Paths.ABOUT) return setGlowingColor(glowingColors.red)

  if (location === Paths.CONTACT) return setGlowingColor(glowingColors.purple)
}
