import { IRepos } from "types/repos";
import * as S from "./ReposList.styled";

type IReposListProp = {
  repos: IRepos[];
};
const ReposList = ({ repos }: IReposListProp) => {
  return (
    <S.Results>
      <S.ListInner>
        {repos
          .sort(
            (a, b) => Number(a.stargazers_count) - Number(b.stargazers_count)
          )
          .map((repo) => {
            return (
              <S.SingleRepo key={repo?.id}>
                <S.Name>{repo?.name}</S.Name>
                <S.FullName>{repo?.full_name}</S.FullName>
                <S.Description>{repo?.description}</S.Description>
                <S.RepoDetails>
                  <S.StarsWrapper>
                    <S.StarsLabel>Amount of stars</S.StarsLabel>
                    <S.StarsAmount>{repo?.stargazers_count}</S.StarsAmount>
                  </S.StarsWrapper>
                </S.RepoDetails>
              </S.SingleRepo>
            );
          })}
      </S.ListInner>
    </S.Results>
  );
};

export default ReposList;
