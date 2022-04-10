import SearchReposInput from "components/SearchReposInput";
import { useCallback, useEffect, useState } from "react";
import { fetchReposBySearchQueries } from "services/API/fetchRepos";
import { IRepo } from "types/repos";
import ReposList from "./ReposList";
import * as S from "./common.styled";

const PER_PAGE = 25;

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const[reposAlert, setRepoAlert] = useState("");
  const [reposData, setReposData] = useState<IRepo | null>(null);

  const fetchReposData = useCallback(
    async (searchQuery) => {
      setLoading(true);

      const queryTerm = `q=${encodeURIComponent(searchQuery)}`;
      const queryPerPage = `&per_page=${PER_PAGE}`;
      const queryPageNumber = `&page=${pageNumber || 1}`;

      const searchParams = `${queryTerm}${queryPerPage}${queryPageNumber}`;
      try {
        const responseData = await fetchReposBySearchQueries(searchParams);
        if(!responseData.items.length){
          setRepoAlert("Sorry there are no repos")
        }else {
          setRepoAlert("")
        }
        setLoading(false);
        setReposData(responseData);
      } catch (error) {
        console.log(error);
      }
    },
    [pageNumber]
  );

  useEffect(() => {
    if (!reposData) return;
    fetchReposData(searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, fetchReposData, searchQuery]);

  const handleSearchSubmit = (term: string) => {
    setSearchQuery(term);
    fetchReposData(term);
  
  };

  const handleGoToNextPrevPagination = (direction: string) => {
    let offset = pageNumber * PER_PAGE;
    let results = reposData ? reposData.total_count : 0;

    if (direction === "prev" && pageNumber >= 2) {
      setPageNumber(pageNumber - 1);
    }

    if (direction === "next" && pageNumber > 0 && offset < results) {
      setPageNumber(pageNumber + 1);
    }
  };

  if (loading) {
    return <div>Loading data here...</div>;
  }

  return (
    <S.SearchContainer>
      <S.ReposResultWrapper>
        <S.OuterList>
          <SearchReposInput
            initialTerm={searchQuery}
            onSubmit={handleSearchSubmit}
          />
          <div>
            {reposAlert}
          </div>
          {reposData && (
            <>
              <ReposList repos={reposData?.items} />
              <S.PaginationWrapper>
                <S.PaginationBtn
                  disabled={pageNumber <= 1}
                  onClick={() => handleGoToNextPrevPagination("prev")}
                >
                  ❮
                </S.PaginationBtn>
                <S.TotalPagesWrapper>
                  <S.PageNumberLabel>Page</S.PageNumberLabel>
                  <S.PageNumber>{pageNumber}</S.PageNumber>
                </S.TotalPagesWrapper>
                <S.PaginationBtn
                  onClick={() => handleGoToNextPrevPagination("next")}
                >
                  ❯
                </S.PaginationBtn>
              </S.PaginationWrapper>
            </>
          )}
        </S.OuterList>
      </S.ReposResultWrapper>
    </S.SearchContainer>
  );
};

export default Search;
