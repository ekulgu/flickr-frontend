import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Search from "../components/Search";

describe("Testing Search component", () => {
  test("Updates keyword value when on input change", () => {
    const setKeyword = jest.fn();
    const { getByLabelText } = render(
      <Search keyword="" setKeyword={setKeyword} handleSearchInput={() => {}} />
    );
    const textField = getByLabelText("search feed");

    // mock texfield to enter a value and trigger the action
    fireEvent.change(textField, { target: { value: "test" } });

    expect(setKeyword).toHaveBeenCalledWith("test");
  });

  test("Calls handleSearchInput function when search icon button clicked", () => {
    const handleSearchInput = jest.fn();
    const { getByRole, getByLabelText } = render(
      <Search
        keyword=""
        setKeyword={() => {}}
        handleSearchInput={handleSearchInput}
      />
    );
    const textField = getByLabelText("search feed");
    const searchIconBtn = getByRole("button", { "aria-label": "search" });

    // mock texfield and button to enter a value and trigger the action
    fireEvent.change(textField, { target: { value: "test" } });
    fireEvent.click(searchIconBtn);

    expect(handleSearchInput).toHaveBeenCalled();
  });
});
