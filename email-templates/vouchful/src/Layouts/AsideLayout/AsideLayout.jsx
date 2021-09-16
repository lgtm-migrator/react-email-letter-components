import React from 'react';

import IIImage from '';
import 2 from '';
import HeadingText from '../inside-content/heading';
import Text from '../inside-content/text';

import { Link, Image } from 'react-emails-components-miscellaneous';
import { Table } from 'react-email-components-table';

// <!-- Start Aside Layout -->
const AsideLayout = ({}) => (
  <>
        <tr>
    <td>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tbody>
            <tr>
                
            <td align="left" valign="top" width="162" class="column-responsive">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                <tbody>

                    {*image*}
                    


                </tbody>
                </table>
            </td>

            <td width="24" class="column-responsive-gutter"></td>

            <td align="left" valign="top" width="348" class="column-responsive column-responsive-last">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                <tbody>


                    <!-- Start Text -->
                    <tr>
                    <td align="left" class="heading text-dark-gray">
                        Phasellus feugiat nisi ac sapien 
                    </td>
                    </tr>
                    <!-- End Text --> 


                    <!-- Start Text -->
                    <tr>
                    <td align="left" class="body text-secondary">
                        Sed vestibulum ultrices felis, nec pretium elit porttitor eu. Vestibulum et dolor tellus. Pellentesque vitae consectetur dui.
                    </td>
                    </tr>
                    <!-- End Text -->  


                    {*2*} 


                    {*link*}


                </tbody>
                </table>
            </td>
            </tr>
        </tbody>
        </table>
    </td>
    </tr>
                      
  </>
);

export default AsideLayout;

// <!-- End Aside Layout -->  

