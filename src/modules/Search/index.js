import React, { useEffect, useState } from "react";
import { SORT_OPTIONS, ORDER_OPTIONS } from "./constants";
import { fetchRepos } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { TextInput, Wrapper, Select, Label, Content, List } from "./styles";
import Loading from "../../components/Loading";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Repo from "../../components/Repo";

const Search = () => {
  const dispatch = useDispatch();
  const [queryString, setQueryString] = useState("Javascript");
  const [sort, setSort] = useState("stars");
  const [order, setOrder] = useState("asc");
  const { loading, repos, empty, error, page } = useSelector(state => state.search);

  const getOptions = (options) =>
    options.map(o => (
      <option key={o.value} value={o.value}>{o.display}</option>
    ));

  const getSortOptions = getOptions(SORT_OPTIONS);
  const getOrderOptions = getOptions(ORDER_OPTIONS);
  const searchRepos = () => dispatch(fetchRepos({
    queryString,
    page,
    sort,
    order
  }));

  const makeInfiniteScroll = () => {
    const list = document.getElementById("list");
    list.addEventListener('scroll', (e) => {
      const elem = e.target;
      if (elem.scrollTop + elem.clientHeight === elem.scrollHeight) {
        searchRepos();
      }
    });
  }

  useEffect(() => {
    searchRepos();
    makeInfiniteScroll();
  }, []);

  const getRepos = () => {
    if (repos.items) {
      return repos.items.map(i => (
        <Repo key={i.id} {...i}/>
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

    return (
      <List id="list">
        <p>Results found: <b>{repos.total_count}</b></p>
        {getRepos()}
      </List>
    )
  }

  return (
    <Wrapper>

      <Header>
        <TextInput 
          placeholder="Keyword"
          value={queryString}
          onChange={e => setQueryString(e.target.value)}
        />
        <div>
          <Label>Sort:</Label>
          <Select value={sort} onChange={e => setSort(e.target.value)}>
            {getSortOptions}
          </Select>
        </div>
        <div>
          <Label>Order:</Label>
          <Select value={order} onChange={e => setOrder(e.target.value)}>
            {getOrderOptions}
          </Select>
        </div>
        <Button type="submit">
          Search repos
        </Button>
      </Header>

      <Content>
        {getContent()}
        {loading ? <Loading/> : null}
      </Content>
      
    </Wrapper>
  )
}

export default Search;