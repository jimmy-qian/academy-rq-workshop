import styled from 'styled-components';

import { Link } from 'common';

export const PostCardContainer = styled.div`
  width: max(25vw, 480px);
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid lightgray;
  margin-bottom: 16px;
`;

export const PostCardTitle = styled.h2`
  flex: 6;
`;

export const PostCardLink = styled(Link)`
  width: 100%;
  text-align: right;
  flex: 2;
  color: black;
`;

export const PostCardFooter = styled.div`
  display: flex;
`;
