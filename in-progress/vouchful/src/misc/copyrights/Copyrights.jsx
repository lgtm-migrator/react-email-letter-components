import React from 'react';

import { Copyright, Address } from 'react-emails-components-miscellaneous';

// TODO: maybe make it as copyrightlayout? 
// let's think about it later

const CopyrightRow = ({}) => (
    <td align="left" class="body text-secondary">
      <Copyright type="one">
        © Company, Inc. All Rights Reserved.
      </Copyright> 
      <br>
      <Address>
        <span class="address">101 King St, San Francisco, CA 94107</span>  
      </Address>
    </td> 
);

export default CopyrightRow;
