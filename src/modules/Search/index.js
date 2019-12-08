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
        <TextInput placeholder="Keyword"/>
        <div>
          <label>Sort:</label>
          <Select>
            {getSortOptions}
          </Select>
        </div>
        <div>
          <label>Order:</label>
          <Select>
            {getOrderOptions}
          </Select>
        </div>
        <Button>
          Search repos
        </Button>
      </Header>

      <div>

      </div>
      
    </Wrapper>
  )
}

export default Search;