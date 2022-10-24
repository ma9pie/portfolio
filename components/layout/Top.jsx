import styled from "@emotion/styled";
import React from "react";

const Top = () => {
  return (
    <Wrapper>
      <Color>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
          width="100%"
          height="80px"
          fill="var(--bg)"
        >
          <polygon points="0,10 10,0 10,10"></polygon>
        </svg>
      </Color>
    </Wrapper>
  );
};

export default Top;

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
`;
const Color = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #22dda5, #8360c3);
  background-size: 200% 100%;
  animation: Gradient 5s ease infinite;
  -webkit-animation: Gradient 5s ease infinite;

  @keyframes Gradient {
    0% {
      background-position: 0 50%;
      background-position-x: 0;
      background-position-y: 50%;
    }
    50% {
      background-position: 100% 50%;
      background-position-x: 100%;
      background-position-y: 50%;
    }
    to {
      background-position: 0 50%;
      background-position-x: 0;
      background-position-y: 50%;
    }
  }

  & * {
    background-color: transparent;
  }
`;
