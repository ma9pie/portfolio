import styled from "@emotion/styled";
import React from "react";
import Footer from "@/components/layout/Footer";
import Head from "@/components/layout/Head";
import Header from "@/components/layout/Header";
import Top from "@/components/layout/Top";

function DesktopLayout(props) {
  return (
    <Container>
      <Head></Head>
      {/* <Top></Top> */}
      <Header></Header>
      <Body>{props.children}</Body>
      <Footer></Footer>
    </Container>
  );
}

export default DesktopLayout;

const Container = styled.div``;

const Body = styled.div``;
