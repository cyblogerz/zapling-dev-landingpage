import { Position } from 'app/styles';
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for sliding animation
const slideIn = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;
interface AnimatedKeywordProps {
    isEntering: boolean;
  }
  
  const AnimatedKeyword = styled.span<AnimatedKeywordProps>`
  display: inline-block;
  /* position: absolute; */
  animation: ${({ isEntering }) => (isEntering ? slideIn : slideOut)} 0.5s ease-in-out;
`;

const KeywordWrapper = styled.div`
  display: inline-block;
  position: relative;
  height: 1em; /* Adjust based on font size */
  overflow: hidden;
  width: 4ch; /* Adjust width to accommodate the longest keyword */
  text-align: center;
`;

const RotatingPosition = () => {
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const [isEntering, setIsEntering] = useState(true);

  const keywords = ['web', 'app', 'AI'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEntering(false);
      setTimeout(() => {
        setCurrentKeywordIndex((prev) => (prev + 1) % keywords.length);
        setIsEntering(true);
      }, 500); // Match this timeout with the animation duration
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Position>
      Crafting smart and efficient{' '}
      <KeywordWrapper>
        <AnimatedKeyword key={currentKeywordIndex} isEntering={isEntering}>
          {keywords[currentKeywordIndex]}
        </AnimatedKeyword>
      </KeywordWrapper>{' '}
      software
    </Position>
  );
};

export default RotatingPosition;