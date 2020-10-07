import React from "react";
import styled from "styled-components";

import { GoMarkGithub } from "react-icons/go";

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundHorizontalPanel};
  flex: 0 0 40px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

const Section = styled.div`
  padding: 10px;
`;

const Component: React.FC = (props) => {
  return (
    <Footer>
      <Inner>
        <Section>
          Created and maintaintained by{" "}
          <a href="https://evdev.me">Evgeny Yakimov</a>
        </Section>
        <Section>
          View project source on{" "}
          <a href="https://github.com/eyjohn/evchat-ui">
            GitHub <GoMarkGithub />
          </a>
        </Section>
      </Inner>
    </Footer>
  );
};
export default Component;
