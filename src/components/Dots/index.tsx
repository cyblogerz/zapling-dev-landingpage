import { DotsWrapper, Dot } from 'src/components/Dots/styles'
import type { DotsProps } from 'src/components/Dots/types'

const Dots = ({ isVisible }: DotsProps) => (
  <DotsWrapper isVisible={isVisible}>
    <Dot />
    <Dot />
    <Dot />
  </DotsWrapper>
)

export default Dots
