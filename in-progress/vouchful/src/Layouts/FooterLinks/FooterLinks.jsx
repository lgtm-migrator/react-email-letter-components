import React from 'react';

import { Link, Unsubscribe } from 'react-emails-components-miscellaneous'; 

const FooterLinks = ({}) => (
    <tr>
        <td align="left" class="body text-secondary">
            You are being contacted because you signed up for Company.
            <br>
            
            <Link />
            <Unsubscribe />
            <Link />
            
            <a href="https://www.example.com" 
                class="body text-primary">Unsubscribe</a> | 
            <a href="https://www.example.com" 
                class="body text-primary">Privacy Policy</a> | 
            <a href="https://www.example.com" 
                class="body text-primary">Support</a>
        </td>

    </tr>  
);

export default FooterLinks;