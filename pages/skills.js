import styled from "@emotion/styled";
import DesktopLayout from "@/layouts/DesktopLayout";

function Skills() {
  return <Wrapper>Skills</Wrapper>;
}

export default Skills;

Skills.getLayout = function getLayout(page) {
  return <DesktopLayout>{page}</DesktopLayout>;
};

const Wrapper = styled.div``;
