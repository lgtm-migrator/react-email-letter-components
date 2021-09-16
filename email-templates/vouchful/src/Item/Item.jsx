import React from 'react';

import { 
  Image, Link
 } from 'react-emails-components-miscellaneous';

 import { Table, BasicTable } from 'react-email-components-table';

const Item = ({}) => (

    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tbody>
        <tr>
            <td align="left" valign="top" width="162" class="column-responsive">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                    <tbody>                       
                        <tr>
                            <td>



                                <img alt="Image" border="0" src="https://www.vouchful.com/images/email-kit/placeholder-1-3.png" 
                                width="162">
                                    


                            </td>
                        </tr>                        
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
                    Donec placerat
                </td>
                </tr>
                <!-- End Text --> 



                <!-- Start Text -->
                <tr>
                <td align="left" class="body text-secondary">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed felis neque, consectetur semper efficitur eu.
                </td>
                </tr>
                <!-- End Text -->  



                <tr>
                <td class="spacer-sm"></td>
                </tr>  



                <!-- Start Link -->
                <tr>
                <td align="left" class="body text-dark-gray">


                    <a href="https://www.example.com" class="body text-primary">Sed odio</a>



                </td>
                </tr>
                <!-- End Link --> 



            </tbody>
            </table>
        </td>
        </tr>
        </tbody>
    </table>

);

export default Item;