import React from "react";
import { Container, Title, SubTitle } from "./styles";
import { getInfoFromPath } from "../../utils/pulls";

const RepoPulls = ({ history }) => {

  const info = getInfoFromPath(window.location.pathname);

  return (
    <Container>
      <Title>{info.repo}</Title>
      <SubTitle>from <b>{info.creator}</b></SubTitle>
    </Container>
  );
}

export default RepoPulls;