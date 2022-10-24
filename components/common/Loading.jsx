/**
 * [Titl] 로딩
 * [Description] API호출 시 응답시간동안 빈페이지 대신
 * 로딩중을 표시하기 위한 컴포넌트
 * 작성
 */
import styled from "@emotion/styled";
import React from "react";

function Loading(props) {
  return <Wrapper {...props}></Wrapper>;
}

export default Loading;

Loading.defaultProps = {
  width: "30px",
  height: "30px",
  margin: "auto",
};

const Wrapper = styled.div`
  position: relative;
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border: 4px solid var(--disabledMainBtn);
  border-radius: 50%;
  border-top-color: var(--primaryColor);
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
