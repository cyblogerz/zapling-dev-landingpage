import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry'
import 'src/styles/normalize.css'
import Navbar from 'src/components/Navbar'

const manrope = Manrope({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Zapling - Minimalist & Efficient Apps',
  description:
    'Zapling creates innovative, user-friendly, and efficient mobile apps designed to simplify your life. Discover our minimalist approach to powerful functionality.',
  keywords:
    'Zapling, Mobile Apps, Minimalist Design, User-Friendly Apps, Efficient Apps, App Development, Productivity Apps, Innovative Solutions',
}
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
