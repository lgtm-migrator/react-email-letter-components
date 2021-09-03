import React from 'react';

import { styles } from './styles';

import { config } from './config';

// TODO: moveout contact link and a message to the outside
// should be easy to do

import { Link } from 'react-emails-components-miscellaneous';


const props = {
  href: config.contact,
  style: styles.news,
  label: 'Click Here To Sponsor A Newsletter by Hacker Noon'
}

const NewsletterSponsorshipLink = () => (
<div style={styles.center}>
  <br />
  <Link >
</div>
);

export default NewsletterSponsorshipLink;

// const NewsletterSponsorshipLink = () => (
//   <div style={styles.center}>
//     <br />
//     <a href={config.contact} 
//       data-testid="newsletterHrefTest" 
//       target="_blank" 
//       style={styles.news}>
//       Click Here To Sponsor A Newsletter by Hacker Noon
//     </a>
//   </div>
// );

// export default NewsletterSponsorshipLink;
