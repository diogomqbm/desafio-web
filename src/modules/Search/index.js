import React, { useEffect } from "react";
import { SORT_OPTIONS, ORDER_OPTIONS } from "./constants";
import { fetchRepos } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { TextInput, Wrapper, Select, Label, Content } from "./styles";
import Loading from "../../components/Loading";
import Header from "../../components/Header";
import Button from "../../components/Button";

const Search = () => {
  const dispatch = useDispatch();
  const { loading, repos, empty, error } = useSelector(state => state.search);

  const getOptions = (options) =>
    options.map(o => (
      <option key={o} value={o}>{o}</option>
    ));

  const getSortOptions = getOptions(SORT_OPTIONS);
  const getOrderOptions = getOptions(ORDER_OPTIONS);

  useEffect(() => {
    dispatch(fetchRepos({
      queryString: "Javascript",
      page: 1,
      sort: "stars"
    }));
  }, [dispatch]);

  const getRepos = () => {
    if (repos.items) {
      return repos.items.map(i => (
        <p key={i.id}>{i.name}</p>
      ))
    }
  }
  
  const getContent = () => {
    if (empty) {
      return (<h2>No results found.</h2>)
    }

    if (error) {
      return (<h2>Something went wrong :(</h2>)
    }

    if (loading) {
      return (
        <>
          <Loading/>
        </>
      );
    }

    return (
      <div>
        <p>Results found: <b>{repos.total_count}</b></p>
        {getRepos()}
      </div>
    )
  }

  return (
    <Wrapper>

      <Header>
        <TextInput placeholder="Keyword"/>
        <div>
          <Label>Sort:</Label>
          <Select>
            {getSortOptions}
          </Select>
        </div>
        <div>
          <Label>Order:</Label>
          <Select>
            {getOrderOptions}
          </Select>
        </div>
        <Button>
          Search repos
        </Button>
      </Header>

      <Content>
        {getContent()}
      </Content>
      
    </Wrapper>
  )
}

export default Search;