import React from "react";
import styled from "styled-components";

import { GoMarkGithub } from "react-icons/go";

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 0 0 40px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundHorizontalPanel};
`;

const Section = styled.div`
  padding: 10px;
`;

const Component: React.FC = (props) => {
  return (
    <Footer>
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
    </Footer>
  );
};
export default Component;
