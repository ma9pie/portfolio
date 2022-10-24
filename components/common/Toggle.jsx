import styled from "@emotion/styled";
import React from "react";

const Toggle = (props) => {
  return (
    <Container>
      <CheckBox type="checkbox" {...props}></CheckBox>
      <Slider {...props} htmlFor={props.id}></Slider>
    </Container>
  );
};

export default Toggle;

Toggle.defaultProps = {
  id: "checkbox1", // 체크박스 id
  width: "56px", // 토글 너비
  height: "28px", // 토글 높이
  margin: "0px", // 토글 마진
  padding: "0px", // 토글 패딩
  toggleOffBackground: "var(--disableBtn)", // off 상태의 토글 배경
  toggleOnBackground: "var(--primaryColor)", // on 상태의 토글 배경
  sliderMargin: "2.5px", // 슬라이더와 토글 테두리 사이의 간격
  sliderColor: "#ffffff", // 슬라이더 색
};

const Container = styled.div`
  position: relative;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;
const Slider = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.height};
  background: ${(props) => props.toggleOffBackground};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: ${(props) =>
      `calc(${props.height} - ${props.sliderMargin} - ${props.sliderMargin})`};
    height: ${(props) =>
      `calc(${props.height} - ${props.sliderMargin} - ${props.sliderMargin})`};
    margin: ${(props) => props.sliderMargin};
    background: ${(props) => props.sliderColor};
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0px;
  &:checked + label {
    background: ${(props) => props.toggleOnBackground};
    &::after {
      margin-left: ${(props) =>
        `calc(${props.width} - ${props.height} + ${props.sliderMargin})`};
    }
  }
`;
