import React from 'react';

// TODO: add condition for rendering different labels
const UnsubscribeLink = ({href, label}) => (
  <>
   <a href="{href}" class="body text-primary">
       Unsubscribe
    </a>
  </>
);

export default UnsubscribeLink;
