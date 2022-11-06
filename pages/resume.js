import styled from "@emotion/styled";
import DesktopLayout from "@/layouts/DesktopLayout";

function Resume() {
  return <Wrapper>Resume</Wrapper>;
}

export default Resume;

Resume.getLayout = function getLayout(page) {
  return <DesktopLayout>{page}</DesktopLayout>;
};

const Wrapper = styled.div``;
