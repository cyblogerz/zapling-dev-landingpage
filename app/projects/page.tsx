'use client'

import useInView from 'src/hooks/useInView'
import Carousel from 'src/components/Carousel'
import Dots from 'src/components/Dots'
import Summary from 'src/components/Summary'
import DownloadButton from 'src/components/DownloadButton'
import { projects } from './constants'
import Apple from 'src/assets/icons/apple.svg'
import {
  StyledProjects,
  MainHeader,
  ProjectHolder,
  ProjectInitials,
  ProjectName,
  ProjectDescription,
  TechnologiesSection,
  TechnologiesHeader,
  Technologies,
  SummarySection,
  SummaryHeader,
  ProjectLinks,
  Link,
} from './styles'

const Projects = () => {
  const visibleSections = useInView('h2[id], p[id], body div[id]')

  return (
    <StyledProjects>
      <MainHeader>Notable Projects</MainHeader>
      {projects.map((project, index) => (
        <ProjectHolder key={project.id}>
          <ProjectInitials
            id={`projectInitials${index}`}
            isVisible={visibleSections[`projectInitials${index}`]}
          >
            <ProjectName>{project.name}</ProjectName>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectInitials>

          <Carousel
            pictures={project.pictures}
            name={project.name}
            id={`carousel${index}`}
            isVisible={visibleSections[`carousel${index}`]}
          />

          <TechnologiesSection
            id={`technologiesSection${index}`}
            isVisible={visibleSections[`technologiesSection${index}`]}
          >
            <TechnologiesHeader>Technologies</TechnologiesHeader>
            <Technologies>{project.technologies}</Technologies>
          </TechnologiesSection>

          <SummarySection
            id={`summarySection${index}`}
            isVisible={visibleSections[`summarySection${index}`]}
          >
            <SummaryHeader>Summary</SummaryHeader>
            <Summary summary={project.summary} />
          </SummarySection>

          <ProjectLinks id={`projectLinks${index}`}>
            {project.appleLink ? (
              <DownloadButton
                icon={<Apple />}
                text="Download on the"
                platform="App Store"
                href={project.appleLink}
                isVisible={visibleSections[`projectLinks${index}`]}
              />
            ) : (
              <>
                <Link
                  href={project.live}
                  target="_blank"
                  isVisible={visibleSections[`projectLinks${index}`]}
                >
                  🚀 Live Preview
                </Link>

                {project.code && (
                  <Link
                    href={project.code}
                    target="_blank"
                    isVisible={visibleSections[`projectLinks${index}`]}
                  >
                    ⚗️ View Code
                  </Link>
                )}
              </>
            )}
          </ProjectLinks>
          {projects.length !== index + 1 && (
            <Dots isVisible={visibleSections[`projectLinks${index}`]} />
          )}
        </ProjectHolder>
      ))}
    </StyledProjects>
  )
}

export default Projects
