'use client'
import Image from 'next/image'
import { Paths } from 'src/constants'
import { options } from './constants'
import RightArrow from 'src/assets/icons/arrow-right.svg'
import {
  StyledHome,
  Welcome,
  TopGreeting,
  Greeting,
  ImageHolder,
  Name,
  Position,
  NavigationSection,
  Option,
  ArrowContainer,
  Text,
  StyledLink,
} from './styles'

const Home = () => (
  <StyledHome>
    <Welcome>
      <TopGreeting>
       
        <ImageHolder>
          <Image
            src="/logo.png" // Replace with your company logo
            alt="Zapling Logo"
            width={100}
            height={100}
            priority
            unoptimized
          />
        </ImageHolder>
        <Name>Zapling Tech Solutions</Name>
      </TopGreeting>
      <Position>Crafting smart and efficient software</Position>
    </Welcome>
    <NavigationSection>
      {options.map(({ page, variant, text }, index) => (
        <Option
          href={page}
          key={page}
          index={index}
          target={page.includes('http') ? '_blank' : ''}
        >
          <div>
            <p>{variant}</p> {text}
          </div>
          <ArrowContainer>
            <RightArrow />
            <RightArrow />
          </ArrowContainer>
        </Option>
      ))}
    </NavigationSection>
    <Text>
      Let’s Create Magic Together -{' '}
      <StyledLink href={Paths.CONTACT}>Get in Touch</StyledLink>
    </Text>
  </StyledHome>
)

export default Home
