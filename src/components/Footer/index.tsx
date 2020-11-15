import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://www.instagram.com/7539teamelev8/" rel="noreferrer noopener" target="_blank">
          Instagram
        </Styled.Link>
        <Styled.Link
          href="https://www.firstinspires.org"
          rel="noreferrer noopener"
          target="_blank"
        >
          FIRST
        </Styled.Link>
        <Styled.Link href="https://www.facebook.com/team7539/" rel="noreferrer noopener" target="_blank">
          Facebook
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
