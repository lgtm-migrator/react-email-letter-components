import React from 'react';

import { Copyright } from 'react-emails-components-miscellaneous';

const Copyright = ({companyName}) => (
  <em data-testid="copyTest">
    Copyright ©
    {new Date().getFullYear()}
    {' '}
    {companyName}. 
    All rights reserved.
  </em>
);

export default Copyright;
