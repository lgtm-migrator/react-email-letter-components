import React from 'react';

import { styles } from './styles';

// TODO: try prop-types pkg for component attributes

import { Unsubscribe } from 'react-emails-components-miscellaneous';


// TODO: explore other ways to pass properties into it.
// maybe by doing hooks?
const Unsubscribe1 = ({ hrefUnsub }) => (

  <Unsubscribe href={hrefUnsub} style={styles.unsubscribe} label="unsubscribe" />
  
);

export default Unsubscribe1;
