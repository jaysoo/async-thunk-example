import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DataAccessProps {}

const StyledDataAccess = styled.div`
  color: pink;
`;

export const DataAccess = (props: DataAccessProps) => {
  return (
    <StyledDataAccess>
      <h1>Welcome to data-access component!</h1>
    </StyledDataAccess>
  );
};

export default DataAccess;
