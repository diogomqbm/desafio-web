import React, { useEffect } from "react";
import { Container, Title, SubTitle, Content } from "./styles";
import { getInfoFromPath, getPullsByState } from "../../utils/pulls";
import { fetchPulls } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import ListItem from "../../components/ListItem";
import Loading from "../../components/Loading";

const RepoPulls = ({ history }) => {
  const dispatch = useDispatch();
  const info = getInfoFromPath(window.location.pathname);
  const { pulls, loading, error, empty } = useSelector(state => state.repopulls);

  useEffect(() => {
    dispatch(fetchPulls(info));
  }, []);

  const getPulls = () => pulls.map(pull => (
    <ListItem key={pull.id} type="pull" {...pull}/>
  ));

  const getContent = () => {
    if (empty) {
      return (
        <h2>No results found.</h2>
      );
    }

    if (error) {
      return (
        <h2>Something went wrong :/</h2>
      );
    }

    return (
      <div>
        <p>Results found: {getPullsByState(pulls, "open").length} open/ {getPullsByState(pulls, "closed").length} closed</p>
        {getPulls()}
      </div>
    )
  }

  return (
    <Container>
      <Button onClick={history.goBack} size="small">Back</Button>
      <Title>{info.repo}</Title>
      <SubTitle>from <b>{info.creator}</b></SubTitle>
      <Content>
        {getContent()}
        {loading ? <Loading/> : null}
      </Content>
    </Container>
  );
}

export default RepoPulls;