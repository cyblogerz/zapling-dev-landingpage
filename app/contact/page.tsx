'use client'

import Image from 'next/image'
import { linkOptions } from './constants'
import {
  StyledContact,
  Intro,
  Header,
  Pitch,
  Card,
  ImageHolder,
  Name,
  ContactsWrapper,
  Option,
} from './styles'

const Contact = () => (
  <StyledContact>
    <Intro>
      <Header>Let’s Connect</Header>
      <Pitch>
        <p>
          At Zapling, we’re always eager to collaborate on innovative projects
          and turn ideas into reality.
        </p>
        <p>Looking for a partner to bring your vision to life? Let’s chat!</p>
      </Pitch>
    </Intro>
    <Card>
      <ImageHolder>
        <Image
          src="/logo.png" // Replace with your company logo
          width={100}
          height={100}
          alt="Zapling Logo"
          unoptimized
        />
      </ImageHolder>
      <Name>
        <p>Zapling</p>
        <p>Simple & Efficient Tech Solutions</p>
      </Name>
      <ContactsWrapper>
        {linkOptions.map(({ id, link, text }) => (
          <Option key={id} href={link} target="_blank">
            {text}
          </Option>
        ))}
      </ContactsWrapper>
    </Card>
  </StyledContact>
)

export default Contact
