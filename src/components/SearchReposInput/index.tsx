import { ChangeEvent, useState } from "react";
import * as S from "./SearchReposInput.styled";

type ISearchReposInputProps = {
  initialTerm: string;
  onSubmit: (query: string) => void;
};

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
        <form onSubmit={handleSearchSubmit}>
          <S.SearchInputWrapper>
            <S.SearchInput
              onChange={handleSearchByTermChange}
              type="text"
              value={serchTerm}
              placeholder="Enter your search query"
            />
            <S.SearchButton type="submit">Search repos</S.SearchButton>
          </S.SearchInputWrapper>
        </form>
      </S.SearchContainer>
    </>
  );
};

export default SearchReposInput;
