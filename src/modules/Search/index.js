import React, { useEffect } from "react";
import { SORT_OPTIONS, ORDER_OPTIONS } from "./constants";
import { fetchRepos } from "./actions";
import { useDispatch } from "react-redux";
import { TextInput, Wrapper, Select } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";

const Search = () => {
  const dispatch = useDispatch();

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

  return (
    <Wrapper>
      <Header>
        <TextInput placeholder="Search repo by keyword"/>
        <Select>
          {getSortOptions}
        </Select>
        <Select>
          {getOrderOptions}
        </Select>
        <Button>
          Buscar
        </Button>
      </Header>
      <h1>Bla</h1>
    </Wrapper>
  )
}

export default Search;