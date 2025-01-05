import { nanoid } from 'nanoid'

export const projects = [
  {
    id: nanoid(),
    name: 'Nallagram',
    description: 'Open-source social networking platform',
    pictures: [
      {
        id: nanoid(),
        src: '/projects/nallagram/2.png',
        alt: 'Nallagram Home Screen',
      },
      {
        id: nanoid(),
        src: '/projects/nallagram/2.png',
        alt: 'Nallagram Profile Screen',
      },
      // Add more images as needed
    ],
    summary: `Nallagram is an open-source social networking platform inspired by Instagram. It allows users to create, share, and exchange information and ideas within virtual communities and networks. Features include photo feeds, posting photos from the camera or gallery, liking and commenting on posts, profile management, and one-on-one chat functionality.`,
    technologies: 'Flutter, Dart, Firebase',
    live: 'https://cyblogerz.github.io/Nallagram/',
    code: 'https://github.com/cyblogerz/Nallagram',
  },
  {
    id: nanoid(),
    name: 'Zippy eLibrary',
    description: 'Mobile application for browsing eBooks',
    pictures: [
      {
        id: nanoid(),
        src: '/projects/nallagram/zipppy.png',
        alt: 'Zippy eLibrary Home Screen',
      },
      {
        id: nanoid(),
        src: '/projects/nallagram/zipppy.png',
        alt: 'Zippy eLibrary Book Details',
      },
      // Add more images as needed
    ],
    summary: `Zippy is a mobile application developed using the Flutter framework that allows users to browse eBooks from the Google Books library. It offers a convenient and user-friendly way to access a wide variety of eBooks, including bestsellers, classic literature, and modern works. Features include exploring eBooks, querying eBooks, and opening PDFs.`,
    technologies: 'Flutter, Dart, Google Books API',
    code: 'https://github.com/cyblogerz/Zippy-elibrary',
  },
  {
    id: nanoid(),
    name: 'HacktoberHub',
    description: 'Hacktoberfest project explorer',
    pictures: [
      {
        id: nanoid(),
        src: 'https://github.com/cyblogerz/hacktoberHub/raw/main/image.png',
        alt: 'HacktoberHub Home Screen',
      },

      // Add more images as needed
    ],
    summary: `HacktoberHub is a website that lets users explore a vast collection of open-source projects participating in Hacktoberfest. With a minimalistic and user-friendly interface, finding the perfect project to contribute to has never been easier.`,
    technologies: 'React, JavaScript, Netlify',
    live: 'https://hacktoberhub.netlify.app/',
    code: 'https://github.com/cyblogerz/hacktoberHub',
  },
  {
    id: nanoid(),
    name: 'skyOS',
    description: 'Productivity-focused digital environment',
    pictures: [
      {
        id: nanoid(),
        src: 'https://github.com/skai-org/skyOS/raw/main/images/home.png',
        alt: 'skyOS Desktop View',
      },
      {
        id: nanoid(),
        src: 'https://github.com/skai-org/skyOS/raw/main/images/terminal.png',
        alt: 'skyOS App Launcher',
      },
      // Add more images as needed
    ],
    summary: `skyOS is a productivity-focused digital environment inspired by macOS. Built with React and Tauri, it simulates a desktop environment similar to macOS, aiming to enhance user experience with a range of features.`,
    technologies: 'React, Tauri, JavaScript',
    code: 'https://github.com/skai-org/skyOS',
  },
  // Add more projects as they become available
]
