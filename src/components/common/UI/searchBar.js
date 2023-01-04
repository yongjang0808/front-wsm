import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";


function SearchBar() {
  const [setFilter] = useState("");

  return (
      <div id="searchDiv">
        <form className="form-inline">
          <input
            size="80"
            className="SearchIcon"
            type="text"
            id="myInput"
            se
            onChange={(e) => setFilter(e.target.value.toLowerCase())}
            placeholder="검색어를 입력하세요"
          />
        </form>
      </div>
  );
}

export default SearchBar;
