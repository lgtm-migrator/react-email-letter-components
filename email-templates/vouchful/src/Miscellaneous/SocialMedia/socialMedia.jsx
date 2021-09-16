import React from 'react';

// import { SocialMedia } from 'react-emails-components-miscellaneous';
import { Table, BasicTablec } from 'react-email-components-table';

import SocialIcons from '../SocialIcons/SocialIcons.jsx'

const SocialMedia1 = ({}) => (

  <td align="left">
    <table border="0" cellpadding="0" cellspacing="0" role="presentation">
      <tbody>
        <tr>


          <SocialIcons href="https://www.example.com" src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" alt="Icon" border="0" />
            
          <td width="16"></td>
          <SocialIcons href="https://www.example.com" src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" alt="Icon" border="0" />

          <td width="16"></td>

          <SocialIcons href="https://www.example.com" src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" alt="Icon" border="0" />

          <td width="16"></td>
          <SocialIcons href="https://www.example.com" src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" alt="Icon" border="0" />

        </tr>
      </tbody>
    </table>  
  </td>

);

export default SocialMedia1;