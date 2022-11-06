import styled from "@emotion/styled";
import DesktopLayout from "@/layouts/DesktopLayout";

function Home() {
  return <Wrapper>index</Wrapper>;
}

export default Home;

Home.getLayout = function getLayout(page) {
  return <DesktopLayout>{page}</DesktopLayout>;
};

const Wrapper = styled.div``;
