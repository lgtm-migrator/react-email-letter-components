import React from 'react';

// import { SocialMedia } from 'react-emails-components-miscellaneous';

import { BasicTable } from 'react-email-components-table';

import SocialIcons from '../../Elements/SocialIcons/SocialIcons.jsx'

const SocialMediaLayout = ({}) => (

  <td align="left">

    <table border="0" cellpadding="0" cellspacing="0" role="presentation">
      <tbody>
        <tr>


          <SocialIcons href="https://www.example.com" src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" />
            
          <td width="16"></td>
          <SocialIcons href="https://www.example.com" src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" />

          <td width="16"></td>

          <SocialIcons href="https://www.example.com" src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" />

          <td width="16"></td>
          <SocialIcons href="https://www.example.com" src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" />

        </tr>
      </tbody>
    </table>  
    
  </td>

);

export default SocialMediaLayout;