import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Paths } from 'src/constants'
import { getGlowingColor } from 'src/components/Navbar/helpers'

const useNavbar = () => {
  const [glowingColor, setGlowingColor] = useState('')
  const [animationDelay, setAnimationDelay] = useState(3.4)
  const [isMobile, setIsMobile] = useState(false)
  const pathName = usePathname()

  const getAnimationDelay = () =>
    setAnimationDelay(pathName === Paths.HOME ? 3.4 : 0.9)

  const getIsMobile = () => setIsMobile(window.innerWidth < 1050 ? true : false)

  useEffect(() => {
    getGlowingColor(pathName, setGlowingColor)
  }, [pathName])

  useEffect(() => {
    getAnimationDelay()
    getIsMobile()
  }, [])

  return { animationDelay, isMobile, glowingColor, pathName }
}

export default useNavbar
