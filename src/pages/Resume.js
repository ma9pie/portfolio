import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const Resume = () => {
  const count = useRecoilValue("test");
  return <div>Resume{count}</div>;
};

export default Resume;
