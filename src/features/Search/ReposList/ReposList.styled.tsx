import styled from "styled-components";

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ListInner = styled.div``;

export const SingleRepo = styled.div`
  padding: 1rem 0 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: ${({ theme }) => theme.colors.white};
  display: block;
  margin-bottom: 5px;
`;

export const FullName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.weight.medium};
  color: ${({ theme }) => theme.colors.white};
  display: block;
  margin-bottom: 8px;
`;

export const Description = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const StarsWrapper = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StarsLabel = styled.span`
  font-size: inherit;
  display: inline-block;
  margin-right: 5px;
`;

export const StarsAmount = styled.span`
  font-size: inherit;
  display: inline-block;
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;

export const RepoDetails = styled.div`
  font-size: 0.7rem;
  display: flex;
  gap: 1rem;
  line-height: 1.25rem;
`;
