import { useState } from 'react'
import type { SummaryProps } from 'src/components/Summary/types'
import { Text, SVGHolder } from 'src/components/Summary/styles'
import ChevronUp from 'src/assets/icons/chevron-up.svg'
import ChevronDown from 'src/assets/icons/chevron-down.svg'

const Summary = ({ summary }: SummaryProps) => {
  const [isShowSummary, setIsShowSummary] = useState(false)

  return (
    <>
      <Text isShowSummary={isShowSummary}>{summary}</Text>
      <SVGHolder onClick={() => setIsShowSummary(!isShowSummary)}>
        {isShowSummary ? <ChevronUp /> : <ChevronDown />}
      </SVGHolder>
    </>
  )
}

export default Summary
