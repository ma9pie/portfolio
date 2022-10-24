import styled from "@emotion/styled";
import Theme from "@/components/common/ThemeToggle";
import Header from "@/components/layout/Header";
import DesktopLayout from "@/layouts/DesktopLayout";

function Home() {
  return <Wrapper>index</Wrapper>;
}

export default Home;

Home.getLayout = function getLayout(page) {
  return <DesktopLayout>{page}</DesktopLayout>;
};

const Wrapper = styled.div``;
