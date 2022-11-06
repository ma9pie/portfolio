import styled from "@emotion/styled";
import DesktopLayout from "@/layouts/DesktopLayout";

function Projects() {
  return <Wrapper>Projects</Wrapper>;
}

export default Projects;

Projects.getLayout = function getLayout(page) {
  return <DesktopLayout>{page}</DesktopLayout>;
};

const Wrapper = styled.div``;
