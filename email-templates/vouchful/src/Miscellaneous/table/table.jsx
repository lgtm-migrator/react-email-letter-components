import React from 'react';

import { BasicTable } from 'react-emails-components-miscellaneous';


// TODO: add styles as props from the outside
const BasicTableRow = ({children}) => (

  <BasicTable>

    {children}

  </BasicTable>

);

export default BasicTableRow;
