import React from 'react';

import { Unsubscribe } from 'react-emails-components-miscellaneous';

// TODO: add condition for rendering different labels
const UnsubscribeLink = ({href, label}) => (

    let props = {
      href: href,
      class: "body text-primary",
      label: "Unsubscribe",
    };

   <Unsubscribe {...props} /> 

);

export default UnsubscribeLink;
