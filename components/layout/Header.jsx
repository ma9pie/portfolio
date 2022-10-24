import styled from "@emotion/styled";
import React from "react";
import ThemeToggle from "@/components/common/ThemeToggle";

const Header = () => {
  return (
    <Wrapper>
      Header
      <ThemeToggle></ThemeToggle>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100vw;
  height: 150px;
`;
