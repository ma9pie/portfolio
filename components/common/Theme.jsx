import styled from "@emotion/styled";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commonActions } from "@/redux/modules/common";
import Toggle from "@/components/common/Toggle";

/**
 * @deprecated
 * 테마관련 설정은 components/layout/SettingTooltip.jsx에서 수정
 * [Title] 테마
 * [Description] 테마를 변경해주는 컴포넌트
 * localStorage를 사용하므로 해당 컴포넌트를 불러올 때 dynamic 함수로
 * ssr:false를 해준 뒤 import해야 함
 * 테마 변경 시 setAttribute를 통해 테마 값을 변경해주고
 * globals.scss에서 data-theme값에 따라 css변수의 색들 값을 변경시켜줌
 * localStorage.setItem("theme", 테마값)으로도 테마를 저장 로컬로 저장
 */

const Theme = (props) => {
  const dispatch = useDispatch();
  const commonState = useSelector((state) => state.common);

  // 다크 모드
  const setDark = useCallback(() => {
    localStorage.setItem("theme", "Dark");
    document.documentElement.setAttribute("data-theme", "Dark");
    dispatch(commonActions.setTheme("Dark"));
  }, [dispatch]);

  // 라이트 모드
  const setLight = () => {
    localStorage.setItem("theme", "Light");
    document.documentElement.setAttribute("data-theme", "Light");
    dispatch(commonActions.setTheme("Light"));
  };

  // 테마 변경
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: Dark)").matches;

  const defaultDark =
    storedTheme === "Dark" || (storedTheme === null && prefersDark);

  useEffect(() => {
    if (defaultDark) {
      setDark();
    }
  }, [defaultDark, setDark]);

  return (
    <Wrapper {...props}>
      <Toggle
        id="themeToggle"
        onChange={toggleTheme}
        defaultChecked={defaultDark}
      ></Toggle>
    </Wrapper>
  );
};

export default Theme;

const Wrapper = styled.div`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;
