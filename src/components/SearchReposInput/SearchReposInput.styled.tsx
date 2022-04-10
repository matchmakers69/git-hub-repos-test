import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  height: 4rem;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.transparent};
  width: calc(100% - 120px);
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.colors.white};

  ::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const SearchButton = styled.button`
  cursor: pointer;
  width: 120px;
  height: 4rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
