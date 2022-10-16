import React, { useEffect } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { darkMode } from "recoil/atoms";

const Main = () => {
  const [test, setTest] = useRecoilState(darkMode);

  return <div>Main{test}</div>;
};

export default Main;
