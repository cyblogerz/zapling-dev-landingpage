import { Paths } from 'src/constants'
import Bolt from 'src/assets/icons/bolt.svg'
import FBolt from 'src/assets/icons/bolt-filled.svg'
import Pen from 'src/assets/icons/pen.svg'
import Explore from 'src/assets/icons/explore.svg'
import FExplore from 'src/assets/icons/explore-filled.svg'
import Person from 'src/assets/icons/person.svg'
import FPerson from 'src/assets/icons/person-filled.svg'
import Mail from 'src/assets/icons/mail.svg'
import FMail from 'src/assets/icons/mail-filled.svg'

export const pages = [
  {
    path: Paths.HOME,
    ariaLabel: 'Home',
    filledPicture: <FExplore />,
    plainPicture: <Explore />,
  },
  {
    path: Paths.PROJECTS,
    ariaLabel: 'Projects',
    filledPicture: <FBolt />,
    plainPicture: <Bolt />,
  },
  {
    path: Paths.BLOG,
    ariaLabel: 'Blog',
    filledPicture: <Pen />,
    plainPicture: <Pen />,
  },
  {
    path: Paths.ABOUT,
    ariaLabel: 'About',
    filledPicture: <FPerson />,
    plainPicture: <Person />,
  },
  {
    path: Paths.CONTACT,
    ariaLabel: 'Contact information',

    filledPicture: <FMail />,
    plainPicture: <Mail />,
  },
]
