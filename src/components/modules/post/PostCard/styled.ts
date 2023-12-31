import styled from 'styled-components';

import { Link } from 'common';

export const PostCardContainer = styled.div`
  width: max(25vw, 640px);
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid lightgray;
  margin-bottom: 16px;
`;

export const PostCardBody = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
`;

export const PostCardTitle = styled.h2`
  flex: 6;
`;

export const PostCardLink = styled(Link)`
  width: 100%;
  text-align: right;
  color: black;
`;

export const PostCardAction = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  gap: 4px;
`;

export const PostCardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px;
  background-color: lightgray;
`;
