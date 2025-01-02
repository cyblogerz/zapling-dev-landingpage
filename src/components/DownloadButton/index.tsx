import type { DownloadButtonProps } from 'src/components/DownloadButton/types'
import {
  DownloadButtonWrapper,
  Info,
  Platform,
  Text,
} from 'src/components/DownloadButton/styles'

const DownloadButton = ({
  icon,
  text,
  platform,
  href,
  isVisible,
}: DownloadButtonProps) => (
  <DownloadButtonWrapper href={href} target="blank" isVisible={isVisible}>
    {icon}
    <Info>
      <Text>{text}</Text>
      <Platform>{platform}</Platform>
    </Info>
  </DownloadButtonWrapper>
)

export default DownloadButton
