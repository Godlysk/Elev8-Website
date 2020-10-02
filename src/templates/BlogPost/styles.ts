import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Title = styled.h3`
  ${tw`font-semibold mb-4`};
`;

export const Image = styled.figure`
  ${tw`w-full rounded-lg overflow-hidden mt-4 mb-10`};
`;

export const Links = styled.div`
  ${tw`w-full flex justify-between mt-10`};

  #right {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  #left {
    margin-right: 1em;
    transform: translateX(8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    #right {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }

    #left {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`;