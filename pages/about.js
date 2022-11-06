import styled from "@emotion/styled";
import DesktopLayout from "@/layouts/DesktopLayout";

function About() {
  return <Wrapper>About</Wrapper>;
}

export default About;

About.getLayout = function getLayout(page) {
  return <DesktopLayout>{page}</DesktopLayout>;
};

const Wrapper = styled.div``;
