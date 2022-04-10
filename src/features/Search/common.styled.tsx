import styled, { css } from "styled-components";

export const sharedPagination = css`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
`;

export const SearchContainer = styled.div`
  padding: 0 5%;
  max-width: 96rem;
  margin: 0 auto;
  width: 100%;
`;

export const ReposResultWrapper = styled.div`
  gap: 2rem;
  padding: 1rem;
  font-size: 1.4rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const OuterList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const PaginationWrapper = styled.div`
  gap: 2rem;
  padding: 1rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TotalPagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PageNumberLabel = styled.span`
  ${sharedPagination}
`;

export const PageNumber = styled.span`
  font-weight: ${({ theme }) => theme.weight.semiBold};
  ${sharedPagination}
`;

export const PaginationBtn = styled.button`
  width: 3.5rem;
  cursor: pointer;
  height: 3.5rem;
  border-radius: 100%;
  font-weight: ${({ theme }) => theme.weight.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
  }
`;
