import React from 'react';

import { Unsubscribe } from 'react-emails-components-miscellaneous';

// TODO: add condition for rendering different labels
const UnsubscribeLink = ({href, label}) => (
  <>
   <a href="{href}" class="body text-primary">
       Unsubscribe
    </a>
  </>
);

export default UnsubscribeLink;
