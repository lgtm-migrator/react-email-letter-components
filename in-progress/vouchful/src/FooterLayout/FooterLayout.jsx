import React from 'react';

import { 
  Link, Unsubscribe, 
  ImageLink, Address
 } from 'react-emails-components-miscellaneous';

import Spacer from '../inside-content/Spacer';
import SocialMedia1 from '..'

const Footer = ({}) => (
<tr>
        <td align="left" id="footer">

          <table border="0" cellpadding="0" cellspacing="0" role="presentation">

            <tbody> 
              <tr>
                <td align="left">

                  <table border="0" cellpadding="0" cellspacing="0" role="presentation">

                    <tbody>
                      <tr>
                        <td valign="top" width="28">

                          <ImageLink />
                          <a href="https://www.example.com">
                            <img 
                                alt="Icon" 
                                border="0" 
                                src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" width="28">
                          </a>

                        </td>
                        <td width="16"></td>
                        <td valign="top" width="28">

                        <ImageLink />
                          <a href="https://www.example.com">
                            <img alt="Icon" border="0" src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" width="28">
                          </a>

                        </td>
                        <td width="16"></td>
                        <td valign="top" width="28">
                          
                          <ImageLink />
                          

                        </td>
                        <td width="16"></td>
                        <td valign="top" width="28">

                          <ImageLink />
                          

                        </td>
                      </tr>
                    </tbody>
                  </table>  
                </td>
              </tr>       

              <Spacer /> 
              


              <tr>
                <td align="left" class="body text-secondary">
                  © Company, Inc. All Rights Reserved.
                  <br>
                  <span class="address">101 King St, San Francisco, CA 94107</span>
                </td>
              </tr>



              <Spacer />     
              <FooterLayout />

              

            </tbody>           
          </table>
        </td>
      </tr>
);

export default Footer;