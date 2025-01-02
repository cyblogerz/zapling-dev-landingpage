'use client'

import Image from 'next/image'
import useInView from 'src/hooks/useInView'
import { front, back, tools } from './constants'
import {
  StyledAbout,
  Header,
  Greeting,
  AboutMe,
  Specifics,
  Projects,
  Experience,
  Number,
  SkillsHeader,
  SkillsSection,
  Skills,
} from './styles'

const About = () => {
  const visibleSections = useInView('section[id], h2[id], body div[id]')

  return (
    <StyledAbout>
      <Header>About Zapling</Header>
      <Image
        unoptimized
        src="https://play-lh.googleusercontent.com/ru9-EZfp-MQ8El3OAHPUM2JOKFTlLXN1wQB-pI05BouAshGrlPPVOKtixk8pc1DxesnS=w7680-h4320" // Replace with an image representing your company/team
        alt="Zapling Team"
        height={350}
        width={600}
      />
      <Greeting>Welcome to Zapling!</Greeting>
      <AboutMe>
        <p>
          At Zapling, we specialize in crafting simple, efficient, and scalable
          tech solutions that empower businesses and individuals to achieve
          their goals. Our passion for innovation drives us to deliver
          high-quality products tailored to meet our clients' unique needs.
        </p>
        <p>
          Collaboration is at the heart of everything we do. We work closely
          with our clients and team members to bring ideas to life, ensuring
          every project reflects our dedication to excellence.
        </p>
        <p>
          With a focus on modern technologies and user-centric design, we’ve had
          the privilege of creating impactful solutions across a variety of
          industries. From app development to scalable backend systems, we’re
          here to transform your vision into reality.
        </p>
        <p>
          Whether you're here to explore our portfolio, learn about our
          services, or connect with us, we’re thrilled you stopped by. At
          Zapling, innovation meets simplicity, and we’re excited to share our
          journey with you.
        </p>
      </AboutMe>
      <Specifics id="specifics">
        <Projects isVisible={visibleSections?.specifics}>
          <Number>50+</Number> <p>Projects Delivered</p>
        </Projects>
        <Experience isVisible={visibleSections?.specifics}>
          <Number>5+</Number> <p>Years of Expertise</p>
        </Experience>
      </Specifics>
      <SkillsHeader id="skills" isVisible={visibleSections?.skills}>
        Our Expertise
      </SkillsHeader>
      <SkillsSection>
        <Skills id="front" isVisible={visibleSections?.front}>
          {front.map(({ id, picture, name }) => (
            <div key={id}>
              {picture} {name}
            </div>
          ))}
        </Skills>
        <Skills id="back" isVisible={visibleSections?.back}>
          {back.map(({ id, picture, name }) => (
            <div key={id}>
              {picture} {name}
            </div>
          ))}
        </Skills>
        <Skills id="tools" isVisible={visibleSections?.tools}>
          {tools.map(({ id, picture, name }) => (
            <div key={id}>
              {picture} {name}
            </div>
          ))}
        </Skills>
      </SkillsSection>
    </StyledAbout>
  )
}

export default About