import { ChangeEvent, useState } from "react";
import * as S from "./SearchReposInput.styled";

export interface ISearchReposInputProps {
  initialTerm: string;
  onSubmit: (query: string) => void;
}

const SearchReposInput = ({
  initialTerm,
  onSubmit,
}: ISearchReposInputProps) => {
  const [serchTerm, searchTermQuery] = useState(initialTerm);

  const handleSearchByTermChange = (e: ChangeEvent<HTMLInputElement>): void => {
    searchTermQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (serchTerm !== "") {
      onSubmit(serchTerm);
    }
  };

  return (
    <>
      <S.SearchContainer>
        <form data-testid="search-form" onSubmit={handleSearchSubmit}>
          <S.SearchInputWrapper>
            <S.SearchInput
              data-testid="searchQuery"
              onChange={handleSearchByTermChange}
              type="text"
              name="serchTerm"
              value={serchTerm}
              placeholder="Enter your search query"
            />
            <S.SearchButton data-testid="submit" type="submit">Search repos</S.SearchButton>
          </S.SearchInputWrapper>
        </form>
      </S.SearchContainer>
    </>
  );
};

export default SearchReposInput;
