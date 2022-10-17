import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeState } from "recoil/atom";

const Main = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <Wrapper>
      <Gnb>
        <LinkBox>
          <Link to="/">Home</Link>
        </LinkBox>
        <LinkBox>
          <Link to="/about">About</Link>
        </LinkBox>
        <LinkBox>
          <Link to="/resume">Resume</Link>
        </LinkBox>
      </Gnb>
      Main3
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div``;

const Gnb = styled.nav`
  display: flex;
`;
const LinkBox = styled.div`
  margin-right: 8px;
`;
