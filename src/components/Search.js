import React from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const Search = ({ keyword, setKeyword, handleSearchInput }) => {
  return (
    <div style={style}>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          type="text"
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search feed"
          inputProps={{ "aria-label": "search feed" }}
          value={keyword}
          onChange={(evt) => setKeyword(evt.target.value)}
        />

        <IconButton
          type="button"
          sx={{ p: "10px" }}
          onClick={handleSearchInput}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default Search;

const style = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "25px",
};
