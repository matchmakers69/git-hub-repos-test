/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import SearchInput, { ISearchReposInputProps } from "..";

const inputProps = {
  initialTerm: "",

  onSubmit() {
    return;
  },
};

const renderSearchInputWithForm = (
  props: Partial<ISearchReposInputProps> = {}
) => {
  const defaultProps = inputProps;
  return render(
    <ThemeProvider theme={theme}>
      <SearchInput {...defaultProps} {...props} />
    </ThemeProvider>
  );
};

describe("<SearchInput />", () => {
  it("should show empty search form", async () => {
    const { findByTestId } = renderSearchInputWithForm();

    const searchForm = await findByTestId("search-form");

    expect(searchForm).toHaveFormValues({
      serchTerm: "",
    });
  });
  it("renders by placeholder", () => {
    const placeholderText = "Enter your search query";
    const { getByPlaceholderText } = renderSearchInputWithForm();
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });

  it("displays proper value", () => {
    const { getByPlaceholderText } = renderSearchInputWithForm();
    const input = getByPlaceholderText("Enter your search query");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "react apps" } });
    expect(input).toHaveValue("react apps");
  });

  it("should submit the form with searchQuery", async () => {
    const onSubmit = jest.fn();
    const { findByTestId } = renderSearchInputWithForm({
      onSubmit,
    });
    const searchTerm = await findByTestId("searchQuery");
    const submit = await findByTestId("submit");
    fireEvent.change(searchTerm, { target: { value: "Angular" } });
    fireEvent.click(submit);
    expect(onSubmit).toHaveBeenCalledWith("Angular");
  });
});
