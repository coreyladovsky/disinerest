import React, { useState } from "react";
import { fetchQueryPins } from "../../../actions/pins_actions";
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import '../../../css/SearchForm.css'

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [outline, setOutline] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = e => {
    setQuery(e.target.value);
    setOutline(true);
  };

  const updateBorder = (e) => setOutline(!outline);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchQueryPins({query: query}));
    setQuery("");
    history.push("/")
  };
  return (
    <form onSubmit={handleSubmit} className="SearchForm">
      <div className={outline ? "outline" : "noOutline"}>
        <i className="fa fa-search" ></i>
        <input
          type="text"
          onChange={handleChange}
          onFocus={updateBorder}
          onBlur={updateBorder}
          value={query}
          placeholder="Search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
